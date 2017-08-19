class SortedList{
    constructor(numbs){
        this.list = numbs;
    }

    add(value){
        this.list.push(value);
    }

    remove(index){
        this.list.splice(index,1);
    }

    get(index){
        return this.list[index];
    }
    size(){
        return this.list.length;
    }
}

let l = new SortedList([1,2,3]);
l.add(2);

console.log(l.size());
l.remove(4);
console.log(l.size());
console.log(l.get(3));
