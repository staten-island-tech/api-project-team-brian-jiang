class Question{
    constructor(text, type){
        this.text = text;
        this.type = type;
    }
};

export function qInit(data){
    let QuestionList = []
    if(data.developers != null){QuestionList.push(new Question('Which studio created %game%?', 'studio'))}; //Valid
    if(data.platforms != null){QuestionList.push(new Question('Which platform is %game% available on?', 'platform'))}; //Valid
    if(data.characters != null){QuestionList.push(new Question('Which of these is a character from %game%?', 'character'))}; //Valid
    if(data.locations != null){QuestionList.push(new Question('Where does %game% take place?', 'setting'))};
    if(data.objects != null){QuestionList.push(new Question('Which of these items is from %game%?', 'object'))}
    return QuestionList;
};