
const validator = {
  


  maskify(creditCardNumber) {
   
    let maskingNumbers;
    
    //let creditCardNumber = document.getElementById("cardNumber").value;//
   // console.log(creditCardNumber);
  
    //let lengthCreditCardNumber = cardNumber.length;
    //console.log(lengthCreditCardNumber);//
  
    let numbersToConvert = creditCardNumber.substring(0, creditCardNumber.length - 4);
    //console.log(numbersToConvert);//
  
    //let numbersToShow = creditCard.substring(creditCard.length - 4, creditCard.length);//
    //console.log(numbersToShow);//
    switch (creditCardNumber.length) {
      case 16:
        maskingNumbers = creditCardNumber.replace(numbersToConvert, "############")
        break;
      case 15:
         maskingNumbers = creditCardNumber.replace(numbersToConvert, "###########");
        break;
      case 14:
        maskingNumbers = creditCardNumber.replace(numbersToConvert , "##########");
        break;
      case 13:
         maskingNumbers = creditCardNumber.replace(numbersToConvert, "#########");
        break;
      case 12:
        maskingNumbers = creditCardNumber.replace(numbersToConvert, "########");
        break;
      case 11:
        maskingNumbers =creditCardNumber.replace(numbersToConvert, "#######");
        break;
      case 10:
        maskingNumbers =creditCardNumber.replace(numbersToConvert, "######");
        break;
      case 9:
        maskingNumbers =creditCardNumber.replace(numbersToConvert, "#####");
        break;
      case 8:
        maskingNumbers =creditCardNumber.replace(numbersToConvert, "####");
        break;
      case 7:
         maskingNumbers =creditCardNumber.replace(numbersToConvert, "###");
        break;
      case 6:
        maskingNumbers =creditCardNumber.replace(numbersToConvert, "##");
        break;
      case 5:
         maskingNumbers =creditCardNumber.replace(numbersToConvert, "#");
        break;
      default:
         maskingNumbers = creditCardNumber;
    }  
  return maskingNumbers;
        },
  
 
  
  isValid(creditCardNumber) {
   
    function completarYreversa(){   
    
      let x= creditCardNumber.length;
      let cadenaInvertida = "";

      while(x>=0){
       cadenaInvertida= cadenaInvertida+creditCardNumber.charAt(x);
       x--;
      }

      if(cadenaInvertida.length<=16){
        creditCardNumber=cadenaInvertida+"0".repeat(16-cadenaInvertida.length)
      return creditCardNumber
    }}
     
    let cadenaCompleta= completarYreversa()
    
    let arreglo = Array.from(cadenaCompleta);
    let arreglo1 = arreglo.map(normalize);
    function normalize(value){
    return value *1;
    }
    console.log(arreglo1);

  

  let arrTd = arreglo1;
  let firstNumberTodouble = [arrTd[1]];
  let secondsNumberTodouble = [arrTd[3]];
  let thirdNumberTodouble = [arrTd[5]];
  let fourthNumberTodouble = [arrTd[7]];
  let fifthNumberTodouble = [arrTd[9]];
  let sixthNumberTodouble = [arrTd[11]];
  let seventhNumberTodouble = [arrTd[13]];
  let eigthNumberTodouble= [arrTd[15]];
  let numbersToDouble= [firstNumberTodouble,secondsNumberTodouble,thirdNumberTodouble,fourthNumberTodouble, fifthNumberTodouble,sixthNumberTodouble,seventhNumberTodouble, eigthNumberTodouble];
  //console.log(numbersToDouble);*/


  let numbersToDouble1 = numbersToDouble.map(normalize);
  //console.log(numbersToDouble1)

  let doubleNumbers = numbersToDouble1.map(doublefunction);
  console.log(doubleNumbers);
  function doublefunction(value){
  return value *2
  }

  let arrN = arreglo1;
  let firstNumber = [arrN[0]];
  let secondsNumber = [arrN[2]];
  let thirdNumber = [arrN[4]];
  let fourthNumber = [arrN[6]];
  let fifthNumber = [arrN[8]];
  let sixthNumber = [arrN[10]];
  let seventhNumber = [arrN[12]];
  let eigthNumber = [arrN[14]];
  let normalNumbers= [firstNumber,secondsNumber,thirdNumber,fourthNumber, fifthNumber,sixthNumber,seventhNumber, eigthNumber]
  let normalNumbers1 = normalNumbers.map(normalize);
  console.log(normalNumbers1);

  Array.prototype.push.apply(doubleNumbers, normalNumbers1);
  console.log(doubleNumbers);

  let dobleDigito = doubleNumbers.filter(element => element > 9);
  console.log(dobleDigito);


  let sumaDigitosDobles = dobleDigito.map(function(value){return Math.trunc((value/10)+ value%10)})
  console.log(sumaDigitosDobles)

  let normalNumbers2 = doubleNumbers.filter(element => element < 10);
  console.log(normalNumbers2);

  Array.prototype.push.apply(normalNumbers2, sumaDigitosDobles);
  console.log(normalNumbers2);

  let total = normalNumbers2.reduce(function(a, b){ return a + b; });
console.log(total);

  
  if(total%10==0) {
  return true
  
  } else {
  return false
  
  }
},


  getIssuer(creditCardNumber){
   
  let emisora;
  let lengthCreditCardNumber= creditCardNumber.length
  let firstChart= creditCardNumber.charAt(0);
  if (firstChart==="4" & lengthCreditCardNumber===16){
    emisora= "Visa";
  }
  if (firstChart==="5" & lengthCreditCardNumber===16){
      emisora= "MasterCard"  
  }
  if (firstChart==="3" & lengthCreditCardNumber===15){
      emisora="American Express"  ;
  }
     
     return emisora ;  
 }
 
};

  

export default  validator;


