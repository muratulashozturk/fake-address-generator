module.exports =
{
    name:'uk',
    url:'https://www.fakeaddressgenerator.com/World_Address/get_uk_address',
    params:{ sex: 0, hot: 0, city: 0, zip: 0 },
    info: [{
        basicInformation: {
            tableIndex: 2,
            fields: [
                "fullName",
                "gender",
                "title",
                "birthday",
                "ssn"
            ],
        }
    },
    {
        address: {
            tableIndex: 6,
            offset: 1,
            fields: [
                "street",
                "city",
                "zip",
                "phone",
            ],
        }
    },
    {
        moreBasicInformation: {
            tableIndex: 8,
            offset: 1,
            fields: [
                "height",
                "weight",
                "hairColor",
                "bloodType",
                "mothersMaidenName",
                "civilStatus",
                "educational",
            ],
        }
    },
    {
        employmentAndFinance: {
            tableIndex: 10,
            offset: 1,
            fields: [
                "employmentStatus",
                "monthlySalary",
                "occupation",
                "companyName",
                "companySize",
                "industry",
                "creditCardType",
                "creditCardNumber",
                "cvv",
                "expires"
            ],
        }
    },
    {
        personalInformation: {
            tableIndex: 12,
            offset: 1,
            fields: [
                "vehicle",
                "carLicensePlate",
                "onlineStatus",
                "onlineSignature",
                "onlineBiography",
                "interest"
            ],
        }
    },
    {
        personalInformation2: {
            tableIndex: 14,
            offset: 0,
            fields: [
                "favoriteColor",
                "favoriteMovie",
                "favoriteMusic",
                "favoriteSong",
                "favoriteBook",
                "favoriteSports",
                "favoriteTV",
                "favoriteMovie",
                "favoriteSinger",
                "favoriteFood",
                "personality",
                "personalStyle",
            ],
        }
    },
    {
        onlineProfile: {
            tableIndex: 16,
            offset: 1,
            fields: [
                "username",
                "password",
                "website",
                "secQuestion",
                "secAnswer",
                "userAgent",
                "system",
                "guid",
                "countryCode"
            ]
        }
    }
    ]
}
