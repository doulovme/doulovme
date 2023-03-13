myAud = document.getElementById("ad");
function setCurEndTimeAndPlay(startTime, endTime) {
    // 设置当前时间
    myAud.currentTime = startTime;


    // 设置暂停时间
    var endTime = 113;
    myAud.addEventListener('timeupdate', function () {
        if (myAud.currentTime > endTime) {
            myAud.pause();
        }
    }, false);
    myAud.addEventListener('loadedmetadata', function () {
        myAud.play();
    }, false);


    // 播放
    myAud.play();

}