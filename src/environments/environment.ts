// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'se-holdings-farming',
    appId: '1:64953670891:web:6915c4c70a31ea42cc72ae',
    databaseURL: 'https://se-holdings-farming-default-rtdb.firebaseio.com',
    storageBucket: 'se-holdings-farming.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyALuIx4LvyHlHyyJ75ekagKOk-9t5GnhFY',
    authDomain: 'se-holdings-farming.firebaseapp.com',
    messagingSenderId: '64953670891',
    measurementId: 'G-QYYN1T9LMS',
  },
  useEmulators: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
