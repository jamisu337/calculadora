function add(n1) {
    const display = calculadora.display;
    const display_end = calculadora.display_end;
    const numeros_display = calculadora.display.value.length

    const Operadores = ['+', '-', '*', '/']

    if(numeros_display > 11){
        if(Operadores.includes(n1)){
            display.value += n1;
            display_end.value = display_end.value + display.value;
            display.value = ""
        }
        return true
    }

    if(validaroparedores(n1)){
        display.value += n1;
    }

    if(Operadores.includes(n1)){
        display_end.value = display_end.value + display.value;
        display.value = ""
    }
    
}

function validaroparedores(n1) {
    const display_end = calculadora.display_end
    const display = calculadora.display;
    const display_last = display.value[display.value.length - 1]; // pega o último caractere do display
    const isOperator = ['+', '-', '*', '/'].includes(n1); // Verificar se o próximo caractere é um operador lógico

    if (isOperator){
        if(display_last === '.'){
            display.value = display.value.slice(0, -1); // se . for o ultimo caracter da strind e pertarmos em um operador ele vai apagar o ponto
        }

        if(display_end.value === '' && display.value === ''){
            display.value += "0" + n1;
            return false
        }

        if (display.value === ''){
            display_end.value = display_end.value.slice(0, -1); 
        }

    }


    if (display.value === '' || display.value === '0') {
        if (n1 === '.') {
            if (!display.value.includes('.')) { // verifica se existe algum numero antes do ponto
                if (display.value === '') {
                    display.value += '0';
                }
                return true;
            } else {
                return false;
            }

        }

        if(display.value === '0'){
            display.value += n1;
            return false
        }

        display.value = n1;
        return false
    }

    if(display.value.includes('.')){
        if(n1 === '.'){
            return false
        }
    }

    display.value += n1

}


function exponenciacao(){
    const display = calculadora.display;
    display.value = (display.value)*(display.value)
}

function limparDisplay() {
    const display = calculadora.display;
    display.value = '';
}

function backspace(){
    const display = calculadora.display;
    display.value = display.value.slice(0, -1);
}

function calcular(){
    const display = calculadora.display;
    const display_end = calculadora.display_end;
    const display_end_last = display_end.value[display_end.value.length - 1];

    if(['+', '-', '*', '/'].includes(display_end_last) && display.value === ''){
        display_end.value = display_end.value.slice(0, -1);

        const expressao = display_end.value;
        const exp_final = expressao.replace(/^0+/, '');
        const resultado = eval(exp_final);
        
        display.value = resultado;
        display_end.value = '';
    }

    const expressao =display_end.value + display.value;
    const exp_final = expressao.replace(/^0+/, '');
    const resultado = eval(exp_final); // eval e uma função que faz a operaçao com string

    display.value = resultado;
    display_end.value = '';
}
