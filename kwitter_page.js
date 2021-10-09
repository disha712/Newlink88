var firebaseConfig = {
      apiKey: "AIzaSyAIlJBg41EIKNTSKBlCrZy9WZ9g3Idierk",
      authDomain: "twitter-a9275.firebaseapp.com",
      databaseURL: "https://twitter-a9275-default-rtdb.firebaseio.com",
      projectId: "twitter-a9275",
      storageBucket: "twitter-a9275.appspot.com",
      messagingSenderId: "170414825479",
      appId: "1:170414825479:web:f7857b95119d2950b48aa2"
    };
  firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
roomname=localStorage.getItem("room_name");
function send() {
      message=document.getElementById("text_input").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            likes:0
      });
      document.getElementById("text_input").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
 } });  }); }
getData();
