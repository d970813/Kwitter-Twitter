
const firebaseConfig = {
    apiKey: "AIzaSyBF1z8OVXlkTr90Eu6J-jDr5Voeoo9QbJo",
    authDomain: "kwitter--twitter.firebaseapp.com",
    databaseURL: "https://kwitter--twitter-default-rtdb.firebaseio.com",
    projectId: "kwitter--twitter",
    storageBucket: "kwitter--twitter.appspot.com",
    messagingSenderId: "243115311341",
    appId: "1:243115311341:web:ed9ef0b2c76ec79c4fcce4",
    measurementId: "G-KLZ46NLLGG"
  };
firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}