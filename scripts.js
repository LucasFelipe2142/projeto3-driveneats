let contadorClickPrato = 0;
let contadorClickBebida = 0;
let contadorClickSobremesa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function mudarButton() {
  const button = document.querySelector(".buton-footer-verde");
  const buttonGrey = document.querySelector(".buton-footer");
  button.classList.remove("apagado");
  buttonGrey.classList.add("apagado");
}

function clicarBotaoEnviar() {
  let preco = precoBebida + precoPrato + precoSobremesa;
  let mensagem =
    "Olá, gostaria de fazer o pedido: \n\
    - Prato: Frango Yin Yang \n\
    - Bebida: Coquinha Gelada \n\
    - Sobremesa: Pudim \n\
    Total: R$ " +
    preco;
  link = "https://wa.me/?text=" + encodeURIComponent(mensagem);
  window.open(link);
}
//seção pratos

function clicarPrato(box, x) {
  precoPrato = x;
  contadorClickPrato++;

  if (
    contadorClickPrato === 1 &&
    contadorClickBebida === 1 &&
    contadorClickSobremesa === 1
  ) {
    mudarButton();
  }

  const select = document.querySelector(".box-selecionado-prato");

  if (select !== null) {
    select.classList.remove("box-selecionado-prato");
    contadorClickPrato--;
  }

  box.classList.add("box-selecionado-prato");
  icon.classList.add("selecionado");
}

function clicarBebida(box, x) {
  precoBebida = x;
  contadorClickBebida++;

  if (
    contadorClickPrato === 1 &&
    contadorClickBebida === 1 &&
    contadorClickSobremesa === 1
  ) {
    mudarButton();
  }

  const select = document.querySelector(".box-selecionado-bebida");

  if (select !== null) {
    select.classList.remove("box-selecionado-bebida");
    contadorClickBebida--;
  }

  box.classList.add("box-selecionado-bebida");
}

function clicarSobremesa(box, x) {
  precoSobremesa = x;
  contadorClickSobremesa++;

  if (
    contadorClickPrato === 1 &&
    contadorClickBebida === 1 &&
    contadorClickSobremesa === 1
  ) {
    mudarButton();
  }

  const select = document.querySelector(".box-selecionado-sobremesa");

  if (select !== null) {
    select.classList.remove("box-selecionado-sobremesa");
    contadorClickSobremesa--;
  }

  box.classList.add("box-selecionado-sobremesa");
}
