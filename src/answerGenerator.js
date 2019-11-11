import { randomizer } from './rand';

export async function answerGenerator(qType, maxCount, data){
    async function generator(){
        let game = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/${qType}/${Math.round(Math.random() * maxCount)}/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&field_list=name&format=json`);
        game = await game.json();
        game = game.results.name;
        //console.log(game);
        return game;
    }
    let a1 = data[Math.floor(Math.random() * data.length)].name;
    let a2 = await generator();
    let a3 = await generator();
    let a4 = await generator();
    let aArray = [a1, a2, a3, a4];
    //console.log(aArray);
    aArray = randomizer(aArray);
    //console.log(aArray);
    Array.from(document.querySelectorAll('.trivia_answer_choice')).map(function(el, i){
        el.innerHTML = aArray[i]
    })
    //console.log(a1); // the right answer is perserved as a1 and we can return this value to index and check against user value. 
}