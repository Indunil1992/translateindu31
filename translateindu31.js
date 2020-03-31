let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    try {
        let data = await translate.translateText({
            SourceLanguageCode: "en",
            TargetLanguageCode: "sv",
            Text: "mother"
        }).promise();
        console.log("data")
        console.log(data)
        try {
            let data = await translate.getTerminology({
                Name: "mother",
                TerminologyDataFormat: "CSV"
            }).promise();
console.log("data")
console.log(data)

    } catch (err) {
        console.log("errrrrrrrrrrrrr")
console.log(err)
            // error handling goes here
        };

    } catch (err) {
        console.log("errrrrrrrrrrrrr")
        console.log(err)
        // error handling goes here
    };
    try {
        let data = await translate.listTerminologies({
            MaxResults: 10
        }).promise();

        console.log("data")
        console.log(data)

    } catch (err) {

        console.log("errrrrrrrrrrrrr")
        console.log(err)
        // error handling goes here
    };



    return { "message": "Successfully executed" };
};