# Members Notification 🔔

A Simple Shell Script to Get New Members Registration Notification from your Ghost site via Telegram Bot 🤖.

[![deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mskian/new-members)

## Usage 📦

- Hosted at Netlify ☂
- Attach Netlify webhook on your Ghost Custom integration with `Member added` Event
- Telegram Bot 🤖 API for sending the Push notificaiton Alerts
- Netlify Environment variables for Store the Sensitive Data's like API Key's and Extra Variables

## Setup 🔧

- Click the above button to Connect this script to your Netlify Account
- Next it will automatically Create a Respo on your Github or Gitlab Account
- Configure it -> in `build Command` add this `bash members.sh` Next Choose Advanced Settings and Add ENV variables yes add your Telegram BOT API Key, Chat ID and Site Name  - Key Values 👇

| key | Value |
| ----------- | ----------- |
| BOT_API | `https://api.telegram.org/bot<YOUR BOT API KEY>/sendMessage` |
| CHAT_ID | `<Channel ID or CHAT ID>` |
| SITE_NAME | `Your Site Name` |

## Ghost Custom integration 🔩

- log on to your Ghost Admin Dashboard
- Goto Integrations
- Click `Add Custom integration` to Create New Ghost Custom integration
- Goto webhooks Column & Create New Webhook - Give Name for your Webhook - Choose a Event `Member added` - in Target URL add your Netlify webhook URL (How to Get Netlify webhook URL? Goto Settings > Build & Deploy > Build hooks)

## LICENSE 📜

MIT
