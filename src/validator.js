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
        const inverse = cardNumber.split('').reverse()
        for (let i = 0; i < inverse.length; i++) {
            if (i % 2 !== 0) {
                const double = inverse[i] * 2;

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
                array.push(parseInt(inverse[i]));
            }
        }
        const result = array.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        console.log(array)
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


        return emisora;
    },
};

export default validator;