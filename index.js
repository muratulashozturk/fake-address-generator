const axios = require("axios");
const cheerio = require('cheerio');
const url = require('url');
var instance = axios.create();

exports.Generate = (country, rt) => {
    let request = {
        method: "GET",
        url: `https://www.fakeaddressgenerator.com/World/${country}_address_generator`,
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }
    };
    instance(request).then(function(response) {
        var $ = cheerio.load(response.data);

        // BASIC INFORMATION \\
        var rFullName = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(1) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2) > strong")[0].children[0].data;
        var rGender = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(1) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong")[0].children[0].data;
        var rTitle = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(1) > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2) > strong")[0].children[0].data;
        var rBirthday = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(1) > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong")[0].children[0].data;
        var rSsn = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(1) > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2) > strong")[0].children[0].data;
        // BASIC INFORMATION \\

        // ADDRESS \\
        var rStreet = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(4) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        var rCity = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(5) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        var rZipCode = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(6) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        var rPhone = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(7) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        // ADDRESS \\

        // ONLINE PROFILE \\
        var rUsername = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(50) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        var rPassword = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(51) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        var rUserAgent = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(55) > div.col-md-8.col-sm-8.col-xs-6.right > strong")[0].children[0].data;
        var rSystem = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(56) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        var rGuid = $("body > div.container.index.no-padding > div.row.main > div.col-md-9.col-sm-9.col-xs-12.main-left > div > div > div.row > div:nth-child(57) > div.col-md-8.col-sm-8.col-xs-6.right > strong > input")[0].attribs.value;
        // ONLINE PROFILE \\

        var rJson = {
            basicInformation: {
                fullName: rFullName,
                gender: rGender,
                title: rTitle,
                birthday: rBirthday,
                ssn: rSsn
            },
            address: {
                street: rStreet,
                city: rCity,
                zipCode: rZipCode,
                phone: rPhone,
            },
            onlineProfile: {
                username: rUsername,
                password: rPassword,
                userAgent: rUserAgent,
                system: rSystem,
                guid: rGuid,
            }
        }

        rt(null, rJson);
    }).catch(function(e) {
        rt(e, null);
    });
}