class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    get innerLength(){
        return this._innerLength;
    }

    set innerLength(value){

    }
    increase(val){
        return this.innerLength += val;
    }

    decrease(val){
        if(innerLength-val <= 0){
            return this._innerLength = 0;
        }
        return this.innerLength -= val;
    }

    toString(){
         if(this.innerString.length > this.innerLength){
            return this.innerString.substr(0,this.innerLength) + '...';
        } else if(this.innerLength === 0){
            return '...';
        }
    }
}