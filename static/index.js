var vidaPerson = null
var poderArma = null

function start(){
    const armaSelecionada = document.getElementsByClassName("cardPoderes");
        for(const arma of armaSelecionada){
        arma.addEventListener("click", function(){
            poderArma = this.getAttribute("data-poder");
            if(!this.classList.contains("ArmaSelect")){
                this.classList.add("ArmaSelect");
            }else{
                limparCavaleiroSelect("ArmaSelect");
        }
    })
}

    
    const persoSelecionado = document.getElementsByClassName("cardCavaleiros");
    for (const personagem of persoSelecionado){
        personagem.addEventListener("click", function(){
            vidaPerson = this.getAttribute("data-vida");
            if(!this.classList.contains("CavSelect")){
                this.classList.add("CavSelect");
            }else{
                limparCavaleiroSelect("CavSelect");
            }
        })
    }

    document.getElementById("calcular").addEventListener("click", calcularDano);
}

function limparArmaSelect(tipo){
    const armaSelecionada = document.getElementsByClassName("cardPoderes");
    for (const arma of armaSelecionada){
        if(arma.classList.contains(tipo)){
            arma.classList.remove("ArmaSelect");
        }
    }   
}

function limparCavaleiroSelect(tipo){
    const persoSelecionado = document.getElementsByClassName("CardCavaleiros");
    for (const personagem of persoSelecionado){
        if(personagem.classList.contains(tipo)){
            personagem.classList.remove("CavSelect");
        }
    }
}

function calcularDano(){
    if (!vidaPerson || !poderArma) {
        alert("Selecione um personagem e uma arma para calcular o dano");
        return;
    }
    const min = Math.ceil(24);
    const max = Math.floor(37);
    const danoAleatorio = Math.floor(Math.random() * (max - min + 11)) + min;
    const danoTotal = danoAleatorio + (vidaPerson - poderArma);
    let resultado = "Dano " + danoTotal + ".";
    if(danoTotal < vidaPerson){
        resultado += " Que pena... você não derrotou o cavaleiro. Tente novamente."
    }else{
        resultado += " Este ataque foi fatal! Você derrotou o cavaleiro."
    }
    document.getElementById("dano").innerText = resultado
}
