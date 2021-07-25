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
    if (Array.isArray(scheme)) {
        result = scheme.reduce((prevName, currName, index) => {
            const selector = `${table} > tbody:nth-child(1) > ${element(index + 1 + offset)} > td:nth-child(2) > b:nth-child(1)`
            prevName[currName] = $(selector).text().trim()
            return prevName
        }, {})
    }
    return result
}


exports.Generate = (params, rt) => {

    var scheme = {}
    var country = '';
    var tableIndexOffset = 0;
    if(typeof params ==='string'){
        country = params
        params = undefined
    }else{
        country = params.country
        delete params.country
        tableIndexOffset=1
    }
   
    if(country==='uk'){
        scheme=uk
    }else{
        scheme=us
    }

    if(params ===undefined){
        params = scheme.params
    }

    console.log('start with scheme:', scheme.name,{params})
    let request = requestBuilder(scheme.url,params)
    instance(request).then(function (response) {
        var $ = cheerio.load(response.data);
        const rJson = scheme.info.reduce((json, table) => {
            const [name] = Object.keys(table)
            var tableIndex = table[name].tableIndex;
            const fields = table[name].fields;
            var offset = table[name].offset || 0;
            if(request.data && tableIndex > 2 ){
                tableIndex+=tableIndexOffset
            }
            json[name] = parse($, tableIndex, fields, offset)
            return json
        }, {})
        rJson.address.country = country;
        rt(null, rJson);
    }).catch(function (e) {
        rt(e, null);
    });
}