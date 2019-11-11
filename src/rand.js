export function randomizer(questions){  //Fisher-Yates setup
    for (let i = questions.length - 1; i > 0; i--){
        const newPos = Math.floor(Math.random() * (i + 1));
        let temp = questions[i];
        questions[i] = questions[newPos];
        questions[newPos] = temp;
    }
    return questions
}