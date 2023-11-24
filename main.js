
let numA = '';
let numB = 0;
let result = 0;
let operation ="";

function guardarNumero(num){
    numA = numA + num.toString();
    screen.innerText = numA;

    
};

function guardarOperacion(operacion){
    operation = operacion;
    numB = numA * 1;
    numA = "";
    screen.innerText = numA;

}

function ejecutarOperacion(){

    numA = numA * 1;

    if (operation === '+'){
        result = numB + numA

    } else if(operation ==='-'){
        result = numB - numA

    } else if(operation ==='*'){
        result = numB * numA

    }else if(operation === '/'){
        result = numB / numA

    }
    screen.innerText = result;
}

function borrarTodo(){
    numA = "";
    numB = 0;
    result = 0;
    screen.innerText ="";
    console.log('fin')
}

// poner los eventos en los botones
let element = document.querySelectorAll('button');
let screen = document.querySelector('p')


element.forEach( x => {
    if(x.className === 'button button--operand'){

        x.addEventListener("click",() => guardarNumero(x.value));

    } else if(x.className === 'button button--operator'){

        x.addEventListener("click",() => guardarOperacion(x.value));

    } else if(x.className === 'button button--equal'){

        x.addEventListener("click",() => ejecutarOperacion());

    } else if(x.className === 'button button--clear'){

        x.addEventListener("click",() => borrarTodo());
    }
});