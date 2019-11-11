export function answerCheck(selection, data){
    let correctAns = [];
    if (data.developers != null) { correctAns.push(...data.developers) };
    if (data.locations != null) { correctAns.push(...data.locations) };
    if (data.characters != null) { correctAns.push(...data.characters) };
    if (data.platforms != null) { correctAns.push(...data.platforms) };
    correctAns = correctAns.map(el => el.name);
    //console.log(selection, correctAns)
    //console.log(correctAns.includes(selection));
    if(correctAns.includes(selection) == true){
        alert(`Correct!`);
    } else{
        alert(`Sorry, but that's not the correct answer`);
    }
}