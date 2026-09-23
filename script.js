const video=document.getElementById("bgVideo");
const muteBtn=document.getElementById("muteBtn");
const volume=document.getElementById("volume");
video.volume=0;
video.muted=true;
function setIcon(){muteBtn.innerHTML=video.muted||video.volume===0?'<i class="fa-solid fa-volume-xmark"></i>':'<i class="fa-solid fa-volume-high"></i>';}
setIcon();
muteBtn.addEventListener("click",()=>{if(video.muted){video.muted=false;video.volume=Number(volume.value)||0.5;if(video.volume===0){video.volume=.5;volume.value=.5;}}else{video.muted=true;}setIcon();});
volume.addEventListener("input",()=>{video.volume=Number(volume.value);video.muted=video.volume===0;setIcon();});
