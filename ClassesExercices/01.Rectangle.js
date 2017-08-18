class Rectangle {
    constructor(width, heigth, color){
        this.width = width;
        this.height = heigth;
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}


let r = new Rectangle(2,3, 'red');
console.log(r.calcArea());
console.log(r.color);