#!/bin/bash
echo "We are going to setup your configuration. If you want to leave any field in blank, just press enter."
echo "Bot's Token:"
read bot_token
echo "Bot's Prefix:"
read bot_prefix
echo "Bot Owner:"
read bot_owners
echo "Twitter Consumer Key:"
read twitter_consumer_key
echo "Twitter Consumer Secret:"
read twitter_consumer_secret
echo "Twitter Access Token Key:"
read twitter_access_token_key
echo "Twitter Access Token Secret:"
read twitter_access_token_secret
echo "{
  \"bot_token\": \"$bot_token\",
  \"bot_prefix\": \"$bot_prefix\",
  \"bot_owners\": [\"$bot_owners\"],
  \"twitter_consumer_key\": \"$twitter_consumer_key\",
  \"twitter_consumer_secret\": \"$twitter_consumer_secret\",
  \"twitter_access_token_key\": \"$twitter_access_token_key\",
  \"twitter_access_token_secret\": \"$twitter_access_token_key\"
}" > config.json
echo "Configuration file successfully created."
  