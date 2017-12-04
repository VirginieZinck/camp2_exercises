mydate=$(date +%Y-%m-%d)
curl "https://postman-echo.com/time/valid?timestamp=$mydate" > 05_postman_api_call.result
