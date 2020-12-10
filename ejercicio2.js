
class Distancia {
    constructor(num) {
        this.num = num;
    }

    MillasAMetros() {
        let metros = this.num * 1609.4
        console.log(metros + "m")

    }
    
   MillasAKilometros(){
       let kilometros = (num * 1609.4) * 0.001
        console.log(kilometros + "km")
       
    }
}

const conversor1 = new Distancia(7)
console.log(conversor1.MillasAMetros())
console.log(conversor1.MillasAKilometros())

