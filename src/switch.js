import {answerGenerator} from './answerGenerator';
import { typewriterInit } from './anim';

export function answerSwitch(q, data){
    let display = document.querySelector('.trivia_question');
    let question = q.text.replace('%game%', data.name);
    typewriterInit(display, question);
    switch(q.type){
        case 'studio':
            answerGenerator('company', 18789, data.developers);
            break;
        case 'platform':
            answerGenerator('platform', 163, data.platforms);
            break;
        case 'character':
            answerGenerator('character', 39297, data.characters);
            break;
        case 'setting':
            answerGenerator('location', 5376, data.locations);
            break;
        case 'object':
            answerGenerator('object', 6395 ,data.objects);
            break;
        default:
            console.log('Defaulting, check inputs.');
    }
}