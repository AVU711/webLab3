
var N = '';
flagCom = 0;//Флаг для валидации одна запятая
flagMinus = 0; //Флаг для валидации один знак минуса
Arrow = -1;



function Check(key) {
        if (flagCom == 1) {
            flagCom++;
        }

        if ((N.length == 0 && key == '-') || (key >= '0' && key <= '9') || (key == ',' && flagCom == 0 && N != '-')) {
            N += key;
            flagMinus = 0;
            if (flagCom == 0) {
                Arrow++;
            }
            if (key == ',') {
                flagCom++;
            }
        } else if (key == 'Backspace') {
            N = N.substr(0, N.length - 1);
            if (N.length < Arrow) {
                flagCom = 0;
            }
        } else if ((N.length != 0) && (key = '-')) {
            flagMinus++;
        }


    return ((key == ',' && flagCom == 1 && N != '-' ) || (N.length == 1 && key == '-'  && flagMinus == 0) || (key >= '0' && key <= '9') || (key == 'Delete') || (key == 'Backspace'));
}

var flag = 0;
flagR = 0;

function showX(button) {
    var x = document.getElementById("coordinatex");
    var p = document.createElement("p");
    p.innerHTML = button.value;
    p.id = "xCoordinate";
    p.name= "X";
    if (flag == 0){
        flag += 1;
        x.appendChild(p);
    }else{
        var elem = document.getElementById("xCoordinate");
        x.removeChild(elem);
        var p = document.createElement("p");
        p.innerHTML = button.value;
        p.id = "xCoordinate";
        p.name = "X";
        x.appendChild(p);
    }

}

function showR(button) {
    var r = document.getElementById("parametrR");
    var p = document.createElement("p");
    p.innerHTML = button.value;
    p.id = "Rparametr";
    p.name = "R";
    if (flagR == 0) {
        flagR += 1;
        r.appendChild(p);
    } else {
        var elem = document.getElementById("Rparametr");
        r.removeChild(elem);
        var p = document.createElement("p");
        p.innerHTML = button.value;
        p.id = "Rparametr";
        p.name = "R";
        r.appendChild(p);
    }
}

function showY() {

    var y = document.getElementById("Y");
    y.innerHTML = N;
}