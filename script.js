//Vorwärs
var access_token =""
function init(){
getAccessToken()
console.log(access_token)

var forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", forward);

var backButton = document.getElementById("back");
backButton.addEventListener("click", back);

var playPauseButton = document.getElementById("playPause");
playPauseButton.addEventListener("click", Play);

}

function forward(){
    console.log("forward");
    forward.value = "&#9197";

    fetch("https://api.spotify.com/v1/me/player/next" ,{
        method: "POST",
        headers: {
        'Authorization' : 'Bearer' +' ' + access_token,
          },
        })
}


//Zurück

    

function back(){
    console.log("back");
    back.value = "&#9197";

    fetch("https://api.spotify.com/v1/me/player/previous" ,{
        method: "POST",
        headers: {
        'Authorization' : 'Bearer' +' ' + access_token,
          },
        })
}


//Play und Pause

  
function Play(){
    console.log("Played");
    playPause.removeEventListener("click", Play);
    playPause.addEventListener("click", Pause);
    playPause.value = "⏸️";

    fetch("https://api.spotify.com/v1/me/player/play" ,{
        method: "PUT",
        headers: {
        'Authorization' : 'Bearer' +' ' + access_token,
          },
        })
}

function Pause(){
    console.log("Paused");
    playPause.removeEventListener("click",Pause);
    playPause.addEventListener("click", Play);
    playPause.value = "▶️";
   
fetch("https://api.spotify.com/v1/me/player/pause" ,{
    method: "PUT",
    headers: {
    'Authorization' : 'Bearer' +' ' + access_token,
      },
      
}) 
}

function getAccessToken(){ 
    let hash = window.location.hash;
    console.log("window.location.hash : " + hash);
    access_token = hash.substring(14).split("&")[0]
    



}

//'https://api.spotify.com/v1/me/player/pause'