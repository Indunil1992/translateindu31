let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    try {
        let data = await translate.getTerminology({
            Name: "mcdonalds",
            TerminologyDataFormat: "CSV"
        }).promise();
console.log("dataa")
console.log(data)
    } catch (err) {
        console.log("errrrr")
console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};