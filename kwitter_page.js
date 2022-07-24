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
room_name=localStorage.getItem("room_name");
function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            likes:0
      });
      document.getElementById("message").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
