function checkAudio(){
    var myAudio = document.getElementById('music');
    if (myAudio.canPlayType) {
        if ( "" != myAudio.canPlayType('audio/mpeg')) {
            //alert("您的浏览器支持mp3编码。<br>");
        }
        if ( "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"')) {
            //alert("您的浏览器支持oog编码。<br>");
        }
        if ( "" != myAudio.canPlayType('audio/mp4; codecs="mp4a.40.5"')) {
            //alert("您的浏览器支持aac编码。");
        }
        //alert("您的浏览器支持.wav编码。");
    }
    else {
        alert("您的浏览器不支持要检测的.wav音频格式。");
    }
}

function checkVideo(){
    var myVideo = document.getElementById('video');
    if ("" ==myVideo.canPlayType) {
        alert("您的浏览器不支持要检测的.mp4视频格式。");
    }
}

function cheekStorageSupport(){
    if (window.sessionStorage) {
        //alert("This brower supports sessionStorage")
    }else{
        alert("This brower does not support sessionStorage")
    }
    if (window.localStorage) {
        //alert("This brower supports localStorage")
    }else{
        alert("This brower does not support localStorage")
    }
}

function checkApplicationCache() {
    if (!window.applicationCache) {
        alert("浏览器不支持离线应用")
    }
}

if(localStorage.pagecount) {
    localStorage.pagecount = Number(localStorage.pagecount) + 1;
} else {
    localStorage.pagecount = 1;
}
if(sessionStorage.pagecount) {
    sessionStorage.pagecount = Number(sessionStorage.pagecount) + 1;
} else {
    sessionStorage.pagecount = 1;
}
function inialVistorNumber(){
    localStorage.pagecount=0;
}
function inialVistorNumberTime(){
    sessionStorage.pagecount=0;
}
function setUserName(){
    var username =document.getElementById("user").value;
    window.localStorage.setItem("key_username", username);
}
var storage=localStorage;
function setPassword(){
    var password =document.getElementById("pwd").value;
    window.localStorage.setItem("key_password", password);          
}

function workerMethod() {
    var worker = new Worker("JavaScript/worker.js");
    worker.postMessage("helloworld");
    worker.onmessage = function (evt) {
        //console.log(evt.data);
        alert(evt.data);
    }
}

function get_location(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show_map,handle_error,{enableHighAccuracy:true,maximumAge:1000});
    }
    else {
        alert("你的浏览器不支持使用HTML5来获取地理位置信息。");
    }
}
function handle_error(err){
    //错误处理
    switch(err.code){
        case 1 :
            alert("位置服务被拒绝。");
            break;
        case 2:
            alert("暂时获取不到位置信息。");
            break;
        case 3:
            alert("获取信息超时。");
            break;
        default:
            alert("未知错误。");
            break;
    }
}
function show_map(position){
    //显示地理信息
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    showObject(position,0);
}
function showRealTime() {
    var myTime = new Date();
    var year = myTime.getFullYear();
    var month = myTime.getMonth();
    var date = myTime.getDate();
    var hour = myTime.getHours();
    var minute = myTime.getMinutes();
    var second = myTime.getSeconds();
    var now = year+"年"+(month+1)+"月"+date+"日  "+hour+":"+minute+":"+second;
    document.getElementById("myTime").innerHTML=now;
}
function load(){
    checkAudio();
    checkVideo();
    cheekStorageSupport();
    checkApplicationCache();
    //get_location();
    document.getElementById("vistorNumber").value=localStorage.pagecount;
    document.getElementById("vistorNumberTime").value=sessionStorage.pagecount;
    document.getElementById("user").value=window.localStorage.getItem("key_username");
    document.getElementById("pwd").value=window.localStorage.getItem("key_password");
    workerMethod();
    window.setInterval("showRealTime()",1000);
}

