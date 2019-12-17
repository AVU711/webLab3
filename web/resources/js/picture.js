function drawInstruction(){
    ctx.fillStyle = "black";
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText("0",200,160);
    ctx.fillText("1", 230, 160);
    ctx.fillText("2", 260, 160);
    ctx.fillText("3", 290, 160);
    ctx.fillText("4", 320, 160);
    ctx.fillText("5", 350, 160);
    ctx.fillText("-1", 170, 160);
    ctx.fillText("-2", 140, 160);
    ctx.fillText("-3", 110, 160);
    ctx.fillText("-4", 80, 160);
    ctx.fillText("-5", 50, 160);
    ctx.fillText("1", 200, 130);
    ctx.fillText("2", 200, 100);
    ctx.fillText("3", 200, 70);
    ctx.fillText("4", 200, 40);
    ctx.fillText("5", 200, 10);
    ctx.fillText("-1", 200, 180);
    ctx.fillText("-2", 200, 210);
    ctx.fillText("-3", 200, 240);
    ctx.fillText("-4", 200, 270);
    ctx.fillText("-5", 200, 300);
    ctx.fillText("x", 390, 170);
    ctx.fillText("y", 180, 10);
}
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
    drawInstruction();
}
function draw(num) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
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
    drawInstruction();
    // for (var i = 0; arrX.length > i; i++){
    //     ctx.beginPath();
    //     ctx.fillStyle = 'red';
    //     ctx.fillRect(arrX[i]*30 + 200, 150 - 30*arrY[i], 5, 5);
    //     ctx.fill();
    //     ctx.closePath();
    // }
}

//При нажатии возникает неверное значение координаты Y
function send() {
    ctx = canvas.getContext('2d');
    canvas.onmousedown = function (ev1) {
        if (document.getElementById("rLink").innerHTML != "") {
            x = ev1.offsetX;
            y = ev1.offsetY;
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
                        ctx.fillStyle = 'white';
                        ctx.fillRect(x, y, 5, 5);
                        ctx.fill();
                        ctx.closePath();
                    }
                }else {
                    ctx.beginPath();
                    ctx.fillStyle = 'black';
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