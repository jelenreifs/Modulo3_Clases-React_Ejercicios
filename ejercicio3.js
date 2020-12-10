
class Triangulo {
    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    calcularArea() {
       let area= (this.ancho * this.largo) / 2
    }
    
   calcularPerimetro(){
      let perimetro =  this.largo*2 + this.ancho*2
       console.log(perimetro)
    }
}

const area1 = new Triangulo(6,9)
console.log(area1.calcularArea())
console.log(area1.calcularPerimetro())

