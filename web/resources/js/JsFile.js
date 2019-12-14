function updateTime() {
    var output = document.getElementById("time");
    var data = new Date();
    var time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    output.innerHTML = time;
}

function updateDate() {
    var output = document.getElementById("date");
    var date = new Date();
    var day = date.getDate() + " " + (date.getMonth()+1) + " " + date.getFullYear();
    output.innerHTML = day;
}

setInterval(updateTime,11000);
setInterval(updateDate, 11000);