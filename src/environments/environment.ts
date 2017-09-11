// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCEWgkTBYTi4HroPNxPejVyJNo02OnmnQA',
    authDomain: 'mladost-air-project.firebaseapp.com',
    databaseURL: 'https://mladost-air-project.firebaseio.com',
    projectId: 'mladost-air-project',
    storageBucket: 'mladost-air-project.appspot.com',
    messagingSenderId: '657040601777'
  }
};
