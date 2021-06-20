const vida_cavaleiros = {
    "Seya": 60,
    "Shiryu": 61,
    "Hyoga": 58,
    "Shun": 59,
    "Ikki": 64,
};

const poderes = {
    "Pégasus": 38,
    "Dragão": 43,
    "Cisne": 36,
    "Andrômeda": 35,
    "Fênix": 42,
};

let cavaleiros_select;
let poderes_select;

function start() {
    const elementos = document.getElementsByClassName("elemento");
    for (const elemento of elementos) {
        elemento.addEventListener("click", marcarElementoSelecionado);
    }
    document.getElementById("calcular").addEventListener("click", calcularDano);
}

function marcarElementoSelecionado(evento) {//esse evento que a função recebe é o click do add.EventListener
    const elementoSelecionado = evento.target.parentElement;//meu alvo aqui é o elemento pai 
    if (!elementoSelecionado.classList.contains("elemento")) {//se não contém elemento na classlist elemento selecionado, ou seja, se essa classlist estiver vazia, retorna vazio.
        return;//retorna vazio
    }
    const idElementoSelecionado = elementoSelecionado.getAttribute("id");

    if (elementoSelecionado.classList.contains("personagem")) {//se algum personagem estiver selecionado
        cavaleiros_select = idElementoSelecionado;//adicione o ID do personagem selecionado na variável cavaleiros_select
        limparElementosSelecionados("personagem");//e limpo o personagem da função citada
    }else {//se não
        poderes_select = idElementoSelecionado;//variável recebe Id da arma selecionada
        limparElementosSelecionados("arma");//e limpa a arma da função citada
    }

    elementoSelecionado.classList.add("selecionado");
}

function calcularDano() {
    if (!cavaleiros_select || !poderes_select) {
        alert("Selecione um personagem e uma arma para calcular o dano");
        return;
    }

    const danoFixo = dadosRand();
    const danoArma = poderes[poderes_select];
    const danoTotal = danoFixo + danoArma;
    const vidaCavaleiros = vida_cavaleiros[cavaleiros_select];

    let resultado = "Dano " + danoTotal + ".";

    if (danoTotal >= vidaCavaleiros) {
        resultado += " Parabéns! Você derrotou o " + cavaleiros_select + " com o ataque " + poderes_select +"!";
    }else{
        resultado += " Ops... você não derrotou o " + cavaleiros_select + ". Tente novamente!";
    }

    document.getElementById("dano").innerHTML = resultado;
}

function limparElementosSelecionados(tipo) {
    const elementos = document.getElementsByClassName("elemento");

    for (const elemento of elementos) {
        if (elemento.classList.contains(tipo)) {
            elemento.classList.remove("selecionado");
        }
    }
}

function dadosRand() {
     const min = Math.ceil(5);
     const max = Math.floor(30);

     return Math.floor(Math.random() * (max - min + 1)) + min;
}

