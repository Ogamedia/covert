// AccountsTemplates.removeField('email');
// AccountsTemplates.addFields([
//   {
//       _id: "username",
//       type: "text",
//       displayName: "username",
//       required: true,
//       minLength: 5,
//   },
//   {
//       _id: 'email',
//       type: 'email',
//       required: true,
//       displayName: "email",
//       re: /.+@(.+){2,}\.(.+){2,}/,
//       errStr: 'Invalid email',
//   }
// ]);

  Meteor.startup(function () {

    Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

    
    AccountsEntry.config({
      // logo: 'logo.png'                  // if set displays logo above sign-in options
      // privacyUrl: '/privacy-policy'     // if set adds link to privacy policy and 'you agree to ...' on sign-up page
      // termsUrl: '/terms-of-use'         // if set adds link to terms  'you agree to ...' on sign-up page
      homeRoute: '/',                    // mandatory - path to redirect to after sign-out
      dashboardRoute: '/events',      // mandatory - path to redirect to after successful sign-in
      // profileRoute: 'profile'
      passwordSignUpFields: 'USERNAME_AND_OPTIONAL_EMAIL',
      // passwordSignInFields: 'USERNAME_AND_OPTIONAL_EMAIL',x
      // showSignupCode: true
      // showOtherLoginServices: true      // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
      extraSignUpFields: [{             // Add extra signup fields on the signup page
        field: "username",                           // The database property you want to store the data in
        // name: "This Will Be The Initial Value",  // An initial value for the field, if you want one
        label: "username",                      // The html lable for the field
        placeholder: "John Doe",                 // A placeholder for the field
        type: "string",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       }]
    });
  });

