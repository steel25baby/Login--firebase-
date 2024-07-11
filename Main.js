

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDbnMXrGmYYDLPYWfZTbJ9Uxwfg1CfpwH4",
    authDomain: "facebook-signup-page-76e3d.firebaseapp.com",
    projectId: "facebook-signup-page-76e3d",
    storageBucket: "facebook-signup-page-76e3d.appspot.com",
    messagingSenderId: "779088314200",
    appId: "1:779088314200:web:02467c5faaa36599346f2d",
    measurementId: "G-JC2JG3MYJX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider

  const googleLogin = document.getElementById("google-login-btn")
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../Logged.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })
  


