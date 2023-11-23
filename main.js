let element = document.querySelectorAll('button');

console.log(element);

function imprimir(){
    console.log('Hola melon')
};

element.forEach( x => {
    if(x.className === 'button button--operand'){
        x.addEventListener("click",imprimir)
    }
});