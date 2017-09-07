// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: 'AIzaSyChQk3n3ihz1vc3dHCbqW25p8WQhDk7R1g',
    authDomain: 'mladost-air.firebaseapp.com',
    databaseURL: 'https://mladost-air.firebaseio.com',
    projectId: 'mladost-air',
    storageBucket: 'mladost-air.appspot.com',
    messagingSenderId: '625628234055'
  }
};
