
function startDrawing() {
    div = document.getElementById("picture");
    canvas = document.createElement("canvas");
    canvas.id = "picture";
    canvas.width = 400;
    canvas.height = 300;
    div.appendChild(canvas);
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(200, 400);
    ctx.lineTo(200, 0);
    ctx.moveTo(200, 0);
    ctx.lineTo(195, 15);
    ctx.moveTo(200, 0);
    ctx.lineTo(205, 15);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 150);
    ctx.lineTo(400, 150);
    ctx.moveTo(400,150);
    ctx.lineTo(385,145);
    ctx.moveTo(400, 150);
    ctx.lineTo(385, 155);
    ctx.stroke();
    ctx.closePath();
}
function draw(num) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 400);
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(200, 400);
    ctx.lineTo(200, 0);
    ctx.moveTo(200, 0);
    ctx.lineTo(195, 15);
    ctx.moveTo(200, 0);
    ctx.lineTo(205, 15);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 150);
    ctx.lineTo(400, 150);
    ctx.moveTo(400,150);
    ctx.lineTo(385,145);
    ctx.moveTo(400, 150);
    ctx.lineTo(385, 155);
    ctx.stroke();
    ctx.closePath();
    var R = num;
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.strokeRect(200, 150 - R*30,R*30/2, R*30);
    ctx.fillRect(200, 150-R*30,R*30/2, R*30);
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200 - R*30, 150);
    ctx.moveTo(200 - R*30, 150);
    ctx.lineTo(200,150 - R*30);
    ctx.moveTo(200,150 - R*30);
    ctx.lineTo(200, 150);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.arc(200, 150, R*30, Math.PI/2, Math.PI, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    // for (var i = 0; arrX.length > i; i++){
    //     ctx.beginPath();
    //     ctx.fillStyle = 'red';
    //     ctx.fillRect(arrX[i]*30 + 200, 150 - 30*arrY[i], 5, 5);
    //     ctx.fill();
    //     ctx.closePath();
    // }
}
function send() {
    ctx = canvas.getContext('2d');
    canvas.onmousedown = function (ev1) {
        if (document.getElementById("rLink").innerHTML != "") {
            x = ev1.offsetX;
            y = ev1.offsetY;
            alert(x + " " + y);
            var elemX = document.getElementById("answer:hideX");
            var elemY = document.getElementById("answer:hideY");
            var elemR = document.getElementById("answer:hideR");
            elemX.value = ((x - 200)/30).toFixed(2);
            elemY.value = ((150 - y)/30).toFixed(2);
            elemR.value = document.getElementById("rLink").innerHTML;
            elem = document.getElementById("answer:ajax");
            elem.click();
        }
    }
}

function showData() {
    var tr = document.getElementById("data").getElementsByTagName("tr");
    for(var i=0;tr.length>i;i++)
    {
        if (i == 0){

        }else {
             ctx = canvas.getContext('2d');
            var td = tr.item(i).getElementsByTagName("td");
            var r = document.getElementById("rLink").innerHTML;
            if (td.length == 4) {
                var x = td.item(0).innerText;
                x = x.replace(",", ".");
                x = x * 30 + 200;
                var y = td.item(1).innerText;
                y = y.replace(",", ".");
                y = 150 - 30 * y;
                if (r == td.item(2).innerText) {
                    if (td.item(3).innerText == 'Промах') {
                        ctx.beginPath();
                        ctx.fillStyle = 'red';
                        ctx.fillRect(x, y, 5, 5);
                        ctx.fill();
                        ctx.closePath();
                    } else {
                        ctx.beginPath();
                        ctx.fillStyle = 'green';
                        ctx.fillRect(x, y, 5, 5);
                        ctx.fill();
                        ctx.closePath();
                    }
                }else {
                    ctx.beginPath();
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(x, y, 5, 5);
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}


function setR(num) {
    var p = document.getElementById("rLink");
    p.innerHTML = num;
}