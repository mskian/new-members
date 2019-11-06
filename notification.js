const axios = require('axios');
const program = require('commander');
require('dotenv').config();

var pkg = require('./package.json');

program.version(pkg.version)
    .option('-s, --site <site name>', 'Add your Site title or Domain name)')
program.parse(process.argv);

///////////////////////////
// Send Telegram Message //
///////////////////////////

function sendMessage(message) {
    if (process.env.CHAT_ID && process.env.BOT_API) {
        var url = process.env.BOT_API
        var bodyFormData = {
            chat_id: process.env.CHAT_ID,
            parse_mode: 'html',
            text: message,
        }
        axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                data: bodyFormData,
            })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                if (!error.response) {
                    console.log('Telegram API URL is Missing');
                } else {
                    console.log(error.response.data);
                }
            });
    } else {
        console.log('ENV Error: Telegram BOT API Key or Chat ID is Missing');
    }
}

////////////////////////////////////////
// Send Push Message to Gotify Server //
////////////////////////////////////////

function gotifyMessage(hello) {
    if (process.env.GOTIFY_URL) {
        var url = process.env.GOTIFY_URL
        var bodyFormData = {
            title: 'New Member Registration on your Ghost site',
            message: hello,
            priority: 5
        };
        axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                data: bodyFormData,
            })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                if (!error.response) {
                    console.log('Gotify API URL is Missing');
                } else {
                    console.log(error.response.data);
                }
            });
    } else {
        console.log('ENV Error: Gotify API URL and Key is Missing');
    }
}

/////////////////////////////////////////////////////////////////////////
// sendMessage - Telegram                                              //
// gotifyMessage - Gotify                                              //
/////////////////////////////////////////////////////////////////////////

if (program.site) {
    var sitename = program.site;
    gotifyMessage('New Memeber Registered on your Site \t' + sitename);
    sendMessage('New Memeber Registered on your Site \t' + sitename);
} else {
    console.log('Please Enter a Valid Option');
}
