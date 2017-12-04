# Let's write a curl query into the file 01_postman_api_post.sh to the URL of the API
# and with the data Hello from postman.
# Using jq write only the fields form in the file 01_postman_api_post.result.

curl -X POST -d "Hello from postman" https://postman-echo.com/post | jq '.form' > 01_postman_api_post.result
