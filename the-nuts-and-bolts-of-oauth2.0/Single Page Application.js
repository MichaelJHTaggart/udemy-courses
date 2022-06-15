// Single Page Application

// 1. Add the Single Page Application to the authorization server
// 2. Create Scopes
// 3. Create client_id and client_secret on the authorization && client server (They should both have this value)
// 4. PKCE Code Verifier: Generate a random string between 43-128 characters long (client server).
// 5. PKCE Code Challenge: Generate a Base64-URL-encoded SHA256 hash of the random string you generated previously (client server).

// 6. When the user clicks the Login button, redirect the user from the client app to the authorization server building the following URL:

/*

https://dev-49617478.okta.com/oauth2/default/v1/authorize? //* authorization_endpoint for the authorization server
  response_type=code& //* response_type
  scope=offline_access+projects& //* scope for the authorization server
  client_id=0oa5dvqs2xYJy8cmU5d7& //* client_id from the client server
  state=anotherrandom& //* client_secret from the client server
  redirect_uri=https://example-app.com/redirect& //* redirect_uri from the client server (Where we should end up after login is complete)
  code_challenge=c856kK0MHkXVA9etNkVPpPsFlNSYNThUB5DOA5AZpkY& //* PKCE Code Verifier from the client server
  code_challenge_method=S256 //* code from the authorization server

*/

// 7. Client app should receive a code in the redirect URL.
// 8. Client app should make a POST request to the authorization server's token endpoint building the following URL:
//? Not quite sure how to do this in Postman yet

/*

 https://dev-49617478.okta.com/oauth2/default/v1/token? //* token_endpoint for the authorization server
  grant_type=authorization_code& //* grant_type
  redirect_uri=https://example-app.com/redirect& //* redirect_uri from the client server (Where we should end up after login is complete)
  client_id=0oa5dvqs2xYJy8cmU5d7& //* client_id from the client server
  code_verifier=8a6a41e57c5deb278ab8776e847ade37a0287946fe67336d4b12f52f& //* PKCE Code Verifier from the client server
  code=4PXm9kjUcP41mVUY9EkeNpKGNztA4DVENDQJBze1NqU //* code from the authorization server

*/

/*

 curl -X POST https://dev-49617478.okta.com/oauth2/default/v1/token \
   -d grant_type=authorization_code \
   -d redirect_uri=https://example-app.com/redirect \
   -d client_id=0oa5dvqs2xYJy8cmU5d7 \
   -d code_verifier=3fb8c30d62d010277f66301b8710a1dda26f324f645f41f3854d4825 \
   -d code=KvwlFKTcOOKpKV57eVJBkEqOec61bVYVBa4d6ebAhKo


*/

// 9. Client app should receive an access token in the redirect URL

/*

{
"token_type":"Bearer",
"expires_in":3600,
"access_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjRfV2ZpVi1ocDhoM2xQajdodXYzRDJfNzV1SVI1N1lfTVo3WXdLXy1kM00iLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUyMzA5MTUsImV4cCI6MTY1NTIzNDUxNSwiY2lkIjoiMG9hNWR2cXMyeFlKeThjbVU1ZDciLCJ1aWQiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsInNjcCI6WyJwcm9qZWN0cyJdLCJhdXRoX3RpbWUiOjE2NTUyMTkwOTAsInN1YiI6Ik1pY2hhZWxKSFRhZ2dhcnRAZ2l0aHViLm9rdGFpZHAifQ.B5Zx2PbNs65la19n7Q_5AToc2D499dx5r3eRGyauXr-O7XWHyt-unY77r4x1UkO_oLqK-zQS0TrceL4uxRrMxpU38SUEYDhE2khO3fJB8mLMehAvoA9_OfImD2oU7XF2pl9pIvaQXJPz3ZK5KGIiPogsh_7xTNaORStx7glzO5ixCee5lsyUElfrTPKNZ0YS2bb0szbHAR-CPvvL19ykNiak70N1dXYxPpp2DYpFHcT-b7CCxQHiPwTbSO1lDCSGuBPErepOgBDelRfT3S4Rvw4qrOerYDAOpV1oNgb9NLs1em3JMYaU-AOwlgmZ4lktP5ks8q3MvjxGecwb-BDg9w",
"scope":"projects"
}

*/