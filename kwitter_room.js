
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyAiTtof9ThUBhwF45zy4t9WxplREIXR67c",
      authDomain: "croco-chat-b3367.firebaseapp.com",
      projectId: "croco-chat-b3367",
      databaseURL=https:-"//croco-chat-b3367-default-rtdb.firebaseio.com",
      storageBucket: "croco-chat-b3367.appspot.com",
      messagingSenderId: "791401896416",
      appId: "1:791401896416:web:d733eb0983df3918b2b385",
      measurementId: "G-RW874P16XJ"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
