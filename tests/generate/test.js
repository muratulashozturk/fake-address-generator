const fakeAddress = require("../../index.js");

async function GenerateInformation(country){
    fakeAddress.Generate(country, async function(err, response) {
        if (err) {
          return console.log("error: " + err);
        } else {
            return console.log(response);
        }
      });
}


GenerateInformation("uk"); // United Kingdom
GenerateInformation("us"); // United States
var params = {country:'us',sex:"Female",state:0,city:0,zip:10001}
GenerateInformation(params); // United States