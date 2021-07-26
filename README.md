# fake-address-generator
You can generate fake or real random address from [fakeaddressgenerator.com](https://fakeaddressgenerator.com).<br/>
With this module, you can access informations programmatically.

# Disclaimer
* Please only use this module for legal and educational purposes.

# Using
You just need to run `npm i fake-address-generator`.<br/>
After adding, you just need to add this line to your project `const fakeAddress = require("fake-address-generator");`.<br/>

```javascript

const params = {
    country:'us',
    sex:"Female",
    state:0,// - random value by default
    city:0,
    zip:10001
  } 


fakeAddress.Generate(params || 'us', async function(err, response) {
    if (err) {
      return console.log("error: " + err);
    } else {
      return console.log(response);
    }
  });
```
You can pass as a JSON parameter an object or an abbreviation of a country.
The parameter structure may be unique for each country, please see the "Custom Generate" section at https://fakeaddressgenerator.com/
as well as the default parameters are specified in the schemes (scheme/*)

The return is JSON. It's easy to use. Example response:
```javascript
{
  basicInformation: {
    fullName: 'Linda T Clemmons',
    gender: 'female',
    title: 'Ms.',
    race: 'Black',
    birthday: '3/25/1987',
    ssn: '499-64-4120'
  },
  address: {
    street: '344 Briarwood Road',
    city: 'Springfield',
    state: 'MO',
    stateFull: 'Missouri',
    zip: '65806',
    phone: '417-799-0150',
    phoneMob: '417-763-2426',
    country: 'us'
  },
  moreBasicInformation: {
    height: `5' 10" (177 centimeters)`,
    weight: '161.0 pounds (73.2 kilograms)',
    hairColor: 'Blond',
    bloodType: 'AB+',
    mothersMaidenName: 'Lawson',
    civilStatus: 'Divorced',
    educational: 'High school diploma or GED',
    driverLicense: '355060973 - issued in Missouri (MO) on 02/25/2018, expires 02/25/2022'
  },
  employmentAndFinance: {
    employmentStatus: 'Full-time work',
    monthlySalary: '$4,600',
    occupation: 'Social Sciences Teacher, Postsecondary, All Other',
    companyName: 'Kiddie City',
    companySize: '11-50 employees',
    industry: 'Education, Training, and Library Occupations',
    creditCardType: 'MasterCard',
    creditCardNumber: '5463439567879670',
    cvv: '986',
    expires: ''
  },
  personalInformation: {
    vehicle: '2005 Mercedes-Benz E500',
    carLicensePlate: 'RVN 7884 - issued in Illinois (IL) in year 2013',
    onlineStatus: 'hitting higher highs, and lower lows',
    onlineSignature: "I'm an addict",
    onlineBiography: 'Social media aficionado. Food evangelist. Devoted web scholar. Beer maven. Proud reader.',
    interest: 'Internet Marketing,Rock and Mineral Collecting,Darts'
  },
  personalInformation2: {
    favoriteColor: 'Pink',
    favoriteMovie: 'Lorelei LinklaterReese WitherspoonEden Sher',
    favoriteMusic: 'Rock music',
    favoriteSong: '800°(by Ebba Grön)Do Re Mi(by Blackbear)',
    favoriteBook: "The Amber Spyglass (His Dark Materials) --by Philip PullmanThe Tell-Tale Heart and Other Writings --by Edgar Allan PoeThe Titan's Curse (Percy Jackson and the Olympians) --by Rick Riordan",
    favoriteSports: 'Mountaineering, Tennis',
    favoriteTV: 'NFL Thursday Night Football CBS/NFL NetworkSuperstore NBCThe Middle ABC',
    favoriteSinger: 'MaanMarillionGReeeeN',
    favoriteFood: 'Vegemite on toast, Hamburgers',
    personality: 'Philosophic',
    personalStyle: 'Pyjamas'
  },
  onlineProfile: {
    username: 'adah',
    password: 'Outhielie3',
    website: 'carnighthorror.com',
    secQuestion: "What is your cat's name?",
    secAnswer: 'eewrr',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.13',
    system: 'Windows 10',
    guid: 'e308652d-89d5-4af9-8934-b6a270f17520',
    countryCode: '1'
  }
}
```
You can find example code in [Tests Folder](https://github.com/muratulashozturk/fake-address-generator/blob/main/tests/)

# Contributors
- [Viacheslav Ni0itin](https://github.com/dzxt)


# Support The Project
This module is not done 100% yet because I don't have any free time. Feel free to open pull requests to support.
- ✔️ United Kingdom
- ✔️ USA
- ❌ Canada
- ❌ Australia
- ❌ Germany
- ❌ Other Countries
