#!/bin/bash


## Telegram Text Notification via Bot

curl -s \
  -X POST \
  $BOT_API \
  -d text="New Memebers were Registered in $SITE_NAME Site" \
  -d chat_id=$CHAT_ID
