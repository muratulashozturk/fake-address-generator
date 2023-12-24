# fake-address-generator

Generate fake or real random addresses programmatically from [fakeaddressgenerator.com](https://fakeaddressgenerator.com) , [worldnamegenerator.com](https://worldnamegenerator.com).

## Key Features

- **Asynchronous calls:** Leverages async/await for efficient and streamlined data retrieval.
- **Customizable generation:** Fine-tune the generated addresses using parameters for country, gender, state, city, and ZIP code.
- **Comprehensive data:** Retrieves a wide range of personal information, including:
    - Basic information (name, gender, race, birthdate, SSN)
    - Complete address details
    - Physical attributes (height, weight, hair color, blood type)
    - Employment and financial information (occupation, salary, credit card details)
    - Personal interests and online profiles
- **Supported Countries:**
    - ✔️ United Kingdom
    - ✔️ USA
    - ❌ Canada
    - ❌ Australia
    - ❌ Germany
    - ❌ Other Countries
 

## Installation

```bash
npm i fake-address-generator
```

## Usage

```javascript
const fakeAddress = require("fake-address-generator");

const params = {
  country: "us",
  sex: "Female",
  state: 0, // Random value (optional)
  city: 0,   // Random value (optional)
  zip: 10001,
};

try {
  const response = await fakeAddress.Generate(params);
  console.log(response);
} catch (err) {
  console.error("Error:", err);
}
```

## Response Format
```json
{
  "basicInformation": {
    "fullName": "...",
    "gender": "female",
    "title": "Mrs.",
    "race": "White",
    "birthday": "7/25/1994",
    "ssn": "..."
  },
  "address": {
    "street": "... Forest Avenue",
    "city": "New York",
    "state": "NY",
    "stateFull": "New York",
    "zip": "10001",
    "phone": "...",
    "phoneMob": "...",
    "country": "us"
  },
  "moreBasicInformation": {
    "height": "5' 3\" (159 centimeters)",
    "weight": "162.2 pounds (73.57 kilograms)",
    "hairColor": "Black",
    "bloodType": "O+",
    "mothersMaidenName": "Minor",
    "civilStatus": "Dating/Looking for love",
    "educational": "Bachelor's degree",
    "driverLicense": "..."
  },
  "employmentAndFinance": {
    "employmentStatus": "Full-time work",
    "monthlySalary": "$5,300",
    "occupation": "Athlete and Sports Competitor",
    "companyName": "Dreamscape Garden Care",
    "companySize": "51-100 employees",
    "industry": "Arts, Design, Entertainment, Sports, and Media Occupations",
  },
  "personalInformation": {
    "vehicle": "2005 Ferrari Maranello",
    "carLicensePlate": "...",
    "onlineStatus": "No thanks, 5 Hour Energy, I'd rather have a 5 Hour Nap.",
    "onlineSignature": "There is no fear before and no fear after. We give our best.;Rickie Lee Jones;fear",
    "onlineBiography": "Incurable travel geek. Alcoholaholic. Twitter evangelist. Proud thinker.",
    "interest": "Jewelry Making,Playing An Instrument"
  },
  "personalityStyle": {
    "favoriteColor": "Silver",
    "favoriteMovie": "Martin Freeman",
    "favoriteMusic": "Blues",
    "favoriteSong": "The Greatest(by Sia feat. Kendrick Lamar)",
    "favoriteBook": "The Iliad/The Odyssey --by Homer",
    "favoriteSports": "Soccer",
    "favoriteTV": "Bloodline (2015)",
    "favoriteSinger": "Mariah Carey",
    "favoriteFood": "Peanut butter & jelly sandwich",
    "personality": "Serious",
    "personalStyle": "Average Joe/Jane"
  },
  "onlineProfile": {
    "username": "...",
    "password": "...",
    "website": "...",
    "secQuestion": "What is your dog's name?",
    "secAnswer": "hawy",
    "userAgent": "...",
    "system": "Windows 10",
    "guid": "...",
    "countryCode": "1"
  }
}
```


# Support The Project
Help expand the project's reach by adding support for more countries! Pull requests are welcome.

# Contributors
- [Viacheslav Ni0itin](https://github.com/dzxt)

# Disclaimer
Please use this module for legal and educational purposes only. The developer is not responsible.
