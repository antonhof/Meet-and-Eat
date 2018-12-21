// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD9qOvhOxisTMjXy9FJPKZBnCnX05Y_dZc",
    authDomain: "balis-meet-and-eat.firebaseapp.com",
    databaseURL: "https://balis-meet-and-eat.firebaseio.com",
    projectId: "balis-meet-and-eat",
    storageBucket: "balis-meet-and-eat.appspot.com",
    messagingSenderId: "355762236134"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
