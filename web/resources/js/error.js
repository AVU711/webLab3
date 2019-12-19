function checkXorR() {
    var x = document.getElementById("This:x").innerHTML;
    var y = document.getElementById("This:r").innerHTML;
    var p = document.getElementById("Error");
    if ((x == -5 || x == -4 || x == -3 || x == -2 || x == -1 || x == 0 || x == 1 || x == 2 || x == 3 ) && (y == 1 || y == 2 || y == 3 || y == 4 || y == 5) ){
        p.innerHTML = "";
    }else{
        p.style.color = "red";
        p.innerHTML = "Вы забыли про координату X и/или параметр R";
    }
}