class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        const px = a.x - b.x;
        const py = a.y - b.y;

        return Math.sqrt(px*px + py*py);
    }
}

let p1 = new Point(4,4);
let p2 = new Point(9,9);

console.log(Point.distance(p1, p2));