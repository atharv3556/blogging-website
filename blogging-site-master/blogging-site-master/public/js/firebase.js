let firebaseConfig = {
    apiKey: "AIzaSyCHg6D1X3wzSPp6aZ9UsSfJWlZhfDu8lDo",
    authDomain: "content-management-tool-afdea.firebaseapp.com",
    projectId: "content-management-tool-afdea",
    storageBucket: "content-management-tool-afdea.appspot.com",
    messagingSenderId: "548998088330",
    appId: "1:548998088330:web:0d86280dd70640aa920f73",
    measurementId: "G-QE8607SB3E"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();