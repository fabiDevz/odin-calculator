let num1;
let num2; 
let operation;
let valueScreen = 0;

const containerButton = document.getElementById('containerButton');
const screenDown = document.getElementById('screenDown');

function add(a,b){
return a+b;
}

function subtract(a,b){
return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0) return 'you cannot divide by zero.'
    return a/b;
}

function operate(operation, num1, num2)
{
    switch(operation){
        case 'add':
            return add(num1,num2);
        case 'substract':
           return  subtract(num1,num2);
        case 'multiply':
            return multiply(num1,num2);
        case 'divide':
          return  divide(num1,num2);
         default:
            console.log('internal error');
            break;
    }
}

function makeCalculator(){
    let symbols = ['7','8','9','DEL','AC','4','5','6','x','÷',
    '1','2','3','+','-','0','.','='];
    let index = 0;

    for(let i = 0 ; i < 4 ; i ++)
    {
        var rowButton = document.createElement('div');
        rowButton.className = "rowButton";
        containerButton.appendChild(rowButton);
        for(let j = 0 ; j < 5; j++)
        {
            var buttonCalculator = document.createElement('button');
            if(symbols[index] === 'AC' || symbols[index] === 'DEL')
            {
                buttonCalculator.className = "buttonCalculatorClear";
            }else{
                if(symbols[index] === '='){
                    buttonCalculator.className = "buttonCalculatorEqual";
                }else{
                    buttonCalculator.className = "buttonCalculator"
                }
            }
            buttonCalculator.textContent = symbols[index];
            index++;
            buttonCalculator.addEventListener('click', function (e) {
                if(screenDown.textContent  === '0')
                {   
                    screenDown.textContent  = e.target.textContent;
                }else{
                    screenDown.textContent += e.target.textContent;
                }
                
                console.log(e.target.textContent);
            });
           
            rowButton.appendChild(buttonCalculator);
            if(i == 3 && j == 2) break;
        }
    }
}

function verifyZero(input )
{
    input.split('')[0] == 0
}

makeCalculator();
