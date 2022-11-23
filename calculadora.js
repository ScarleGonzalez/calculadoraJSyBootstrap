function click1(){
    document.calculadora.display.value +=1
}
function click2(){
    document.calculadora.display.value +=2
}
function click3(){
    document.calculadora.display.value +=3
}
function click4(){
    document.calculadora.display.value +=4
}
function click5(){
    document.calculadora.display.value +=5
}
function click6(){
    document.calculadora.display.value +=6
}
function click7(){
    document.calculadora.display.value +=7
}
function click8(){
    document.calculadora.display.value +=8
}
function click9(){
    document.calculadora.display.value +=9
}
function click0(){
    document.calculadora.display.value +=0
}
function clickSumar(){
    document.calculadora.display.value +="+";
}
function clickRestar(){
    document.calculadora.display.value +="-";
}
function clickMultiplicar(){
    document.calculadora.display.value +="*";
}
function clickDividir(){
    document.calculadora.display.value +="/";
}
function clickBorrar(){
    document.calculadora.display.value ="";
}
function clickIgual(){
   let Display = eval(document.calculadora.display.value);
   document.calculadora.display.value=Display;
}