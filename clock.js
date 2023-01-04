/*setInterval(()=>{
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30*htime+mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);*/

function time(){
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");

    let now_time = new Date();
    let hours = now_time.getHours();
    let minutes = now_time.getMinutes();
    let seconds = now_time.getSeconds();
    let hrotation = 30*hours + minutes/2;
    let mrotation = 6*minutes;
    let srotation = 6*seconds;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
};
setInterval(() => {
    time()
}, 1000);














