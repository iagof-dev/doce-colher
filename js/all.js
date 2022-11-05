const imagemobj = document.getElementById("img");
const tituloobj = document.getElementById("title");
const preco = document.getElementById('price');

document.addEventListener('DOMContentLoaded', function carregar() {

    var test = getQueryVariable("id");
    console.log(test);
    switch (test) {
        case '0':
            imagemobj.src = "../img/produtos/Bolos/bolovulcão.webp";
            tituloobj.innerText = "Bolo Vulcão";
            preco.innerText = "R$22,95";
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
            break;
        case '13':
            imagemobj.src = "../img/produtos/cafezes/mocha.webp";
            tituloobj.innerText = "Mocha";
            preco.innerText = "R$15,00";
            break;
        case '14':
            imagemobj.src = "../img/produtos/cafezes/capuccino.webp";
            tituloobj.innerText = "Cappuccino";
            preco.innerText = "R$13,00";
            break;
        case '15':
            imagemobj.src = "../img/produtos/cafezes/cha.webp";
            tituloobj.innerText = "chá";
            preco.innerText = "R$7,20";
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
