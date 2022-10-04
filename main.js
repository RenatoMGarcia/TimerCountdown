const inicio = document.getElementById('inicio');
const reset = document.getElementById('reset');
const pausar = document.getElementById('pause')

let h = document.getElementById('horas');
let m = document.getElementById('minutos');
let s = document.getElementById('seg');

//Armazenando uma referencia para a variavel
let startTimer = null;
let rodando = false;

inicio.addEventListener('click', async function(){
    function startInterval(){
        rodando = true;
        startTimer = setInterval(function() {
          timer();
        }, 1000);
        
        
    }

    if(rodando === false) {
      let terminou = await startInterval();
      if(terminou){
        rodando = false;
      }
      console.log("Estou aqui")
    } 
    return;
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    
    stopInterval()

    rodando = false;
})

pausar.addEventListener('click', function() {
    stopInterval();
    rodando = false;
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        rodando = false;
        stopInterval();
    
    } else if(s.value != 0){
        s.value--;
        
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
        
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
        
    }

    
    
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}