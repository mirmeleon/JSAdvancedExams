class TrainingCourse{
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];

    }

    addTopic(title, date){

        this.topics.push({
            title,
             date
        });


        return  this.topics.sort((t,d) => t.date-d.date);
    }

    get firstTopic (){
        return this.topics[0];
    }

    get lastTopic(){
       return this.topics[this.topics.length-1];
    }

    toString(){

       let res = `Course "${this.title}" by ${this.trainer}\n`;

        for(let top of this.topics){
            res += ` * ${top.title} - ${top.date}\n`;
        }

        return res;

    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

