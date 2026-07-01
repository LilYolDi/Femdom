const video = document.getElementById("video");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const muteBtn = document.getElementById("mute");
const fullBtn = document.getElementById("fullscreen");

const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");

const likesText = document.getElementById("likes");
const dislikesText = document.getElementById("dislikes");
const viewsText = document.getElementById("views");

// PLAY
playBtn.addEventListener("click", () => {
    video.play();
});

// PAUSE
pauseBtn.addEventListener("click", () => {
    video.pause();
});

// MUTE
muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;

    if(video.muted){
        muteBtn.innerHTML = "🔇";
    }else{
        muteBtn.innerHTML = "🔊";
    }
});

// FULLSCREEN
fullBtn.addEventListener("click", () => {

    if(video.requestFullscreen){

        video.requestFullscreen();

    }else if(video.webkitRequestFullscreen){

        video.webkitRequestFullscreen();

    }

});

// ---------- Просмотры ----------

let views = Number(localStorage.getItem("views")) || 1523;

views++;

viewsText.innerHTML = "👁 " + views.toLocaleString();

localStorage.setItem("views", views);

// ---------- Лайки ----------

let likes = Number(localStorage.getItem("likes")) || 352;

likesText.innerHTML = likes;

likeBtn.onclick = () => {

    likes++;

    likesText.innerHTML = likes;

    localStorage.setItem("likes", likes);

};

// ---------- Дизлайки ----------

let dislikes = Number(localStorage.getItem("dislikes")) || 18;

dislikesText.innerHTML = dislikes;

dislikeBtn.onclick = () => {

    dislikes++;

    dislikesText.innerHTML = dislikes;

    localStorage.setItem("dislikes", dislikes);

};

// ---------- Поиск ----------

const search = document.querySelector(".search input");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    cards.forEach(card=>{

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// ---------- Горячие клавиши ----------

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        if(video.paused){

            video.play();

        }else{

            video.pause();

        }

    }

    if(e.key==="m"){

        video.muted=!video.muted;

    }

});

// ---------- Автопауза ----------

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        video.pause();

    }

});

// ---------- Прогресс ----------

video.addEventListener("ended",()=>{

    alert("Видео закончилось.");

});

// ---------- Время ----------

video.addEventListener("loadedmetadata",()=>{

    console.log("Длительность:",video.duration);

});