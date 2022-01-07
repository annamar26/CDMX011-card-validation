const validator = {
  maskify(cardNumber) {
    if (cardNumber.length > 4) {
      return cardNumber.replace(
        cardNumber.substring(0, cardNumber.length - 4),
        "#".repeat(cardNumber.length - 4)
      );
    }
    return cardNumber;
  },

  isValid(cardNumber) {
    const array = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        const double = cardNumber[i] * 2;

        if (double.toString().length == 2) {
          const digits = double.toString().split("");
          array.push(
            digits.reduce(
              (accumulator, currentValue) =>
                parseInt(accumulator) + parseInt(currentValue)
            )
          );
        } else {
          array.push(double);
        }
      } else {
        array.push(parseInt(cardNumber[i]));
      }
    }
    const result = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return result % 10 === 0 ? true : false;
  },

  getIssuer(creditCardNumber) {
    let emisora;
    let lengthCreditCardNumber = creditCardNumber.length;
    let firstChart = creditCardNumber.charAt(0);
    if ((firstChart === "4") & (lengthCreditCardNumber === 16)) {
      emisora = "Visa";
    }
    if ((firstChart === "5") & (lengthCreditCardNumber === 16)) {
      emisora = "MasterCard";
    }
    if ((firstChart === "3") & (lengthCreditCardNumber === 15)) {
      emisora = "American Express";
    }

    return emisora;
  },
};

export default validator;
