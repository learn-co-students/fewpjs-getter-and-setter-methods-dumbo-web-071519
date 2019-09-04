import { timingSafeEqual } from "crypto";


class Circle {

    constructor(radius){
        this.radius = radius
    }
    get diameter() {
        //twice the radius
        return this.radius * 2
    }

    set diameter(newDiameter) {
        //divide newDiam by half to get newRadius
        this.radius = newDiameter/2
    }
    get circumference() {
        //2piR
        return (2 * Math.PI * this.radius)
    }
    set circumference(newCircum){
        this.radius = newCircum/(2*Math.PI)
    }
    get area(){
        //pi * radius squared
        return ((Math.PI * (this.radius)^2))
    }
    set area(newArea){
        this.radius = ((Math.sqrt(newArea))/Math.PI)
    }
}

