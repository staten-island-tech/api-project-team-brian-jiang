export function answerCheck(selection, data){
    let correctAns = [];
    if (data.developers != null) { correctAns.push(...data.developers) };
    if (data.locations != null) { correctAns.push(...data.locations) };
    if (data.characters != null) { correctAns.push(...data.characters) };
    if (data.platforms != null) { correctAns.push(...data.platforms) };
    if (data.objects != null) { correctAns.push(...data.objects) };
    correctAns = correctAns.map(el => el.name);
    return correctAns.includes(selection);
}