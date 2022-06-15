// Getting an Access Token with the Client Credentials Grant

// 1. Add the machine-to-machine option to the authorization server
// 2. Create Scopes
// 3. Create client_id and client_secret on the authorization && client server (They should both have this value)
// 4. PKCE Code Verifier: Generate a random string between 43-128 characters long (client server).
// 5. PKCE Code Challenge: Generate a Base64-URL-encoded SHA256 hash of the random string you generated previously (client server).

// 6. When the user clicks the Login button, redirect the user from the client app to the authorization server building the following URL:

/*

 curl -X POST https://dev-49617478.okta.com/oauth2/default/v1/token \
   -d grant_type=client_credentials \
   -d client_id=0oa5dwtclkzpf5uVa5d7 \
   -d client_secret=BnfqAWLOjSGKhnR-GuxH7kOA6HYwRyqKg9HTqixg \
   -d scope=projects

*/

// 7. Client app should receive should receive an access token in the redirect URL

/*

 {
  "token_type":"Bearer",
  "expires_in":3600,
  "access_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkh4ck9Fams3a1JaS3YtX0VURFRGQnFwWE1yMU11dHVJck1iSjd3cEVkeWciLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUyMzMwODEsImV4cCI6MTY1NTIzNjY4MSwiY2lkIjoiMG9hNWR3dGNsa3pwZjV1VmE1ZDciLCJzY3AiOlsicHJvamVjdHMiXSwic3ViIjoiMG9hNWR3dGNsa3pwZjV1VmE1ZDcifQ.c7S3wKPCvN_fCmLz3DdOC8kDG8xYJhBaJyLUUi25WqdtuXOjBEGSP6oHAsvPovkNsJ98YLNRjD1pZ9G_8vM29PdG0qtwLmCIjL3P8EtIwnb_wv1b1Kjye9BSi8PJtJi_uRxVTG1GPmy6rtOkcq7afa287vci9D9CAkR_ZqNh8zMumwHYCVAoT8ShFCt9ChWA7oU-8QfZfrqtph_tTGUTYmHY5845UJVS71gMA4APCM30RYpX3T3xDWi0n8LF3nBHXpBT3NaJk0A8Njm5Cq9H9O430zD82kYG3670tKOaF0plsPB8ej7lbXzsmapXP5wqgoY8_0s1WruwhK6ThCdAdQ",
  "scope":"projects"
 }

*/

// 7. Client app should receive should receive an access token in the redirect URL
