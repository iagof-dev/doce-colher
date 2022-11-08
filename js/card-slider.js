//#########JAVASCRIPT PRODUTOS##########//

var texto = "-----------Projeto Doce Colher-----------\nCriado por N3rdyDzn (github.com/n3rdydzn) \n        Desenvolvido na escola.\n-----------------------------------------";
console.log(texto);

let section_doces = 0;
let section_massas = 0;
let section_cafes = 0;

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


    card4_obj = document.getElementById("massacard1");
    card4_img = document.getElementById("massacardimg1");
    card4_bt = document.getElementById("massacardbt1");
    card4_desc = document.getElementById("massacarddesc1");
    card4_title = document.getElementById("massacardtitle1");
    card4_price = document.getElementById("massacardprice1");

    card5_obj = document.getElementById("massacard2");
    card5_img = document.getElementById("massacard2_img");
    card5_bt = document.getElementById("massacard2_bt");
    card5_desc = document.getElementById("massacard2_desc");
    card5_title = document.getElementById("massacard2_title");
    card5_price = document.getElementById("massacard2_price");

    card6_obj = document.getElementById("massacard3");
    card6_img = document.getElementById("massacard3_img");
    card6_title = document.getElementById("massacard3_title");
    card6_desc = document.getElementById("massacard3_desc");
    card6_price = document.getElementById("massacard3_price");
    card6_bt = document.getElementById("massacard3_bt");

    card7_obj = document.getElementById("cafecard1obj");
    card7_img = document.getElementById("cafecard1img");
    card7_bt = document.getElementById("cafecard1bt");
    card7_desc = document.getElementById("cafecard1desc");
    card7_title = document.getElementById("cafecard1tit");
    card7_price = document.getElementById("cafecard1price");

    card8_obj = document.getElementById("cafecard2obj");
    card8_img = document.getElementById("cafecard2img");
    card8_bt = document.getElementById("cafecard2bt");
    card8_desc = document.getElementById("cafecard2desc");
    card8_title = document.getElementById("cafecard2tit");
    card8_price = document.getElementById("cafecard2price");

    card9_obj = document.getElementById("cafecard3obj");
    card9_img = document.getElementById("cafecard3img");
    card9_title = document.getElementById("cafecard3tit");
    card9_desc = document.getElementById("cafecard3desc");
    card9_price = document.getElementById("cafecard3price");
    card9_bt = document.getElementById("cafecard3bt");




    card1_img.src = ("./img/produtos/doces/assopro.webp");
    card1_title.innerText = 'Suspiro';
    card1_price.innerText = 'R$7,00';
    card1_bt.href = "./adicionar.html?id=4";
    card2_img.src = ("./img/produtos/doces/trufa.webp");
    card2_title.innerText = "Trufa";
    card2_price.innerText = "R$6,50";
    card2_bt.href = "./adicionar.html?id=5";
    card3_img.src = ("./img/produtos/doces/brigadeiro.webp");
    card3_title.innerText = "Brigadeiro";
    card3_price.innerText = "R$7,00";
    card3_bt.href = "./adicionar.html?id=6";


    card4_img.src = ("../img/produtos/Bolos/bolovulcão.webp");
    card4_title.innerText = 'Bolo Vulcão';
    card4_price.innerText = 'R$22,95';
    card4_bt.href = "../adicionar.html?id=0";
    card5_img.src = ("../img/produtos/Bolos/bolo.webp");
    card5_title.innerText = "Bolo sobre encomenda";
    card5_price.innerText = "R$50,50";
    card5_bt.href = "../adicionar.html?id=1";
    card6_img.src = ("../img/produtos/doces/brownie.webp");
    card6_title.innerText = "Brownie";
    card6_price.innerText = "R$15,00";
    card6_bt.href = "../adicionar.html?id=3";


    card7_img.src = ("../img/produtos/cafezes/cafe.webp");
    card7_title.innerText = 'Expresso';
    card7_price.innerText = 'R$9,50';
    card7_bt.href = "../adicionar.html?id=12";

    card8_img.src = ("../img/produtos/cafezes/mocha.webp");
    card8_title.innerText = "Mocha";
    card8_price.innerText = "R$15,00";
    card8_bt.href = "../adicionar.html?id=13";

    card9_img.src = ("../img/produtos/cafezes/capuccino.webp");
    card9_title.innerText = "Capuccino";
    card9_price.innerText = "R$13,00";
    card9_bt.href = "../adicionar.html?id=14";



}

//---Card SEÇÃO DOCES -----//
function docecard(dir) {
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



//---Card SEÇÃO MASSAS -----//
function massacard(dir) {




    card4_obj = document.getElementById("massacard1");
    card4_img = document.getElementById("massacardimg1");
    card4_bt = document.getElementById("massacardbt1");
    card4_desc = document.getElementById("massacarddesc1");
    card4_title = document.getElementById("massacardtitle1");
    card4_price = document.getElementById("massacardprice1");
    card5_obj = document.getElementById("massacard2");
    card5_img = document.getElementById("massacard2_img");
    card5_bt = document.getElementById("massacard2_bt");
    card5_desc = document.getElementById("massacard2_desc");
    card5_title = document.getElementById("massacard2_title");
    card5_price = document.getElementById("massacard2_price");
    card6_obj = document.getElementById("massacard3");
    card6_img = document.getElementById("massacard3_img");
    card6_title = document.getElementById("massacard3_title");
    card6_desc = document.getElementById("massacard3_desc");
    card6_price = document.getElementById("massacard3_price");
    card6_bt = document.getElementById("massacard3_bt");




    //esquerda
    if (dir == "1") {
        section_massas -= 1;
        console.log("esquerda");
    }
    //direita
    if (dir == "2") {
        section_massas += 1;
        console.log("direita");
    }

    if (section_massas > 1) {
        section_massas = 0;
    }
    if (section_massas < 0) {
        section_massas = 1;

    }



    switch (section_massas) {
        case 0 && '0' && "0":
            console.log("entrou! 0");
            card4_img.src = ("../img/produtos/Bolos/bolovulcão.webp");
            card4_title.innerText = 'Bolo Vulcão';
            card4_price.innerText = 'R$22,95';
            card4_bt.href = "../adicionar.html?id=0";

            card5_img.src = ("../img/produtos/Bolos/bolo.webp");
            card5_title.innerText = "Bolo sobre encomenda";
            card5_price.innerText = "R$50,50";
            card5_bt.href = "../adicionar.html?id=1";

            card6_img.src = ("../img/produtos/doces/brownie.webp");
            card6_title.innerText = "Brownie";
            card6_price.innerText = "R$15,00";
            card6_bt.href = "../adicionar.html?id=3";


            break;


        case 1 || '1' || "1":
            console.log("entrou! 1");
            card4_img.src = ("../img/produtos/doces/brownie.webp");
            card4_title.innerText = "Brownie";
            card4_price.innerText = "R$15,00";
            card4_bt.href = "../adicionar.html?id=3";

            card5_img.src = ("../img/produtos/doces/copodafelicidade.webp");
            card5_title.innerText = "Copo da Felicidade";
            card5_price.innerText = "R$20,00";
            card5_bt.href = "../adicionar.html?id=2";

            card6_img.src = ("../img/produtos/doces/paodemel.webp");
            card6_title.innerText = "Pão de mel";
            card6_price.innerText = "R$6,00";
            card6_bt.href = "../adicionar.html?id=7";

            break;

    }
    console.log("parou");
}




//---Card SEÇÃO CAFE -----//
function cafecard(dir) {




    card7_obj = document.getElementById("cafecard1obj");
    card7_img = document.getElementById("cafecard1img");
    card7_bt = document.getElementById("cafecard1bt");
    card7_desc = document.getElementById("cafecard1desc");
    card7_title = document.getElementById("cafecard1tit");
    card7_price = document.getElementById("cafecard1price");

    card8_obj = document.getElementById("cafecard2obj");
    card8_img = document.getElementById("cafecard2img");
    card8_bt = document.getElementById("cafecard2bt");
    card8_desc = document.getElementById("cafecard2desc");
    card8_title = document.getElementById("cafecard2tit");
    card8_price = document.getElementById("cafecard2price");

    card9_obj = document.getElementById("cafecard3obj");
    card9_img = document.getElementById("cafecard3img");
    card9_title = document.getElementById("cafecard3tit");
    card9_desc = document.getElementById("cafecard3desc");
    card9_price = document.getElementById("cafecard3price");
    card9_bt = document.getElementById("cafecard3bt");


    //esquerda
    if (dir == "1") {
        section_cafes -= 1;
        console.log("esquerda");
    }
    //direita
    if (dir == "2") {
        section_cafes += 1;
        console.log("direita");
    }

    if (section_cafes > 1) {
        section_cafes = 0;
    }
    if (section_cafes < 0) {
        section_cafes = 1;

    }


    switch (section_cafes) {
        case 0 && '0' && "0":
            console.log("entrou! 0");
            card7_img.src = ("../img/produtos/cafezes/cafe.webp");
            card7_title.innerText = 'Expresso';
            card7_price.innerText = 'R$9,50';
            card7_bt.href = "../adicionar.html?id=12";

            card8_img.src = ("../img/produtos/cafezes/mocha.webp");
            card8_title.innerText = "Mocha";
            card8_price.innerText = "R$15,00";
            card8_bt.href = "../adicionar.html?id=13";

            card9_img.src = ("../img/produtos/cafezes/capuccino.webp");
            card9_title.innerText = "Capuccino";
            card9_price.innerText = "R$13,00";
            card9_bt.href = "../adicionar.html?id=14";


            break;


        case 1 || '1' || "1":
            console.log("entrou! 1");
            card7_img.src = ("../img/produtos/cafezes/frappuccino.webp");
            card7_title.innerText = 'Frappuccino';
            card7_price.innerText = 'R$12,00';
            card7_bt.href = "../adicionar.html?id=20";

            card8_img.src = ("../img/produtos/cafezes/MACCHIATO.webp");
            card8_title.innerText = "Macchiato";
            card8_price.innerText = "R$10,00";
            card8_bt.href = "../adicionar.html?id=21";

            card9_img.src = ("../img/produtos/cafezes/leite.webp");
            card9_title.innerText = "Café Au Lait";
            card9_price.innerText = "R$15,00";
            card9_bt.href = "../adicionar.html?id=22";
            break;

    }
    console.log("parou");
}
//


