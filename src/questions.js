class Question{
    constructor(text, type){
        this.text = text;
        this.type = type;
    }
}

export let QuestionList = {
        q1: new Question('In which year was %game% released?', 'releaseDate'),
        q2: new Question('Which studio created %game%?', 'studio'),
        q3: new Question('Which platform is %game% available on?', 'platform'),
        q4: new Question('Which of these is a character from %game%?', 'character'),
        q5: new Question('Does %game% have DLC content?', 'DLC'),
        q6: new Question('Where does %game% take place?', 'setting'),
        q7: new Question('What is the name of this character?', 'characterName')
}

export function randomizer(){ //Fisher Yates Setup; Status: Success
    let qList = Object.values(QuestionList);
    for (let i = qList.length - 1; i > 0; i--){
        const newPos = Math.floor(Math.random() * (i + 1));
        let temp = qList[i];
        qList[i] = qList[newPos];
        qList[newPos] = temp;
    }
    return console.log(qList); 
}

function Assigner (){
    switch(qList){
        case "qList":

        case "":

        case "":
        
        case "":
        
        case "":
        
        case "":
        
        case "":

    }
}


