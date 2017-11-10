
var a;
	function send() {
	a="javascript";
	var b ="语言基础";
	alert(a+b);
}


function rightKey(){
	if (event.button==2) {
		event.returnValue=false;
		alert("ban using rightKey");
		//var fso=new ActiveXObject("Scripting.FileSystemObject");
		//alert(fso.GetAbsolutePathName("c:"));
		var obj1={name:"Lv Hongbin",age:"24",Height:"170"}
		for(example in obj1){
			document.writeln("属性 "+ example+": "+obj1[example]+"<br>");
			if (obj1[example].match(/\D/)) {
				document.writeln("Good"+"<br>");
			}else{
				document.writeln("Bad"+"<br>");
			}
		}

	}
}
function check() {
	var name=form1.user.value;
	var pwd=form1.pwd.value;
	if ((name=="")||(name==null)) {
		alert("Please input your username")
		form1.user.focus();
		return;
	}else if ((pwd=="")||(pwd==null)) {
		alert("Please input your password")
		form1.pwd.focus();
		return;
	}else{
		setUserName();
		setPassword();
		form1.submit();
	}
}


function toggleSound() {
    var music = document.getElementById("music");
    var toggle = document.getElementById("toggle");

    if (music.paused) {
      music.play();
      toggle.innerHTML = "暂停";
    }
    else {
      music.pause();
      toggle.innerHTML ="播放";
    }
}


var updateInterval = 5000;
var frameWidth = 100;
var frameHeight = 75;
var frameRows = 4;
var frameColumns = 4;
var frameGrid = frameRows * frameColumns;
var frameCount = 0;
var intervalId;
var videoStarted = false;
function startVideo() {
    if (videoStarted)
      return;
    videoStarted = true;
    updateFrame();
    intervalId = setInterval(updateFrame, updateInterval);
    var timeline = document.getElementById("timeline");
    timeline.onclick = function(evt) {
        var offX = evt.layerX - timeline.offsetLeft;
        var offY = evt.layerY - timeline.offsetTop;
        var clickedFrame = Math.floor(offY / frameHeight) * frameRows;
        clickedFrame += Math.floor(offX / frameWidth);
        var seekedFrame = (((Math.floor(frameCount / frameGrid)) *
                            frameGrid) + clickedFrame);
        if (clickedFrame > (frameCount % 16))
            seekedFrame -= frameGrid;
        if (seekedFrame < 0)
          return;
        var video = document.getElementById("video");
        video.currentTime = seekedFrame * updateInterval / 1000;
        frameCount = seekedFrame;
    }
}
function updateFrame() {
    var video = document.getElementById("video");
    var timeline = document.getElementById("timeline");
    var ctx = timeline.getContext("2d");
    var framePosition = frameCount % frameGrid;
    var frameX = (framePosition % frameColumns) * frameWidth;
    var frameY = (Math.floor(framePosition / frameRows)) * frameHeight;
    ctx.drawImage(video, 0, 0, 400, 300, frameX, frameY, frameWidth, frameHeight);
    frameCount++;
}
function stopTimeline() {
    clearInterval(intervalId);
}

var appCache=window.applicationCache;
function checkCache(){  
    switch(appCache.status){
    case appCache.UNCACHED:
        // UNCACHED==0
        alert("UNCACHED");
        break;
    case appCache.IDLE:
        // IDLE==1
        alert("IDLE");
        break;
    case appCache.CHECKING:
        // CHECKING==2
        alert("CHECKING");
        break;
    case appCache.DOWNLOADING:
        // DOWNLOADING==3
        alert("DOWNLOADING");
        break;
    case appCache.UPDATEREADY:
        // UPDATEREADY==4
        alert("UPDATEREADY");
        break;
    case appCache.OBSOLETE:
        // OBSOLETE==5
        alert("OBSOLETE");
        break;
    }    
}

function updateMyCache(){
    var appCache=window.applicationCache;
    appCache.update();
    alert("更新成功");
}

appCache.addEventListener("error", handleCacheError,false);
function handleCacheError(){
    alert("Error: Cache failed to update!");
}

function fibonacci() {
    alert(document.getElementById("text_fibonacci").value);
    var work_fibonacci=new Worker("JavaScript/fibonacci.js");
    work_fibonacci.postMessage(document.getElementById("text_fibonacci").value);
    work_fibonacci.onmessage=function (e) {
        document.getElementById("result_fibonacci").value=e.data;
        alert(e.data);
    }
}
