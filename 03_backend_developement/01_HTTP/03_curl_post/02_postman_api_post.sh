curl -X POST -d "foo=bar" https://postman-echo.com/post\?foo\=bar | jq '.form' > 02_postman_api_post.result
