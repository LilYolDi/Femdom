const player = document.getElementById("player");

const params = new URLSearchParams(window.location.search);

const video = params.get("video");

if(video){

player.src="videos/"+video;

player.play();

}else{

location.href="index.html";

}



