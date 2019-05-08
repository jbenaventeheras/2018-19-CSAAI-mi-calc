function main() {

  var num1 = 0
  var num2 = 0
  var res = 0
  var operador= ""


  var display = document.getElementById("Pantalla");
  var clean = document.getElementById("CE")
  var del = document.getElementById("C");
  var suma = document.getElementById("+");
  var resta = document.getElementById("-");
  var multiplicacion = document.getElementById("*");
  var division = document.getElementById("/");
  var igual = document.getElementById("=");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var cero = document.getElementById("0");
  var pi = document.getElementById("pi");
  var sumabin = document.getElementById("+bin");






  cero.onclick = () => {display.innerHTML = display.innerHTML + "0"}
  uno.onclick = () => {display.innerHTML = display.innerHTML + "1"}
  dos.onclick = () => {display.innerHTML = display.innerHTML + "2"}
  tres.onclick = () => {display.innerHTML = display.innerHTML + "3"}
  cuatro.onclick = () => {display.innerHTML = display.innerHTML + "4"}
  cinco.onclick = () => {display.innerHTML = display.innerHTML + "5"}
  seis.onclick = () => {display.innerHTML = display.innerHTML + "6"}
  siete.onclick = () => {display.innerHTML = display.innerHTML + "7"}
  ocho.onclick = () => {display.innerHTML = display.innerHTML + "8"}
  nueve.onclick = () => {display.innerHTML = display.innerHTML + "9"}
  pi.onclick = () => {display.innerHTML = display.innerHTML + "3.14159265359"}
  sumabin.onclick = () => {display.innerHTML = display.innerHTML + "+bin"}


  suma.onclick = () => {num1 = display.innerHTML
    display.innerHTML = display.innerHTML + "+";   operador = "+"}


  multiplicacion.onclick = () => {num1= display.innerHTML
    display.innerHTML = display.innerHTML + "*" ;operador = "*"}

  division.onclick = () => {num1 = display.innerHTML
    display.innerHTML = display.innerHTML + "/" ;operador = "/"}

  resta.onclick = () => {
    num1 = display.innerHTML
    display.innerHTML = display.innerHTML + "-" ;operador = "-"}

  clean.onclick = () => {display.innerHTML = display.innerHTML.slice(0,-1)}

  del.onclick = () => {display.innerHTML = ""}

  sumabin.onclick = () => {
    num1 = display.innerHTML
    num1dec = parseInt(num1, 2);
    display.innerHTML = display.innerHTML + "+bin" ;operador = "+bin"}




  igual.onclick = () => {
      linea = display.innerHTML;

      switch(operador){
          case "+":
            num2 = linea.split("+")[1];
            res = parseFloat(num1) + parseFloat(num2);
            break;
          case "+bin":
            num2 = linea.split("+bin")[1];
            num2dec = parseInt(num2, 2);
            res = parseFloat(num1dec) + parseFloat(num2dec);
            res = res.toString(2)
            break;
          case "-":
          num2 = linea.split("-")[1];
            res = parseFloat(num1) - parseFloat(num2);
            break;
          case "*":
            num2 = linea.split("*")[1];
            res = parseFloat(num1) * parseFloat(num2);
            break;
          case "/":
          num2 = linea.split("/")[1];
            res = parseFloat(num1) / parseFloat(num2);
            break;
        }

      display.innerHTML = res}


  }
