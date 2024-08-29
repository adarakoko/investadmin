const firebaseConfig = {
    apiKey: "AIzaSyDT6zyvu0Yk9QDiAmY8rHoC682F3Zh-4AQ",
    authDomain: "homevest-fec9c.firebaseapp.com",
    projectId: "homevest-fec9c",
    storageBucket: "homevest-fec9c.appspot.com",
    messagingSenderId: "638343930171",
    appId: "1:638343930171:web:0930951714a9b35860171e",
    measurementId: "G-5EZTRR8HD6"
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const user = firebase.auth().currentUser;