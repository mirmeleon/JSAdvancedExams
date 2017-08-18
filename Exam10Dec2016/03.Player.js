class Player{
    constructor(nickName){
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score){
        //ako e string chislo
        let test = Number(score);

        if(!isNaN(test) && score != null){ //ako e string ne e iasno usloieto
            this.scores.push(score);
            this.scores.sort((a,b) => b-a);
        }
      return this;
    }

    get scoreCount() {

        return this.scores.length;
    }

    get highestScore(){

        return this.scores.sort((a,b) => b-a)[0];
    };

    get topFiveScore() {
      //  return this.scores.slice(0, 5);
           if(this.scores.length ===0){
               return [];
           }
       let res = this.scores.sort((a,b) => b-a);
        let result = [];
        for(let i = 0; i < res.length; i++){
            if(i < 5){
                result.push(res[i]);
            }
        }


       return result;


    }

    toString(){


        return `${this.nickName}: [${this.scores}]`;
    }
}

let p = new Player('Trifon');
//p.addScore('Pesho');
//
// console.log(p.toString()); //da
//
// console.log(p.highestScore);
// console.log(p.topFiveScore.length);
// console.log(p.scoreCount);
p.addScore('123');
console.log(p.toString());
console.log(p.highestScore);
console.log(p.topFiveScore[0]);
console.log(p.scoreCount);