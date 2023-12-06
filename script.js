let num1 ='';
let num2 =''; 
let operacion = 'null';

const pantalla = document.getElementById('screen');
const botonesNumericos = document.querySelectorAll('.buttonCalculator');
const botonesOperaciones = document.querySelectorAll('.buttonCalculatorOperation');
const botonIgual = document.getElementById('buttonCalculatorEqual');
const botonDEL = document.getElementById('DEL');
const botonAC = document.getElementById('AC');
const botonPunto = document.getElementById('punto');




function suma(a,b){
return a+b;
}

function resta(a,b){
return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    if(b === 0){
        alert('No puedes dividir por cero');
        return 0;
    } 
    return a/b;
}

function calcularResultado(operacion, num1, num2)
{
    switch(operacion){
        case '+':
            return suma(num1,num2);
        case '-':
           return  resta(num1,num2);
        case 'x':
            return multiplicacion(num1,num2);
        case '÷':
          return  division(num1,num2);
         default:
            console.log('error interno');
            break;
    }
}

function ingresarNumero(numero)
{
    if(pantalla.textContent === '0')
    {
        pantalla.textContent = '';
        pantalla.textContent += numero; 
    }else
    {
        pantalla.textContent += numero;
    }
}

function ingresarOperador(operador)
{
    if(pantalla.textContent != '0' && operacion === 'null')
    {
        num1 = pantalla.textContent;
        operacion = operador;
        pantalla.textContent += operacion;
    }
}

function mostrarResultado()
{
    if(pantalla.textContent.length > 10 )
    {
        pantalla.style.fontSize = '30px';
    }else{
        pantalla.style.fontSize = '50px';
    }
    if(operacion != 'null')
    {
        num2 = pantalla.textContent.split(operacion)[1];
        pantalla.textContent = calcularResultado(operacion, parseFloat(num1), parseFloat(num2));
        num1 = pantalla.textContent;
        num2 = '';
        operacion = 'null';
    }
}

function borrarDigito()
{
    if(pantalla.textContent != '0')
    {
        let ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length-1);
        console.log('ultimo digito : ' + ultimoCaracter);
        if(ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === 'x' || ultimoCaracter === '÷')
        {
            operacion = 'null';
        }
        pantalla.textContent = pantalla.textContent.slice(0, pantalla.textContent.length-1);
    }
    if(pantalla.textContent === '') pantalla.textContent = '0';
}

function reiniciarCalculadora()
{
    num1 = '0';
    num2 = '0';
    pantalla.textContent = '0';
    operacion = 'null';

}

function insertarPunto()
{
   if(operacion === 'null')
   {
     if(!pantalla.textContent.includes('.'))
     {
        pantalla.textContent += '.';
     }
   }else
   {
    let num = pantalla.textContent.split(operacion)[1];
        if(num === '')
        {
            pantalla.textContent = pantalla.textContent +'0.';
        }else{
            if(!num.includes('.'))
            {
                pantalla.textContent += '.';
            }
        }
   }
}


/*Eventos de los botones*/ 

botonesNumericos.forEach((boton) =>
  boton.addEventListener('click', () => 
  ingresarNumero(boton.textContent))
);

botonesOperaciones.forEach((boton) => 
    boton.addEventListener('click', () => 
    ingresarOperador(boton.textContent))
);


botonIgual.addEventListener('click', mostrarResultado);
botonDEL.addEventListener('click', borrarDigito);
botonAC.addEventListener('click',reiniciarCalculadora);
botonPunto.addEventListener('click', insertarPunto);
