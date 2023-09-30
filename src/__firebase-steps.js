/**
 * ====================
 * Initial Installation
 * ====================
 1. Visit: http://console.firebase.google.com/
 2. Add Project 
 3. Register app
 4. Install firebase: npm install firebase
 5. create a file: firebase.init.js
 6. Add the configuration code in the file
 * =====================
 * Google Integration
 * =====================
 7. go to Docs > Build > Authentication > web > get started > google
 8. Login page: import { getAuth } from "firebase/auth";
 9. Export app from firebase.init.js file : export default app
 10. Login page: const auth = getAuth(app)
 * ================
 * Provider setup
 * ================
 11. Login page: import GoogleAuthProvider and create a new GoogleAuthProvider();
 12.Login page: inside click handler add : signInWithPopup(auth,provider).then().catch()
 13. Go to:console.firebase.google.com > choose your project > Authentication>sign-in methods> add new provider > enable google, facebook,etc.


 ----------------------------------------------------
 **========================
   Github, Facebook, Twitter, Microsoft, Yahoo, Apple, etc. setup
 **========================
 1. Go to:console.firebase.google.com > choose your project > Authentication>sign-in methods> add new provider > enable google, facebook,etc.
 2. Copy the callback url 
 3. Go to: developer settings of the site you want to use. e.g-> github > settings > developer settings> create a app > use the copied callback url you got from firebase
 4. Copy the client ID,client secret you got and set this in the firebase and submit.
 ==============
 Integration
 ==============
 5. go to Docs > Build > Authentication > web > get started > github or others...

 ============
 Provider
 ============
 6. Login page: import GithubAuthProvider and create a new GithubAuthProvider();
 7.Login page: inside click handler add : signInWithPopup(auth,provider).then().catch()

 ** Do not push firebase project in github. Firebase configuration code is very secret.
 **/
