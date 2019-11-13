import { randomizer } from './rand';
import { typewriterInit } from './anim';

export async function answerGenerator(qType, maxCount, data){
    async function generator(){
        let game = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/${qType}/${Math.floor(Math.random() * maxCount)}/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&field_list=name&format=json`);
        game = await game.json();
        if(game.status_code != 1){
            return await generator();
        }else{
        game = game.results.name;
        return game;
        }
    }
    let a1 = data[Math.floor(Math.random() * data.length)].name;
    let a2 = await generator();
    let a3 = await generator();
    let a4 = await generator();
    let aArray = [a1, a2, a3, a4];
    aArray = randomizer(aArray);
    Array.from(document.querySelectorAll('.trivia_answer_choice')).map(function(el, i){
        //el.innerHTML = aArray[i];
        typewriterInit(el, aArray[i]);
        
    });
}