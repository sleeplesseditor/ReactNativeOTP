const twilio = require('twilio');

//Enter Information from Twilio Console Dashboard Here
const accountSid = '';
const authToken = '';

module.exports = new twilio.Twilio(accountSid, authToken);