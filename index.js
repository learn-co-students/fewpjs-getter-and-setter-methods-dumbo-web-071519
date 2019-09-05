class Circle {
    constructor(radius){
        this.radius = radius
    }
    set diameter(value){
        this.radius = value / 2
    }

    set circumference(value){
        this.radius = ((value/2) / Math.PI)
    }

    set area(value){
        this.radius = (Math.sqrt(value) / Math.PI)
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return (2 * Math.PI * this.radius)
    }
    
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

}