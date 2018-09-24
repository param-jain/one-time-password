const twilio = require('twilio');

const accountSid = 'ACd795f387e8fa54bbd18ba348433b7f76';
const authToken = '180ba0f7e8f9a8f629a31c87b0f8bbf7';

module.exports = new twilio.Twilio(accountSid, authToken);