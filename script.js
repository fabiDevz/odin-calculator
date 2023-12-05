let num1 ='';
let num2 =''; 
let operador = '';
let operation;
let valueScreen = 0;

const containerButton = document.getElementById('containerButton');
const screen = document.getElementById('screenDown');
const buttonAC = document.getElementById('buttonAC');


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
    if(b === 0){
        alert('you cannot divide by zero');
        return 0;
    } 
    return a/b;
}

function operate(operation, num1, num2)
{
    switch(operation){
        case '+':
            return add(num1,num2);
        case '-':
           return  subtract(num1,num2);
        case 'x':
            return multiply(num1,num2);
        case '÷':
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
                if(buttonCalculator.textContent === 'AC') buttonCalculator.setAttribute('id','buttonAC');
                if(buttonCalculator.textContent === 'DEL') buttonCalculator.setAttribute('id','buttonDEL');
                if(buttonCalculator.textContent === '.') buttonCalculator.setAttribute('id','buttonDot');
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
                
                switch(e.target.textContent)
                {
                    case 'AC':
                        screen.textContent = '0';
                        num1 = '0';
                        num2 = '0';
                        break;
                    case 'DEL':
                        if(screen.textContent != '0')
                        {
                            screen.textContent = screen.textContent.substring(0, screen.textContent.length -1);
                           
                        }
                        if(screen.textContent == ''){
                            screen.textContent = '0';
                        }
                        
                        break;
                    case '+':
                        if(screen.textContent != '0') {
                            num1 = screen.textContent;
                            screen.textContent += e.target.textContent;
                        }
                        break;
                    case '-':
                        if(screen.textContent != '0') {
                            num1 = screen.textContent;
                            screen.textContent += e.target.textContent;
                        }
                        break;
                    case '÷':
                        if(screen.textContent != '0') {
                            num1 = screen.textContent;
                            screen.textContent += e.target.textContent;
                        }
                        break;
                    case 'x':
                        if(screen.textContent != '0') {
                            num1 = screen.textContent;
                            screen.textContent += e.target.textContent;
                        }
                        break;

                   
                        

                        break;
                    case '=':
                     
                        if(num1 != '')
                        {
                            
                            if(screen.textContent.includes('+'))operador = '+';
                            if(screen.textContent.includes('-'))operador = '-';
                            if(screen.textContent.includes('x'))operador = 'x';
                            if(screen.textContent.includes('÷'))operador = '÷';

                            num2 = screen.textContent.split(operador+'')[1];
                            console.log(num2);
                          
                            if(!isNaN(operate(operador,parseInt(num1,10),parseInt(num2,10))))
                            {
                                screen.textContent = operate(operador,parseInt(num1,10),parseInt(num2,10));
                            }
                            num1 = screen.textContent ;
                            num2= '';
                            operador ='';
                            if(screen.textContent.length > 10)
                            {
                                screen.style.fontSize = '25px';
                            }else{
                                screen.style.fontSize = '50px';
                            }   
                        }
                        break;
                    
                    default:
                        if(screen.textContent == '0')
                        {
                            screen.textContent = e.target.textContent;
                        }else{
                            screen.textContent += e.target.textContent;
                        }
                        break;
                }
                
                console.log(e.target.textContent);
            });
           
            rowButton.appendChild(buttonCalculator);
            if(i == 3 && j == 2) break;
        }
    }
}



makeCalculator();
