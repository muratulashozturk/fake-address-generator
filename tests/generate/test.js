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