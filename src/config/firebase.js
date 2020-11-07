// import  firebase from 'firebase';
// import "firebase-auth";
// import 'firebase/auth';
// import "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore"; // If using Firebase database
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB94li83i5YC22ZkVAmnVKhwlpb-B5sNS0",
  authDomain: "role-management-4946c.firebaseapp.com",
  databaseURL: "https://role-management-4946c.firebaseio.com",
  projectId: "role-management-4946c",
  storageBucket: "role-management-4946c.appspot.com",
  messagingSenderId: "446997771324",
  appId: "1:446997771324:web:b70188b94fbae046a57f39",
  measurementId: "G-HHXGESYHJB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth = firebase.auth();

function registerUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}
const userId = localStorage.getItem("ID");
const store = firebase.firestore();
function profileInfo(information) {
  return store.collection("profileInformation").doc(userId).set(information);
}
async function getData() {
  const userID = localStorage.getItem("ID");
let data= await  store
    .collection("profileInformation")
    .where("userId", "==", userID)
    .get()
    return data
}
//  const currentUser= auth.getInstance().getCurrentUser().getUid();
//  console.log(currentUser)
export { registerUser, loginUser, profileInfo, getData };
