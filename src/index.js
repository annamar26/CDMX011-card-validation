import validator from './validator.js';
const submitButton= document.querySelector('#validate')
const masked= document.querySelector('#masked')
const cardNumber= document.querySelector('#cardNumber')
const client= document.querySelector('#name')
const name= document.querySelector('.card-name')
const helper= document.querySelector('.helper')


const addSpaces = (string, caracter, steps) => {
  let formatNumber = "";
  const stringLength = string.length;
  for (let i = 0; i < stringLength; i += steps) {
      if (i + steps < stringLength) {
          formatNumber += string.substring(i, i + steps) + caracter;
      } else {
          formatNumber += string.substring(i, stringLength);
      }
  }
  return formatNumber;
}
submitButton.addEventListener('click', ()=>{
   helper.innerHTML=''
  console.log(cardNumber.value.length)
  if(cardNumber.value.length<16 & cardNumber.value.length>0){
    helper.innerHTML= 'La tarjeta debe tener al menos 16 dígitos'
  }else if(cardNumber.value.length===0){
    helper.innerHTML='Este campo no puede estar vacío'
  }else{
   
    masked.innerHTML= addSpaces(validator.maskify(cardNumber.value), ' ', 4)
name.innerHTML=client.value
  }


})
