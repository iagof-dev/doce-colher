//#########JAVASCRIPT Página INICIAL##########//

var imgobj = document.getElementById('carroselimgid');


imgobj.src = ("./img/Teste.png")

window.addEventListener('load', function () {
    var texto = "-----------Projeto Doce Colher-----------\nCriado por N3rdyDzn (github.com/n3rdydzn) \n        Desenvolvido na escola.\n-----------------------------------------";
    console.log(texto);
    imgobj.style.setProperty('--animate-duration', '0.25s');
    imgobj.addEventListener('animationend', () => {
        console.log("Animação Acabou");
        imgobj.classList.remove('animate__animated','animationend', 'animate__fadeOut', 'animate__fadeIn',);
      });
    imgobj.classList.add('animate__animated', 'animate__bounceIn');
    
    console.log("Animação Iniciou");
    
  })

//---Carrosel de imagens-----//


var i = 0;
var tdelay = 5000;
var mudarfoto = setInterval(carrosel, tdelay);



function carrosel(){
    i++;
    if (i < 1){
        i = 2;
    }
    if(i > 2){
        i = 1;
    }
    
    link = ("./img/Teste" + i + ".png");
    console.log("Debug: " + link);
    imgobj.src = link;



    if (i >= 2){
        i = 0;
    }
    imgobj.classList.remove('animate__animated','animationend')
}


function btclickdrt(){
    clearInterval(mudarfoto);

    imgobj.classList.add('animate__animated', 'animate__fadeOut');
    
    i++;
    if (i < 1){
        i = 2;
    }
    if(i > 2){
        i = 1;
    }

    link = ("./img/Teste" + i + ".png");
    console.log("Debug: " + link);
    imgobj.src = link;
    mudarfoto = setInterval(carrosel, tdelay);
    
}
function btclickesq(){
    clearInterval(mudarfoto);
    imgobj.classList.add('animate__animated', 'animate__fadeOut');
    i--;
    if (i < 1){
        i = 2;
    }
    if(i > 2){
        i = 1;
    }

    link = ("./img/Teste" + i + ".png");
    console.log("Debug: " + link);
    imgobj.src = link;
    mudarfoto = setInterval(carrosel, tdelay);
}

    


//-----------FIM----------//