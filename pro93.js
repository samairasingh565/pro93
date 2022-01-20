

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    function addUser (){
          user_name = document.getElementById("user_name").value;
 
          localStorage.setItem("user_name" , user_name);

          window.location = "LetsChat_room.html";
    }

    //End code
    });});}
getData();
