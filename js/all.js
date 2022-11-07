const imagemobj = document.getElementById("img");
const tituloobj = document.getElementById("title");


const preco = document.getElementById('price');
const radio1 = document.getElementById('op1');
const radio2 = document.getElementById('op2');
const radio3 = document.getElementById('op3');
const radio4 = document.getElementById('op4');

const radio1txt = document.getElementById('op1txt');
const radio2txt = document.getElementById('op2txt');
const radio3txt = document.getElementById('op3txt');
const radio4txt = document.getElementById('op4txt');


document.addEventListener('DOMContentLoaded', function carregar() {

    var test = getQueryVariable("id");
    console.log(test);
    switch (test) {
        case '0':
            imagemobj.src = "../img/produtos/Bolos/bolovulcão.webp";
            tituloobj.innerText = "Bolo Vulcão";
            preco.innerText = "R$22,95";
            radio1txt.innerText = "Nutella";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Ninho";
            radio2.style.display = "flex";

            radio3txt.innerText = "Brigadeiro";
            radio3.style.display = "flex";

            radio4txt.innerText = "Morango";
            radio4.style.display = "flex";

            break;
        case '1':
            imagemobj.src = "../img/produtos/Bolos/bolo.webp";
            tituloobj.innerText = "Bolo sobre encomenda";
            preco.innerText = "R$50,00";
            break;
        case '2':
            imagemobj.src = "../img/produtos/doces/copodafelicidade.webp";
            tituloobj.innerText = "Copo da Felicidade";
            preco.innerText = "R$20,00";
            break;
        case '3':
            imagemobj.src = "../img/produtos/doces/brownie.webp";
            tituloobj.innerText = "Brownie";
            preco.innerText = "R$15,00";
            break;
        case '4':
            imagemobj.src = "../img/produtos/doces/assopro.webp";
            tituloobj.innerText = "Suspiro";
            preco.innerText = "R$7,00";
            break;
        case '5':
            imagemobj.src = "../img/produtos/doces/trufa.webp";
            tituloobj.innerText = "Trufa";
            preco.innerText = "R$6,50";
            break;
        case '6':
            imagemobj.src = "../img/produtos/doces/brigadeiro.webp";
            tituloobj.innerText = "Brigadeiro";
            preco.innerText = "R$7,00";
            break;
        case '7':
            imagemobj.src = "../img/produtos/doces/paodemel.webp";
            tituloobj.innerText = "Pão de Mel";
            preco.innerText = "R$6,00";
            break;
        case '8':
            imagemobj.src = "../img/produtos/doces/pastelnut.webp";
            tituloobj.innerText = "Mini Pastel";
            preco.innerText = "R$8,95";
            break;
        case '9':
            imagemobj.src = "../img/produtos/doces/macarons.webp";
            tituloobj.innerText = "Macaron";
            preco.innerText = "R$5,00";
            break;
        case '10':
            imagemobj.src = "../img/produtos/doces/bombom.webp";
            tituloobj.innerText = "Bombom";
            preco.innerText = "R$7,00";
            break;
        case '11':
            imagemobj.src = "../img/produtos/doces/casquinha.webp";
            tituloobj.innerText = "Casquinha";
            preco.innerText = "R$5,00";
            break;
        case '12':
            imagemobj.src = "../img/produtos/cafezes/cafe.webp";
            tituloobj.innerText = "Café";
            preco.innerText = "R$9,50";
            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";
            break;
        case '13':
            imagemobj.src = "../img/produtos/cafezes/mocha.webp";
            tituloobj.innerText = "Mocha";
            preco.innerText = "R$15,00";
            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";
            break;
        case '14':
            imagemobj.src = "../img/produtos/cafezes/capuccino.webp";
            tituloobj.innerText = "Cappuccino";
            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";
            preco.innerText = "R$13,00";
            break;
        case '15':
            imagemobj.src = "../img/produtos/cafezes/cha.webp";
            tituloobj.innerText = "chá";
            preco.innerText = "R$7,20";

            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            radio1.checked = true;
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";

            break;
        case '16':
            imagemobj.src = "../img/produtos/bebidas/agua.webp";
            tituloobj.innerText = "Água";
            preco.innerText = "R$2,00";
            break;
        case '17':
            imagemobj.src = "../img/produtos/bebidas/suco.webp";
            tituloobj.innerText = "Suco Natural";
            preco.innerText = "R$7,00";
            break;

        case '18':
            imagemobj.src = "../img/produtos/bebidas/refrigerante.webp";
            tituloobj.innerText = "Refrigerante";
            preco.innerText = "R$5,00";
            break;
        case '19':
            imagemobj.src = "../img/produtos/doces/surpresa.webp";
            tituloobj.innerText = "Surpresa de Ninho";
            preco.innerText = "R$7,00";
            break;
        case '20':
            imagemobj.src = "../img/produtos/cafezes/frappuccino.webp";
            tituloobj.innerText = "Frappuccino";
            preco.innerText = "R$12,00";

            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";
            
            break;
        case '21':
            imagemobj.src = "../img/produtos/cafezes/MACCHIATO.webp";
            tituloobj.innerText = "Macchiato";
            preco.innerText = "R$10,00";

            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";

            break;
        case '22':
            imagemobj.src = "../img/produtos/cafezes/leite.webp";
            tituloobj.innerText = "Café Au Lait";
            preco.innerText = "R$15,00";

            radio1txt.innerText = "Com Açúcar";
            radio1.style.display = "flex";
            
            radio2txt.innerText = "Sem Açúcar";
            radio2.style.display = "flex";
            break;
    }
});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
