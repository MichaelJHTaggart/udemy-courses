// Receiving an id_token
//? What does an id_token do?
// Communicates information about the user

// 1. When our application makes the initial redirect, we include the additional information we want (id_token & scope)

/*

 https://dev-49617478.okta.com/oauth2/default/v1/authorize?
   response_type=code&
   scope=openid+profile+email&
   client_id=0oa5dexzkbl87ab2d5d7&
   state=anotherrandom&
   redirect_uri=https://example-app.com/redirect&
   code_challenge=cd4nZ1DQ-JU9Mj3ZIO-tVfHJHpi-f7lNCgpJztqpQsA&
   code_challenge_method=S256

*/

// 2. We receive back the following response:

// 3. We can use the code information received to request an access_token && our id_token

/*

 curl -X POST https://dev-49617478.okta.com/oauth2/default/v1/token \
   -d grant_type=authorization_code \
   -d redirect_uri=https://example-app.com/redirect \
   -d client_id=0oa5dexzkbl87ab2d5d7 \
   -d client_secret=ZDKm19e-qazTUQvRpgiVMLuRedKQYcjW_f-0Hrhn \
   -d code_verifier=e43a362bb82734b39032bae52510ef49e8642c2458e913bca29e5a88 \
   -d code=FUCaZW0bL45w9bOrqOrX1qRyzl62VIIOyFROZ_ph800

*/

// 4. We know that the response is directly from our authorization server, and thereby is verified and can be trusted to be used.

/*

{
 "token_type":"Bearer",
 "expires_in":3600,"access_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULi1GZ20zQ3FaVTFTSHFWWl9kMTA3dXROYzA5VzRNR3hvZ3ppbzRaRUlQSGsiLCJpc3MiOiJodHRwczovL2Rldi00OTYxNzQ3OC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTUyMzY4MjAsImV4cCI6MTY1NTI0MDQyMCwiY2lkIjoiMG9hNWRleHprYmw4N2FiMmQ1ZDciLCJ1aWQiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsInNjcCI6WyJlbWFpbCIsIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNjU1MjE5MDkwLCJzdWIiOiJNaWNoYWVsSkhUYWdnYXJ0QGdpdGh1Yi5va3RhaWRwIn0.aO6fZt6Nw8Wu1qrWORgT469HzhHMgHbM2AGGM7PP6TVVylwuUwGZRmC9SjKAo7TFOx88rktJRfWoU6Taa-wKBpZD1wX8Lz99maSUTK8DbiPKSSMduOJprbyyN9BzWSimpKhAT131z8dAzypcBF8lmwWlgnogdrPDJ_YYeN3WTBdqTp_4kbLdteV836jmPUaIogM_0JgrmO_YGolFdh73ho6NxNSldLvacwmyys0sRzCqEpEJoZOpDmcqRb_pNjK3uXrKg8Vl8LNG0R9X3TWMJGLXZHER_5j3E78OBYfmrAfUhMlAMTq0Nox05nwrPHG6ZLzYZ0SrwvPG70NfzgZrdQ",
 "scope":"email openid profile",
 "id_token":"eyJraWQiOiJCNlczSllsWC1GbGtlNndncUFpZWJ0ZExGdUdIWGVRelZfenQxUmozaWVzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHU1ZGM1YnhqdmJJSkVHZzVkNyIsIm5hbWUiOiJNaWNoYWVsIFRhZ2dhcnQiLCJlbWFpbCI6Im10YWdnYXJ0aGF3a0BnbWFpbC5jb20iLCJ2ZXIiOjEsImlzcyI6Imh0dHBzOi8vZGV2LTQ5NjE3NDc4Lm9rdGEuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hNWRleHprYmw4N2FiMmQ1ZDciLCJpYXQiOjE2NTUyMzY4MjAsImV4cCI6MTY1NTI0MDQyMCwianRpIjoiSUQuamxOUVd0ck1nanIwWVg0WF9DMkhwYUpNYm04ZnZpSG9wMG9QM2Q5ZlBDdyIsImFtciI6WyJwd2QiXSwiaWRwIjoiMG9hNWRjODQzZURPdVVDZDg1ZDciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJNaWNoYWVsSkhUYWdnYXJ0QGdpdGh1Yi5va3RhaWRwIiwiYXV0aF90aW1lIjoxNjU1MjE5MDkwLCJhdF9oYXNoIjoiclNMRVNSOXpjazljM0otc0FTYVRDZyJ9.ol72AbikPPAizuNF2eD3Hznf4fmjvcOpHtGuRl18uWN6ITlaPLgC6vX-8pr2OneuXw_rnGZXSAZ6ub5yMXFPexgfiQkWYQdulYpa76uLeiz_-VHpmdhmM6ftok_sR2KlJQPiOw9FqUu18gyrKsFg9J_SJPwCLRnxZaK6vVpORnQh2Qv0REkPnUOfYnwCg0Wx_f5bwbmvDQB9IHDn9mSk07tiWV8Wr0nmd5jrQGUVNITLNaOCfAtxCBQmELznW0mOk47L3autybvxTLXjiUKBBTQ8gn5Zx53yO1NPtdxpW0VJQ-4H2tJbvqMx4WVEgGTNdOM5Qwn2YndSpH68nArEww"
}

*/

// We can now decode the JWT from id_token to get the relevant information from the token.