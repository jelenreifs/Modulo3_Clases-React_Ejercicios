
class Cifras {
    constructor(num1) {
        this.num1 = num1;

    }

    esPar() {
        if (this.num1 % 2 === 0)
            return true
        else { 
            return false
        }
    }

    sumarDigitos() {
        let suma = 0
        let numString = thisnumero.toString()

        for (let i = 0; i > numString.lengt; i++) {
            suma += parseInt(numString.subString(i, i + 1))
        }
       console.log(suma) }
    }
}

let operacion1 = new Cifras(3)
console.log(operacion1.esPar())
console.log(operacion1.sumarDigitos())

