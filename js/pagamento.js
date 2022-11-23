

function verificar(){
    var numerocel = document.getElementById('int_number');

var numerocasa = document.getElementById('int_num');

var bairro = document.getElementById('int_bairro');

var endereco = document.getElementById('txt_address');

var nome = document.getElementById('txt_nome');

    if(nome.value == "" || endereco.value == "" || bairro.value == "" || endereco.value == "" || numerocasa.value == "" || numerocel.value == ""){
        alert('Erro! Preencha todos os campos...')
    }
    else{
        window.location = "./confirmado.html"
    }
}