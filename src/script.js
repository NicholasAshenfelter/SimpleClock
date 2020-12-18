const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours()
    
    let secPosition = sec * 360 / 60;
    let minPosition = (min * 360 / 60) + (secPosition / 60);
    let hrPosition = (hr * 360 /12) + (minPosition / 12);

function runTheClock() {
    
secPosition = secPosition + 6;
minPosition = minPosition + (6 / 60);
hrPosition = hrPosition + (3 / 360);

    HOURHAND.getElementsByClassName.transofrm = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.getElementsByClassName.transofrm = "rotate(" + minPosition + "deg)";
    SECONDHAND.getElementsByClassName.transofrm = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);



