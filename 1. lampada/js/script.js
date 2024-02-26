// DOM


const lamp = document.querySelector('#lampada')
const btnOn = document.querySelector('#on')
const btnOff = document.querySelector('#off')


// EVENTS AND FUNCTION


btnOn.addEventListener('click', function lampOn(){

    lamp.src = "img/acesa.gif"
    
})

btnOff.addEventListener('click', function lampOff(){
    
    lamp.src = "img/apagada.gif"
    
})

lamp.addEventListener('dblclick', function breakLamp() {
    
    lamp.src = "img/quebrada.jpg"
    
})

