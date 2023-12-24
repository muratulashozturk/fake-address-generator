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

# Support The Project
Help expand the project's reach by adding support for more countries! Pull requests are welcome.

# Contributors
- [Viacheslav Ni0itin](https://github.com/dzxt)

# Disclaimer
Please use this module for legal and educational purposes only. The developer is not responsible.
