@echo off
title Twitter Manager by ThePhoDit
echo We are going to setup your configuration. If you want to leave any field in blank, just press enter.
echo Bot's Token:
set /p bot_token=""
echo { > config.json
echo   "bot_token": "%bot_token%", >> config.json

echo Bot's Prefix:
set /p bot_prefix=""
echo   "bot_prefix": "%bot_prefix%", >> config.json

echo Bot Owner:
set /p bot_owners=""
echo   "bot_owners": ["%bot_owners%"], >> config.json

echo Twitter Consumer Key:
set /p twitter_consumer_key=""
echo   "twitter_consumer_key": "%twitter_consumer_key%", >> config.json

echo Twitter Consumer Secret:
set /p twitter_consumer_secret=""
echo   "twitter_consumer_secret": "%twitter_consumer_secret%", >> config.json

echo Twitter Access Token Key:
set /p twitter_access_token_key"=""
echo   "twitter_access_token_key": "%twitter_access_token_key%", >> config.json

echo Twitter Access Token Secret:
set /p twitter_access_token_secret"=""
echo   "twitter_access_token_secret": "%twitter_access_token_secret%" >> config.json

echo } >> config.json
echo Configuration file successfully created.
pause