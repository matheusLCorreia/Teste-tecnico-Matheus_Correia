// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oauth_consumer_key: `V1TD4R1a814CGuaYdm3LQ5BFH`,
  oauth_nonce: `UpH5AKQfSkgelWHBgFV6e1rnzDLxSNaVEIPZqfHYn7kDQsLD65`,
  oauth_signature: '',
  oauth_signature_method: `HMAC-SHA1`,
  oauth_timestamp: new Date().getTime(),
  oauth_token: `1389335189558550531-tOqKg4kKDgamkNGE2t3cfAjPxlosdS`,
  oauth_version: 1.0,
  bearer: `AAAAAAAAAAAAAAAAAAAAAGXNPAEAAAAAi1eCbmtoD7obQWJwNcvC%2FUMLgwY%3DIiWn0tWyiJyjnq6k1tiuOyHrwRPIq7BKMRC2KNqXfnuiVdukn5`
};

export const auth_header: string = `OAuth oauth_consumer_key="${environment.oauth_consumer_key}",
oauth_nonce="${environment.oauth_nonce}", oauth_signature="${environment.oauth_signature}",
oauth_signature_method="${environment.oauth_signature_method}", oauth_timestamp="${new Date().getTime()}",
oauth_token="${environment.oauth_token}", oauth_version="${environment.oauth_version}";
`;
export const signature: string = `include_entities=true&oauth_consumer_key=${environment.oauth_consumer_key}&oauth_nonce=${environment.oauth_nonce}&oauth_signature=${environment.oauth_signature}&oauth_signature_method=${environment.oauth_signature_method}&oauth_timestamp=${new Date().getTime()}&oauth_token=${environment.oauth_token}&oauth_version=${environment.oauth_version}`;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
