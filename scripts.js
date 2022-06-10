
let contadorClickPrato = 0;
let contadorClickBebida = 0;
let contadorClickSobremesa = 0;

function mudarButton(){
    const button = document.querySelector('.buton-footer');
    button.classList.remove("buton-footer");
    button.innerHTML = "Fechar pedido";    
}

//sção pratos

function clicarPrato1(){

        
  
        const mudarBox = document.querySelector('.prato1');
        mudarBox.classList.add("box-selecionado");
   
        const removeBox2 = document.querySelector('.prato2');
        removeBox2.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.prato3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.prato4');
        removeBox4.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.prato5');
        removeBox5.classList.remove("box-selecionado");

        contadorClickPrato++;
         

    if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
        mudarButton();
    }
}

function clicarPrato2(){
    
        const mudarBox = document.querySelector('.prato2');
        mudarBox.classList.add("box-selecionado");

        const removeBox1 = document.querySelector('.prato1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.prato3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.prato4');
        removeBox4.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.prato5');
        removeBox5.classList.remove("box-selecionado");

        contadorClickPrato++;
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarPrato3(){
        const mudarBox = document.querySelector('.prato3');
        mudarBox.classList.add("box-selecionado");
        
        const removeBox1 = document.querySelector('.prato1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.prato2');
        removeBox2.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.prato4');
        removeBox4.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.prato5');
        removeBox5.classList.remove("box-selecionado");

        contadorClickPrato++;
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarPrato4(){
        const mudarBox = document.querySelector('.prato4');
        mudarBox.classList.add("box-selecionado");
           
        const removeBox1 = document.querySelector('.prato1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.prato2');
        removeBox2.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.prato3');
        removeBox3.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.prato5');
        removeBox5.classList.remove("box-selecionado");

        contadorClickPrato++;
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarPrato5(){
        const mudarBox = document.querySelector('.prato5');
        mudarBox.classList.add("box-selecionado");
        contadorClickPrato++;

        const removeBox1 = document.querySelector('.prato1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.prato2');
        removeBox2.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.prato3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.prato4');
        removeBox4.classList.remove("box-selecionado");

        contadorClickPrato++;
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

//seção bebidas

function clicarBebida1(){

        const mudarBox = document.querySelector('.bebida1');
        mudarBox.classList.add("box-selecionado");
        contadorClickBebida++;


        const removeBox5 = document.querySelector('.bebida5');
        removeBox5.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.bebida2');
        removeBox2.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.bebida3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.bebida4');
        removeBox4.classList.remove("box-selecionado");

         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarBebida2(){
        const mudarBox = document.querySelector('.bebida2');
        mudarBox.classList.add("box-selecionado");
        contadorClickBebida++;

        const removeBox1 = document.querySelector('.bebida1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.bebida3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.bebida4');
        removeBox4.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.bebida5');
        removeBox5.classList.remove("box-selecionado");


         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarBebida3(){
        const mudarBox = document.querySelector('.bebida3');
        mudarBox.classList.add("box-selecionado");
        contadorClickBebida++;

        const removeBox1 = document.querySelector('.bebida1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.bebida2');
        removeBox2.classList.remove("box-selecionado");
        
        const removeBox4 = document.querySelector('.bebida4');
        removeBox4.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.bebida5');
        removeBox5.classList.remove("box-selecionado");

 
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarBebida4(){
        const mudarBox = document.querySelector('.bebida4');
        mudarBox.classList.add("box-selecionado");
        contadorClickBebida++;

        const removeBox1 = document.querySelector('.bebida1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.bebida3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.bebida2');
        removeBox2.classList.remove("box-selecionado");

        const removeBox5 = document.querySelector('.bebida5');
        removeBox5.classList.remove("box-selecionado");

  
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}

function clicarBebida5(){
        const mudarBox = document.querySelector('.bebida5');
        mudarBox.classList.add("box-selecionado");
        contadorClickBebida++;

        const removeBox1 = document.querySelector('.bebida1');
        removeBox1.classList.remove("box-selecionado");
        
        const removeBox3 = document.querySelector('.bebida3');
        removeBox3.classList.remove("box-selecionado");
        
        const removeBox2 = document.querySelector('.bebida2');
        removeBox2.classList.remove("box-selecionado");

        const removeBox4 = document.querySelector('.bebida4');
        removeBox4.classList.remove("box-selecionado");

  
         

        if(contadorClickPrato > 0 && contadorClickBebida > 0 && contadorClickSobremesa >0){
            mudarButton();
        }
}