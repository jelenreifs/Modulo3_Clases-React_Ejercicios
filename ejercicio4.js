
class Finanzas {
    constructor(moneda) {
        this.moneda = moneda;
    }

    dolaresToEuros() {
        return this.moneda * 0.83
    }
       
   eurosToDolares(){
        return this.moneda / 0.83
    }
}

const conversor1 = new Triangulo(9)
console.log(conversor1.dolaresToEuros())
console.log(conversor1.eurosToDolares())

