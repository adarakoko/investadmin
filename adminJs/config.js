const firebaseConfig = {
    apiKey: "AIzaSyBCaSEf8JQuVyDfTNmdUdboV_w7dtTXECc",
    authDomain: "homy-664d6.firebaseapp.com",
    projectId: "homy-664d6",
    storageBucket: "homy-664d6.appspot.com",
    messagingSenderId: "998841905703",
    appId: "1:998841905703:web:c07d8b70b9abbd28c75402"
  };

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const user = firebase.auth().currentUser;