// Native Applications & refresh tokens

// 1. Add the native application to the authorization server
// 2. Create Scopes
// 3. Create client_id and client_secret on the authorization && client server (They should both have this value)
// 4. PKCE Code Verifier: Generate a random string between 43-128 characters long (client server).
// 5. PKCE Code Challenge: Generate a Base64-URL-encoded SHA256 hash of the random string you generated previously (client server).

// 6. When the user clicks the Login button, redirect the user from the client app to the authorization server building the following URL:

/*

https://dev-49617478.okta.com/oauth2/default/v1/authorize? //* authorization_endpoint for the authorization server
  response_type=code& //* response_type
  scope=offline_access+projects& //* scope for the authorization server
  client_id=0oa5dqp3ocQikdaQk5d7& //* client_id from the client server
  state=anotherrandom& //* client_secret from the client server
  redirect_uri=https://example-app.com/redirect& //* redirect_uri from the client server (Where we should end up after login is complete)
  code_challenge=VLATStrP_3E2uxpdWBsLb46hgg9-zxF8WtPaS8kAR8o& //* PKCE Code Verifier from the client server
  code_challenge_method=S256 //* code from the authorization server

*/

// 7. Client app should receive a code in the redirect URL.
// 8. Client app should make a POST request to the authorization server's token endpoint building the following URL:
//? Not quite sure how to do this in Postman yet

/*

 https://dev-49617478.okta.com/oauth2/default/v1/token? //* token_endpoint for the authorization server
  grant_type=authorization_code& //* grant_type
  redirect_uri=https://example-app.com/redirect& //* redirect_uri from the client server (Where we should end up after login is complete)
  client_id=0oa5dqp3ocQikdaQk5d7& //* client_id from the client server
  client_secret=ZDKm19e-qazTUQvRpgiVMLuRedKQYcjW_f-0Hrhn& //* client_secret from the client server
  code_verifier=8a6a41e57c5deb278ab8776e847ade37a0287946fe67336d4b12f52f& //* PKCE Code Verifier from the client server
  code=4PXm9kjUcP41mVUY9EkeNpKGNztA4DVENDQJBze1NqU //* code from the authorization server

*/

/*

 curl -X POST https://dev-49617478.okta.com/oauth2/default/v1/token \
   -d grant_type=authorization_code \
   -d redirect_uri=https://example-app.com/redirect \
   -d client_id=0oa5dqp3ocQikdaQk5d7 \
   -d client_secret=3kDr7MnObtEdsE3mAuQAEbZhFD3OWbfKyXsCMMNP \
   -d code_verifier=0b9389e16de1ea0073dc2d90e1be16fbcf4e6f507402c56c57e79d62 \
   -d code=6nfvBVpO6DunT6qCtfGIeZmRSb9_raBO0LRzkw2aY7E


*/

// 9. Client app should receive an access token in the redirect URL as well as a refresh token

/*

 {
  "token_type":"Bearer",
  "expires_in":3600,
  "access_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjk4aHIwU25IdkhnbmJ1UFY0R0x6eHlCeWJILUo2ckFyZWlhTWg3ZVF3VTgub2FyaWhreWR3WkhGcXFQaEM1ZDYiLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUyMjU1MjYsImV4cCI6MTY1NTIyOTEyNiwiY2lkIjoiMG9hNWRxcDNvY1Fpa2RhUWs1ZDciLCJ1aWQiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsInByb2plY3RzIl0sImF1dGhfdGltZSI6MTY1NTIxOTA5MCwic3ViIjoiTWljaGFlbEpIVGFnZ2FydEBnaXRodWIub2t0YWlkcCJ9.GoaCIc4IQLrMAShbLRyGPrg3sQz38NyCU-QhXeaOVTlq5xlCnSUvNLH7B_7yUhUDYH-lTP8sKbfgL_OSdP_03qjhmcTwxjcOiLibUsTyjuXnUE2UIzq0JTyUrseHoByX4bpA7z0dHwX5QAeFEiuI996q4Jjy13nCi-BSyS9uFua5rOpJM9Q8X9aih5f556_rxpkmtdgPSwj7LLv1HuWujfQ96unz9UrtUTwxNImXLOUaUQjY33UIzRwOUJ3KnyOOtSlfA4QR3Lf5gE-sVEIPese25YRNeJ-7M7uMrHouwDsoC_kLidfGkYot-_ONQvuoPrT0UGSz8yhlvbvJIP5csA",
  "scope":"offline_access projects",
  "refresh_token":"rAdnEEvGwSIH1YWwSGXdvmw6zVyeqyDdbVtizB8DrDg"
 }

*/

// 10. To use the refresh token send the appropriate data

/*

 curl -X POST https://dev-49617478.okta.com/oauth2/default/v1/token \
   -d grant_type=refresh_token \
   -d client_id=0oa5dqp3ocQikdaQk5d7 \
   -d client_secret=3kDr7MnObtEdsE3mAuQAEbZhFD3OWbfKyXsCMMNP \
   -d refresh_token=v725XlzDkQwTPEtgAv_Jz7lEaiX7dYNR7Q6z91aZxWg

*/

// 11. Response data again gives a new access_token and refresh_token

/*

 {
  "token_type":"Bearer",
  "expires_in":3600,
  "access_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlYtem1NVEltRF9aQWhNM2l0X3g2TUxBVklMUTJFem1BSndWckpaWk4xOXMub2FyaWhtY24xT1ZzdDY0MDc1ZDYiLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUyMjY0MTksImV4cCI6MTY1NTIzMDAxOSwiY2lkIjoiMG9hNWRxcDNvY1Fpa2RhUWs1ZDciLCJ1aWQiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsInByb2plY3RzIl0sImF1dGhfdGltZSI6MTY1NTIxOTA5MCwic3ViIjoiTWljaGFlbEpIVGFnZ2FydEBnaXRodWIub2t0YWlkcCJ9.KogtQf9s2ktOaD2_bsjSHY2DvX6W6ClPQOnAZIrPb0EzzWRmLQlhMbIIpFYwM5LSgeHDGxcXftpDQA7JzQfyBBX1QXvO8zoVEWBH_WXRq8uxopo0-514YdHuWAIxlj66YSXAiyjfcsjgVt9wTrCF0WHzDAPVtWj3hny-DsVDGJePoW35Rc5JYgIM10uRsQ1bcGrgEHYLOywNb5eQ8BvhfOfj2l0RFWMQpsYE6P3ieLbtsGzlx4XbiEnIrEgB0lKxx2eiZaUr5cLrNUZec-LSpBRoLvBd_UjfXGOhDz6ifKEK4rGnyCxL33D9Ky9iXcm-9iRN2Oor6B1ZxwrsJkVGXA",
  "scope":"offline_access projects",
  "refresh_token":"v725XlzDkQwTPEtgAv_Jz7lEaiX7dYNR7Q6z91aZxWg"
 }

*/