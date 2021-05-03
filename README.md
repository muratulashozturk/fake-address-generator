# fake-address-generator
You can generate fake or real random address from [fakeaddressgenerator.com](https://fakeaddressgenerator.com).<br/>
With this module, you can access informations programmatically.

# Disclaimer
* Please only use this module for legal and educational purposes.

# Using
You just need to run `npm i fake-address-generator`.<br/>
After adding, you just need to add this line to your project `const fakeAddress = require("fake-address-generator");`.<br/>
The return is JSON. It's easy to use. Example response:
```json
{
  "basicInformation": {
    "fullName": "Michael K Baldwin",
    "gender": "male",
    "title": "Mr.",
    "birthday": "3/19/1986",
    "ssn": "MZ 29 27 46"
  },
  "address": {
    "street": "112  South Western Terrace",
    "city": "MILTON",
    "zipCode": "PH8 8BH",
    "phone": "070 6271 1863"
  },
  "onlineProfile": {
    "username": "afton",
    "password": "uc6OhX3Pul",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0",
    "system": "Windows 10",
    "guid": "afc56928-3499-4b8b-8bbc-d2feb6afab3b"
  }
}
```
You can find example code in [Tests Folder](https://github.com/muratulashozturk/fake-address-generator/blob/main/tests/)

# Support The Project
This module is not done 100% yet because I don't have any free time. Feel free to open pull requests to support.
- ✔️ United Kingdom
- ❌ USA
- ❌ Canada
- ❌ Australia
- ❌ Germany
- ❌ Other Countries
