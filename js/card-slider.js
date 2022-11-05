//#########JAVASCRIPT PRODUTOS##########//

var texto = "-----------Projeto Doce Colher-----------\nCriado por N3rdyDzn (github.com/n3rdydzn) \n        Desenvolvido na escola.\n-----------------------------------------";
console.log(texto);

let section_doces = 0;

function load() {
    //Card1
    card1_img = document.getElementById("cardimg1");
    card1_bt = document.getElementById("cardbt1");
    card1_desc = document.getElementById("carddesc1");
    card1_title = document.getElementById("cardtitle1");
    card1_price = document.getElementById("cardprice1");

    //Card2
    card2_img = document.getElementById("card2_img");
    card2_bt = document.getElementById("card2_bt");
    card2_desc = document.getElementById("card2_desc");
    card2_title = document.getElementById("card2_title");
    card2_price = document.getElementById("card2_price");

    //Card3
    card3_img = document.getElementById("card3_img");
    card3_title = document.getElementById("card3_title");
    card3_desc = document.getElementById("card3_desc");
    card3_price = document.getElementById("card3_price");
    card3_bt = document.getElementById("card3_bt");

    card1_img.src = ("../img/produtos/doces/assopro.webp");
    card1_title.innerText = 'Suspiro';
    card1_price.innerText = 'R$7,00';
    card1_bt.href = "../adicionar.html?id=4";

    card2_img.src = ("../img/produtos/doces/trufa.webp");
    card2_title.innerText = "Trufa";
    card2_price.innerText = "R$6,50";
    card2_bt.href = "../adicionar.html?id=5";

    card3_img.src = ("../img/produtos/doces/brigadeiro.webp");
    card3_title.innerText = "Brigadeiro";
    card3_price.innerText = "R$7,00";
    card3_bt.href = "../adicionar.html?id=6";


}


//---Card SEÇÃO DOCES -----//

function docecard(dir) {

    
    //Card1
    card1_obj = document.getElementById("docecard1");
    card1_img = document.getElementById("cardimg1");
    card1_bt = document.getElementById("cardbt1");
    card1_desc = document.getElementById("carddesc1");
    card1_title = document.getElementById("cardtitle1");
    card1_price = document.getElementById("cardprice1");

    //Card2
    card2_obj = document.getElementById("docecard2");
    card2_img = document.getElementById("card2_img");
    card2_bt = document.getElementById("card2_bt");
    card2_desc = document.getElementById("card2_desc");
    card2_title = document.getElementById("card2_title");
    card2_price = document.getElementById("card2_price");

    //Card3
    card3_obj = document.getElementById("docecard3");
    card3_img = document.getElementById("card3_img");
    card3_title = document.getElementById("card3_title");
    card3_desc = document.getElementById("card3_desc");
    card3_price = document.getElementById("card3_price");
    card3_bt = document.getElementById("card3_bt");




    //esquerda
    if (dir == "1") {
        section_doces -= 1;
        console.log("esquerda");
    }
    //direita
    if (dir == "2") {
        section_doces += 1;
        console.log("direita");
    }

    if (section_doces > 2) {
        section_doces = 0;
    }
    if (section_doces < 0) {
        section_doces = 2;

    }



    switch (section_doces) {
        case 0 && '0' && "0":
            console.log("entrou! 0");
            console.log(card1_img);


            card1_img.src = ("../img/produtos/doces/assopro.webp");
            card1_title.innerText = 'Suspiro';
            card1_price.innerText = 'R$7,00';
            card1_bt.href = "../adicionar.html?id=4";

            card2_img.src = ("../img/produtos/doces/trufa.webp");
            card2_title.innerText = "Trufa";
            card2_price.innerText = "R$6,50";
            card2_bt.href = "../adicionar.html?id=5";

            card3_img.src = ("../img/produtos/doces/brigadeiro.webp");
            card3_title.innerText = "Brigadeiro";
            card3_price.innerText = "R$7,00";
            card3_bt.href = "../adicionar.html?id=6";

            break;


        case 1 || '1' || "1":
            console.log("entrou! 1");
            console.log(card1_img);

            card1_img.src = ("../img/produtos/doces/surpresa.webp");
            card1_title.innerText = 'Surpresa de ninho';
            card1_price.innerText = 'R$7,00';
            card1_bt.href = "../adicionar.html?id=19";

            card2_img.src = ("../img/produtos/doces/casquinha.webp");
            card2_title.innerText = "Casquinha";
            card2_price.innerText = "R$5,00";
            card2_bt.href = "../adicionar.html?id=11";

            card3_img.src = ("../img/produtos/doces/pastelnut.webp");
            card3_title.innerText = "Mini Pastel";
            card3_price.innerText = "R$8,95";
            card3_bt.href = "../adicionar.html?id=8";
            break;

        case 2 || "2" || '2':
            console.log("entrou! 2");
            console.log(card1_img);

            card1_img.src = ("../img/produtos/doces/pastelnut.webp");
            card1_title.innerText = 'Mini Pastel';
            card1_price.innerText = 'R$8,95';
            card1_bt.href = "../adicionar.html?id=8";

            card2_img.src = ("../img/produtos/doces/macarons.webp");
            card2_title.innerText = "Macaron";
            card2_price.innerText = "R$5,00";
            card2_bt.href = "../adicionar.html?id=9";

            card3_img.src = ("../img/produtos/doces/bombom.webp");
            card3_title.innerText = "BomBom";
            card3_price.innerText = "R$7,00";
            card3_bt.href = "../adicionar.html?id=10";
            break;
    }
    console.log("parou");

    

}

//


