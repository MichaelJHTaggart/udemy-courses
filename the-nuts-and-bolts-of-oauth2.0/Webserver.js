// Server-Side Web Applications

// 1. Add the web application to the authorization server
// 2. Create Scopes
// 3. Create client_id and client_secret on the authorization && client server (They should both have this value)
// 4. PKCE Code Verifier: Generate a random string between 43-128 characters long (client server).
// 5. PKCE Code Challenge: Generate a Base64-URL-encoded SHA256 hash of the random string you generated previously (client server).

// 6. When the user clicks the Login button, redirect the user from the client app to the authorization server building the following URL:

/*

 https://dev-49617478.okta.com/oauth2/default/v1/authorize? //* authorization_endpoint for the authorization server
 response_type=code& //* response_type
 scope=projects& //* scope for the authorization server
 client_id=0oa5dexzkbl87ab2d5d7& //* client_id from the client server
 state=anotherrandom& //* client_secret from the client server
 redirect_uri=https://example-app.com/redirect& //* redirect_uri from the client server (Where we should end up after login is complete)
 code_challenge=ocCks02J_I-YC1ydhEPa674xZ5l3fq-lRPSLdCvMtnI& //* PKCE Code Challenge: Base64-URL-encoded SHA256 hash of the random string you generated previously
 code_challenge_method=S256
*/

// 7. Client app should receive a code in the redirect URL.
// 8. Client app should make a POST request to the authorization server's token endpoint building the following URL:

/*

 https://dev-49617478.okta.com/oauth2/default/v1/token? //* token_endpoint for the authorization server
  grant_type=authorization_code& //* grant_type
  redirect_uri=https://example-app.com/redirect& //* redirect_uri from the client server (Where we should end up after login is complete)
  client_id=0oa5dexzkbl87ab2d5d7& //* client_id from the client server
  client_secret=ZDKm19e-qazTUQvRpgiVMLuRedKQYcjW_f-0Hrhn& //* client_secret from the client server
  code_verifier=8a6a41e57c5deb278ab8776e847ade37a0287946fe67336d4b12f52f& //* PKCE Code Verifier from the client server
  code=4PXm9kjUcP41mVUY9EkeNpKGNztA4DVENDQJBze1NqU //* code from the authorization server

*/

/*

 curl -X POST https://dev-49617478.okta.com/oauth2/default/v1/token \
   -d grant_type=authorization_code \
   -d redirect_uri=https://example-app.com/redirect \
   -d client_id=0oa5dexzkbl87ab2d5d7 \
   -d client_secret=ZDKm19e-qazTUQvRpgiVMLuRedKQYcjW_f-0Hrhn \
   -d code_verifier=8a6a41e57c5deb278ab8776e847ade37a0287946fe67336d4b12f52f \
   -d code=nufiesANGwpzL7I2sanluYkUt2i3XVO1S4--2UPkz8U

*/

// 9. Client app should receive a token in the redirect URL.
/*

 {
  "token_type":"Bearer",
  "expires_in":3600,
  "access_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULk5DTUoxdjlyN21URU4wV2Q3NHUyazZZSXJLc1lQblMxb1VrYjhtV2ZUUlEiLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUxNTQ2NzUsImV4cCI6MTY1NTE1ODI3NSwiY2lkIjoiMG9hNWRleHprYmw4N2FiMmQ1ZDciLCJ1aWQiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsInNjcCI6WyJwcm9qZWN0cyJdLCJhdXRoX3RpbWUiOjE2NTUxNDgzMzYsInN1YiI6Ik1pY2hhZWxKSFRhZ2dhcnRAZ2l0aHViLm9rdGFpZHAifQ.mRS3SDFKKzdToH4-njpki-HvRlq9Qyy7Kw3Mf5KuBR4G2D3PRAvXB32sErD7lxBDWZ_amXFmvPnFx0kzyrquSb4VZrGskZJLb0u3S3Sa2EkWGz8800geeR178oGgSEm9qEZnHl6K9soRdCncRlQ1vNnMKLZYgzBaC5fQpUJ0zx3y-x0CSWHOMjF0Lv5Bp0u87rEOfhGhhir8Qqu24Bc4dys1A023SQjAN2ajmDjGnZB4eeJyUME5IvMXgL1xQZcYYtCcIveWEthGqUJSrT6KvVoJmiKqyvTFWdFwGAjevSa8gkaI-AziOCY4MiiXbcXTabxFlU9vJgfrL9vkexxDYw",
  "scope":"projects"
 }

*/

// https://dev-49617478.okta.com/oauth2/default/v1/authorize?
//  response_type=code&
//  scope=projects&
//  client_id=0oa5dexzkbl87ab2d5d7&
//  state=anotherrandom&
//  redirect_uri=https://example-app.com/redirect&
//  code_challenge=ghEBV9BXLNLiiTBDZEjvbDbpQYJcg07dsIf2pLMndwY&
//  code_challenge_method=S256