
function mudarButton(){
    const button = document.querySelector('.buton-footer');
    button.classList.remove("buton-footer");
    button.innerHTML = "Fechar pedido";
    
}

function clicarPrato1(){
    const mudarBox = document.querySelector('.prato1');
    mudarBox.classList.add("box-selecionado");
}

function clicarPrato2(){
    const mudarBox = document.querySelector('.prato2');
    mudarBox.classList.add("box-selecionado");
}

function clicarPrato3(){
    const mudarBox = document.querySelector('.prato3');
    mudarBox.classList.add("box-selecionado");
}

function clicarPrato4(){
    const mudarBox = document.querySelector('.prato4');
    mudarBox.classList.add("box-selecionado");
}

function clicarPrato5(){
    const mudarBox = document.querySelector('.prato5');
    mudarBox.classList.add("box-selecionado");
}