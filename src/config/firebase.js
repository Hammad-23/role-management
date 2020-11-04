import  firebase from 'firebase';
// import "firebase-auth";
// import "firebase/firestore";




var firebaseConfig = {
    apiKey: "AIzaSyB94li83i5YC22ZkVAmnVKhwlpb-B5sNS0",
    authDomain: "role-management-4946c.firebaseapp.com",
    databaseURL: "https://role-management-4946c.firebaseio.com",
    projectId: "role-management-4946c",
    storageBucket: "role-management-4946c.appspot.com",
    messagingSenderId: "446997771324",
    appId: "1:446997771324:web:b70188b94fbae046a57f39",
    measurementId: "G-HHXGESYHJB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


  const auth = firebase.auth();

  function registerUser (email,password){
   return auth.createUserWithEmailAndPassword(email,password)
  }

  function loginUser (email,password){
      return auth.signInWithEmailAndPassword(email,password)
  }

  export{
      registerUser,
      loginUser
  }