const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('../service_account.json')

//Insert your own service account data from Firebase created JSON file.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ot-password.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);