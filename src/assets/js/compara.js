window.addEventListener("load", function () {
  let boton1 = document.getElementById('boton1');
  boton1.addEventListener('click', onClick);
})


function onClick(){
  let resp = document.getElementById('respuesta');
  let num1 = parseInt(document.getElementById('numero1').value);
  let num2 = parseInt(document.getElementById('numero2').value);
  let num3 = parseInt(document.getElementById('numero3').value);

  if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    resp.innerText = "Alguno de los campo(s) esta vacio"
    resp.className = "colorRojo";
  }else{
    if(num1 == num2 && num2 == num3){
      resp.innerText = "Los tres numeros son iguales"
      resp.className = "colorAzul";
    }
    if(num1 > num2 && num1 > num3){
      resp.innerText = "El numero mayor es: " + num1
      resp.className = "colorVerde";
    }
    if(num2 > num1 && num2 > num3){
      resp.innerText = "El numero mayor es: " + num2
      resp.className = "colorVerde";
    }
    if(num3 > num1 && num3 > num2){
      resp.innerText = "El numero mayor es: " + num3
      resp.className = "colorVerde";
    }
  }
}
