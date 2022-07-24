var firebaseConfig = {
      apiKey: "AIzaSyCzXt21hqWawWPQlbJOLdi1TL16bn-q2vs",
      authDomain: "kwitter-6d204.firebaseapp.com",
      databaseURL: "https://kwitter-6d204-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d204",
      storageBucket: "kwitter-6d204.appspot.com",
      messagingSenderId: "205675878873",
      appId: "1:205675878873:web:664422409fa0c2ec26e1c8",
      measurementId: "G-683KZHZJ90"
    };
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}