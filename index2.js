const hexCor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


function mudarCor() {
    document.querySelector("h1").textContent = "Cor: "
    var cor = "#";
    for(i = 0; i < 6; i++) {
        cor += hexCor[Math.floor(Math.random() * hexCor.length)]
    }
    document.querySelector("body").style.backgroundColor =  cor;
    document.querySelector('h1').textContent += cor;
}

