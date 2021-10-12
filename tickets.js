
function calcular(){ 
    let categoria = document.getElementById("categoria").value;
    console.log(categoria);
    let descuento;

    if (categoria=="junior" ){
        descuento = 0.15;
    }
    if (categoria=="trainee" ){
        descuento = 0.50;
    }
    if (categoria=="estudiante" ){
        descuento = 0.80;
    }
    let cantidad = document.getElementById('cantidad');
    let precio = 200;      
    let total = parseInt(cantidad.value) * precio ;
    let resultado = document.getElementById('resultado');
    
        resultado.innerHTML =  'Total a pagar:  ' + (total - (total * descuento)) +'$';   
       
        console.log(resultado);
}

function limpiar(){
    let resultado = document.getElementById('resultado');
     resultado.innerHTML = 'Total a pagar:  ' + 0 +'$';  
}


const boton = document.getElementById('boton');
boton.addEventListener('click',calcular);

const btnres = document.getElementById('reset')
btnres.addEventListener('click',limpiar)
