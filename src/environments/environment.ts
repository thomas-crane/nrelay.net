// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA3kAcFGKOpN0GlbUg6AGkK61DExjpCXrM',
    authDomain: 'nrelay-project.firebaseapp.com',
    databaseURL: 'https://nrelay-project.firebaseio.com',
    projectId: 'nrelay-project',
    storageBucket: 'nrelay-project.appspot.com',
    messagingSenderId: '957076284134'
  }
};
