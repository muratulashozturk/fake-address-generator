const axios = require("axios");
const cheerio = require('cheerio');
const requestBuilder = require('./request_builder')
const uk = require('./scheme/scheme_uk');
const us = require('./scheme/scheme_us');
var instance = axios.create();




const parse = ($, tableIndex, scheme, offset = 0) => {
    var result = {}
    const table = `table.table:nth-child(${tableIndex})`
    const element = (index) => `tr:nth-child(${index})`
    const value = ``
    if (Array.isArray(scheme)) {
        result = scheme.reduce((prevName, currName, index) => {
            const selector = `${table} > tbody:nth-child(1) > ${element(index + 1 + offset)} > td:nth-child(2) > b:nth-child(1)`
            prevName[currName] = $(selector).text().trim()
            return prevName
        }, {})
    }
    return result
}


exports.Generate = (country, rt) => {

    var scheme = {}
    if(country==='uk'){
        scheme=uk
    }else{
        scheme=us
    }
   
    console.log('start with scheme:', scheme.name)
    let request = requestBuilder(scheme.url)
    instance(request).then(function (response) {
        var $ = cheerio.load(response.data);
        const rJson = scheme.info.reduce((json, table) => {
            const [name] = Object.keys(table)
            const tableIndex = table[name].tableIndex;
            const fields = table[name].fields;
            const offset = table[name].offset;
            json[name] = parse($, tableIndex, fields, offset)
            return json
        }, {})
        rJson.address.country = country;
        rt(null, rJson);
    }).catch(function (e) {
        rt(e, null);
    });
}