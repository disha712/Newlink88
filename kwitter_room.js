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
  document.getElementById("username").innerHTML="Welcome "+username;
  function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row; 
    });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location="index.html";
}