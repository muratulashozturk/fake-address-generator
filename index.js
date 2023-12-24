const axios = require("axios");
const cheerio = require("cheerio");
const requestBuilder = require("./request_builder");
const uk = require("./scheme/scheme_uk");
const us = require("./scheme/scheme_us");
var instance = axios.create();

const parse = ($, tableIndex, scheme, offset = 0) => {
    if (!Array.isArray(scheme)) return {};

    const tableSelector = `table.table:nth-child(${tableIndex}) > tbody:nth-child(1)`;
    return scheme.reduce((result, fieldName, index) => {
        const selector = `${tableSelector} > tr:nth-child(${index + 1 + offset}) > td:nth-child(2) > b:nth-child(1)`;
        result[fieldName] = $(selector).text().trim();
        return result;
    }, {});
};

exports.Generate = async (params, rt) => {
    let country = typeof params === "string" ? params : params.country;
    let scheme = country === "uk" ? uk : us;
    let tableIndexOffset = typeof params === "object" ? 1 : 0;
    params = params && typeof params === "object" ? params : scheme.params;

    console.debug("start with scheme:", scheme.name, { params });

    try {
        let response = await axios(requestBuilder(scheme.url, params));

        if (response.status !== 200) {
            throw new Error('Failed to fetch data');
        }

        var $ = cheerio.load(response.data);
        const rJson = scheme.info.reduce((json, table) => {
            const [name] = Object.keys(table);
            let tableIndex = table[name].tableIndex + (response.data && table[name].tableIndex > 2 ? tableIndexOffset : 0);
            json[name] = parse($, tableIndex, table[name].fields, table[name].offset || 0);
            return json;
        }, {});

        rJson.address = rJson.address || {};
        rJson.address.country = country;
        rt(null, rJson);
    } catch (e) {
        rt(e, null);
    }
};