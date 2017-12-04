
#curl -X POST -H "Content-Type: application/json" -d '{"userId":"1","title":"title","body":"body"}' 'http://jsonplaceholder.typicode.com/posts'

# autre solution en passant des paramètres au batch bash script.sh param1 param2 param3
# pour récupérer les params : $1 pour le premier $2 pour le 2e...
#

echo $1
echo $2
echo $3

curl -X POST -H "Content-Type: application/json" -d "{\"userId\":\"$1\",\"title\":\"$2\",\"body\":\"$3\"}" 'http://jsonplaceholder.typicode.com/posts'
