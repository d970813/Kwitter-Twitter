
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
firebase.initializeApp(firebaseConfig)
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location ="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", Room_names);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location= "index.html";
}