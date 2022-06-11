
let contadorClickPrato = 0;
let contadorClickBebida = 0;
let contadorClickSobremesa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function mudarButton(){
    const button = document.querySelector('.buton-footer');
    button.classList.remove("buton-footer");
    button.innerHTML = "Fechar pedido";    
}

//seção pratos


function clicarPrato(box, x){
    contadorClickPrato++;

    if(contadorClickPrato === 1 && contadorClickBebida === 1 && contadorClickSobremesa === 1){
        mudarButton();
    }

    const select = document.querySelector('.box-selecionado-prato');
    
    if(select !== null){
        select.classList.remove("box-selecionado-prato");
        contadorClickPrato--;
    }

    box.classList.add("box-selecionado-prato");
    precoPrato = x;

}


function clicarBebida(box){
    contadorClickBebida++;

    if(contadorClickPrato === 1 && contadorClickBebida === 1 && contadorClickSobremesa === 1){
        mudarButton();
    }

    const select = document.querySelector('.box-selecionado-bebida');
    
    if(select !== null){
        select.classList.remove("box-selecionado-bebida");
        contadorClickBebida--;
    }

    box.classList.add("box-selecionado-bebida");
    precoBebida = x;

}

function clicarSobremesa(box){
    contadorClickSobremesa++;
    
    if(contadorClickPrato === 1 && contadorClickBebida === 1 && contadorClickSobremesa === 1){
        mudarButton();
    }

    const select = document.querySelector('.box-selecionado-sobremesa');
    
    if(select !== null){
        select.classList.remove("box-selecionado-sobremesa");
        contadorClickSobremesa--;
    }

    box.classList.add("box-selecionado-sobremesa");
    
    precoSobremesa = x;

}


function clicarBotaoEnviar(){
    
}
