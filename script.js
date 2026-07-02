const videos = [
{
    id:1,
    title:"Первое видео",
    thumb:"thumbs/video1.jpg",
    file:"videos/video1.mp4",
    views:"12 000 просмотров"
},
{
    id:2,
    title:"Второе видео",
    thumb:"thumbs/video2.jpg",
    file:"videos/video2.mp4",
    views:"8 500 просмотров"
},
{
    id:3,
    title:"Третье видео",
    thumb:"thumbs/video3.jpg",
    file:"videos/video3.mp4",
    views:"6 300 просмотров"
},
{
    id:4,
    title:"Четвертое видео",
    thumb:"thumbs/video4.jpg",
    file:"videos/video4.mp4",
    views:"15 700 просмотров"
},
{
    id:5,
    title:"Пятое видео",
    thumb:"thumbs/video5.jpg",
    file:"videos/video5.mp4",
    views:"3 900 просмотров"
},
{
    id:6,
    title:"Шестое видео",
    thumb:"thumbs/video6.jpg",
    file:"videos/video6.mp4",
    views:"18 200 просмотров"
}
];

const container = document.getElementById("videos");

function showVideos(list){

    container.innerHTML="";

    list.forEach(video=>{

        container.innerHTML += `
        <div class="card" onclick="openVideo(${video.id})">
            <img src="${video.thumb}">
            <div class="info">
                <div class="title">${video.title}</div>
                <div class="views">${video.views}</div>
            </div>
        </div>
        `;

    });

}

showVideos(videos);

function openVideo(id){
    window.location.href="watch.html?id="+id;
}

document.getElementById("search").addEventListener("input",function(){

    const text=this.value.toLowerCase();

    const result=videos.filter(v=>
        v.title.toLowerCase().includes(text)
    );

    showVideos(result);

});