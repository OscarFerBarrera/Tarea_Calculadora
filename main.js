let element = document.querySelectorAll('button');
let numA = '';
let numB = 0;
let result = 0;


function guardarNumero(num){
    console.log(num)
    numA =+ num
};

function guardarB(num){
    console.log(num)
};

element.forEach( x => {
    if(x.className === 'button button--operand'){
        x.addEventListener("click",() => guardarNumero(x.value))
    }
});
element.forEach( x => {
    if(x.className === 'button button--operator'){
        x.addEventListener("click",() => guardarNumero(x.value))
    }
});