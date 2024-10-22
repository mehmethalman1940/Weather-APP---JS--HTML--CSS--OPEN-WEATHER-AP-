var bld = "";
var okv = "";
var adray = "";
var rayc = 0;
// Retrieve all cookies as a string
const allCookies = document.cookie;

// Check if the desired cookie exists within the string
if (allCookies.includes("bld")) {
	const cookieName = "bld";
	const match = allCookies.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
	bld = match[2];
	abld();

} else {
    fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    // Check if the country is New Zealand and hide div
    bld = data.country.toLowerCase();
	const now = new Date();

// Set the expiration time to one day from now (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
now.setTime(now.getTime() + (24 * 60 * 60 * 1000));

// Convert the expiration time to a UTC string
const expires = now.toUTCString();

// Set the cookie with the name 'username', value 'JohnDoe', and expiration date
document.cookie = "bld=" + bld + "; expires=" + expires + "; path=/";
abld();

  })
}

function abld(){
    if(bld == "us" || bld == "sa" || bld == "ca" || bld == "mx" || bld == "br" || bld == "fr" || bld == "gb" || bld == "de" || bld == "it" || bld == "es" || bld == "se"|| bld == "ae"){okv = true;	}
	if(bld == "us" || bld == "ae" || bld == "fr"){
	
		async function cadray() {
		var lnk = "https://wallpapers-max.b-cdn.net/ad/" + bld + ".txt"
		const respon = await fetch(lnk);
		window.adray = await respon.json();  
		console.log(adray);
		}
		cadray();
		}
	else{
		async function cgad() {
		var lnk = "https://wallpapers-max.b-cdn.net/ad/gad.txt"
		const respon = await fetch(lnk);
		window.adray = await respon.json();  
		}
		cgad();
		};
}
let fsheet = document.createElement('link');
fsheet.href = 'https://wallpapers-max.b-cdn.net/asets/css/fonts2.css';
fsheet.type = 'text/css'
fsheet.rel = 'stylesheet';
document.getElementsByTagName('HEAD')[0].appendChild(fsheet);

const downloadWallBtn = document.querySelector(".download-wall-btn");
const resolution = document.querySelector(".resolution");
const rezchose = document.querySelector(".rez-chose");
const downloadText = document.querySelector(".download-text");
const progress = document.querySelector(".progress");
const thumbUp = document.querySelector(".thumb-icon");
const shareBtn = document.querySelector(".main-share-btn");
const mainWrap = document.querySelector(".btnz-main-wrap");
var good = true;
downloadWallBtn.addEventListener("click", function () {
var mvvd = document.querySelector(".asense").offsetHeight;
if(!mvvd){good = false}
if (good){
resolution.classList.add("resolution-active");
rezchose.classList.add("rez-chose-active");
downloadText.classList.add("download-text-active");
}
else {
  mainWrap.classList.add("good");
  mainWrap.innerHTML="Turn AdBlocker off and refresh the page."
}
});

resolution.addEventListener("click", function () {
progress.classList.add("progress-active");
downloadText.classList.remove("download-text-active");
thumbUp.classList.add("thumb-icon-active");
setTimeout(function () {
progress.classList.remove("progress-active");
}, 3900);
setTimeout(function () {
shareBtn.classList.add("click-me");
}, 2000);
setTimeout(function () {
downloadText.classList.remove("download-text-active");
}, 2500);
setTimeout(function () {
downloadText.classList.remove("download-text-active");
resolution.classList.remove("resolution-active");
thumbUp.classList.remove("thumb-icon-active");
rezchose.classList.remove("rez-chose-active");
}, 1200);
setTimeout(function () {
shareBtn.classList.add("click-me");
}, 7000);
});
const shareText = document.querySelector(".share-text");
const area2close = document.querySelector(".wallpaper-tags");
const supportUs = document.querySelector("#support-us");
supportUs.addEventListener("click", function () {
  if(okv){
  navigator.share({ url: 'https://wallpapersmax.com/', text: 'I discovered this incredible website where I can download gorgeous 4K #phone_wallpapers for free!'});
  gtag('event', 'lovelyShare', {
 'event_category' : 'button',
 'event_label' : 'na'
 });
  }
  else{supportUs.style.visibility = 'hidden'}
  });
shareBtn.addEventListener("click", function () {
if(okv){
navigator.share({title: 'Share', url: window.location.href});
}
else{shareBtn.style.visibility = 'hidden'}
});
area2close.addEventListener("click", function () {
resolution.classList.remove("resolution-active");
downloadText.classList.remove("download-text-active");
rezchose.classList.remove("rez-chose-active");
});
var startcount = 0;
var totalLodedPhotos = 0;
const observer = new MutationObserver(function(mutations_list) {
mutations_list.forEach(function(mutation) {
mutation.addedNodes.forEach(function(added_node) {
if(added_node.classList.contains('wallpaper')) {
totalLodedPhotos = document.querySelectorAll('.wallpapers-wrap .wallpaper').length;
if((totalLodedPhotos - startcount) == 24 ) {
startcount += 24
if(rayc < adray.length){
document.querySelector('.wallpapers-wrap').insertAdjacentHTML("beforeend", adray[rayc]);
rayc +=1;
}
else{
document.querySelector('.wallpapers-wrap').insertAdjacentHTML("beforeend", adray[0]);
rayc =1;
}
}
}
});
});
});
observer.observe(document.querySelector(".wallpapers-wrap"), { subtree: false, childList: true });
var fs=0;
window.addEventListener('scroll', (event) => {
if (!fs){
	if(okv){
  setTimeout(function () {
  document.querySelector(".love-btn").style.opacity = "1";
  document.querySelector(".home-btn").style.opacity = "1";
  }, 700);
  setTimeout(function () {
  document.querySelector(".love-icon").style.animation = "bounce 1s infinite";
	}, 3000);
	shareBtn.style.visibility = "visible";
	}
  var scroll = document.createElement("script");
  scroll.src = "https://wallpapers-max.b-cdn.net/asets/java/load.js";
  document.querySelector('body').appendChild(scroll);
  var ga = document.createElement("script");
  ga.src = "https://www.googletagmanager.com/gtag/js?id=G-CFTGL9KJP2";
  document.querySelector('body').appendChild(ga);
  var gaN = document.createElement("script");
  gaN.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-CFTGL9KJP2');";
  document.querySelector('body').appendChild(gaN);
fs = 1;
window.removeEventListener('scroll', (event) => {});
}
});