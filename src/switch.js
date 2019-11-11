import {answerGenerator} from './answerGenerator';
import { answerCheck } from './answerCheck';

export function answerSwitch(q, data){
    let display = document.querySelector('.trivia_question');
    let question = q.text.replace('%game%', data.name)
    display.innerHTML = question;
    switch(q.type){
        case 'studio':
            console.log(q.type);
            answerGenerator('company', 18789, data.developers);
            break;
        case 'platform':
            console.log(q.type);
            answerGenerator('platform', 163, data.platforms);
            break;
        case 'character':
            console.log(q.type);
            answerGenerator('character', 39297, data.characters);
            break;
        default:
            console.log('Defaulting, check inputs.');
    }
}