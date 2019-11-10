export async function answerGenerator(qType, maxCount){
    let game = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/${qType}/${Math.round(Math.random() * maxCount)}/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&format=json`);
    game = await game.json();
    game = game.results
    console.log(game);
    let a1 = data.qType.name;
    let a2 = game.name;
    let a3 = game.name;
    let a4 = game.name;
    console.log(a1, a2)
}