import validator from './validator.js';


document.getElementById("validationButton").addEventListener("click", function(){ 
    validarCampoVacio();
      });

document.getElementById("validationButton").addEventListener("keydown", function(e){ 
     if(e.key ===13){
      validarCampoVacio()
      }});

function recuperarValor(){
 let creditCardNumber = document.getElementById("cardNumber").value; 
  return creditCardNumber
  
 }
     
function validarCampoVacio(){
   if(recuperarValor().length!=0){

    document.getElementById("numeroEnmascarado").innerHTML= validator.maskify(recuperarValor());
        if (validator.isValid (recuperarValor())==true){
        document.getElementById("respuesta").innerHTML= "Su tarjeta es valida y es elegible para nuestras promociones";
        insertarImagen()
        location.reload
        }else{
        document.getElementById("respuesta").innerHTML= "Su tarjeta NO es Valida, ingrese los datos correctamente";
        
        }}
    else{
       location.reload();
       alert("Ingresa el numero de tu tarjeta de crédito");
    }
  
}

function insertarImagen(){
    if (validator.getIssuer(recuperarValor())==="Visa"){
        document.getElementById("emisora").innerHTML= '<img id="visa" src="visa.svg" >';
      }
      if (validator.getIssuer(recuperarValor())==="MasterCard"){
        document.getElementById("emisora").innerHTML= '<img id="mastercard" src="master.svg" >';
      }
      if (validator.getIssuer(recuperarValor())==="American Express"){
        document.getElementById("emisora").innerHTML= '<img scr="american.svg">';
      }
    }