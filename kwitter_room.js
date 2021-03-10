var firebaseConfig = {
    apiKey: "AIzaSyBmIyxDf6ipBd3Xz6VO5i7Mm8D2FFqAxHg",
    authDomain: "kwitter-d1d84.firebaseapp.com",
    databaseURL: "https://kwitter-d1d84-default-rtdb.firebaseio.com",
    projectId: "kwitter-d1d84",
    storageBucket: "kwitter-d1d84.appspot.com",
    messagingSenderId: "940885728132",
    appId: "1:940885728132:web:9310734929cc9f87959bd1",
    measurementId: "G-L054Z85W1P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
  function addroom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
          purpose : "Adding room name"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
  }
  function getdata(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key
            room_names = childKey
            console.log("room name-"+room_names)
            row = "<div class = 'room_name' id = " + room_names + "onclick = 'redirecttoRoomName(this.id)'>" + room_names + "</div><hr>"
            document.getElementById("output").innerHTML += row
        })
    })
  }
  getdata()
  function redirecttoRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
  }
  function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter.html"
  }