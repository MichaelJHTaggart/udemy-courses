// A protected resource needs to verify an access_token with the Authorization Server


/*
 
 curl https://dev-49617478.okta.com/oauth2/default/v1/introspect \
   -d client_id=0oa5dwtclkzpf5uVa5d7 \
   -d client_secret=BnfqAWLOjSGKhnR-GuxH7kOA6HYwRyqKg9HTqixg \
   -d token=eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmJ3QkYybG9JcG55VXk1RmQyNHFzQWNQODltbHBLeWhYMGFqV1FGNzhSOUUiLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUzMjMwNzEsImV4cCI6MTY1NTMyNjY3MSwiY2lkIjoiMG9hNWRleHprYmw4N2FiMmQ1ZDciLCJ1aWQiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsInNjcCI6WyJwcm9qZWN0cyJdLCJhdXRoX3RpbWUiOjE2NTUzMjMwNDIsInN1YiI6Ik1pY2hhZWxKSFRhZ2dhcnRAZ2l0aHViLm9rdGFpZHAifQ.bh64ZFBWRU94cW4IaBSAnV4JXQmZ1TzODzDOhaCCFTy3CerZpsocTKZF0tgdus_cUyEDzR9x_7UmDwED6q3vP0wXHZ9yIMtwNqiQzW3Gly29HIUh5mnir705NnO9ZIThRnrrTPHoIP3n1bIuH9Lb8d5pUCHWlpuPzMkRpmb8PGwFuoXyv-O2yuO9NDK9xZrJpIu4AEAcF0pn5iyb3yWXHqGduJ7HM2rch8kIubVwQeon46-BzEYBZkfcdEKuCEoF8raqFuFf3TaaePIuZZEhIoEZmA7aiHC2gYB7OOIjk-cBuhIz8hkStyObIaEmeGbzqHhEhUx_6o-u7vrLxXetpA

*/

// 2. Receive the following response:
/*

{
 "active":true,
 "scope":"projects",
 "username":"MichaelJHTaggart@github.oktaidp",
 "exp":1655307542,
 "iat":1655303942,
 "sub":"MichaelJHTaggart@github.oktaidp",
 "aud":"api://default",
 "iss":"https://dev-49617478.okta.com/oauth2/default",
 "jti":"AT.ZIgxS1zj7WtOCUdKq2aRRp-Y7gy3vpmlqzXspBbltpo",
 "token_type":"Bearer",
 "client_id":"0oa5dexzkbl87ab2d5d7",
 "uid":"00u5dc5bxjvbIJEGg5d7"
}

*/