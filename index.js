const hexCor = ["green","black","blue","red","purple","white","yellow"];


function mudarCor() {
    document.querySelector("h1").textContent = "Cor: "
    cor = hexCor[Math.floor(Math.random() * hexCor.length)]
    document.querySelector("body").style.backgroundColor =  cor;
    document.querySelector('h1').textContent += cor;
}

