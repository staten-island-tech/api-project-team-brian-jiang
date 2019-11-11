class Question{
    constructor(text, type){
        this.text = text;
        this.type = type;
    }
};

let QuestionList = {
    q1: new Question('Which studio created %game%?', 'studio'), //Valid
    q2: new Question('Which platform is %game% available on?', 'platform'), //Valid
    q3: new Question('Which of these is a character from %game%?', 'character'), //Valid
    //q5: new Question('What is the name of this character?', 'characterImg')
};

export let qList = Object.values(QuestionList);