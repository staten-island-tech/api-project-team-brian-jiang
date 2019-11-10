import {answerGenerator} from './answerGenerator';

export function answerSwitch(q, data){
    let display = document.querySelector('.trivia_question');
    let question = q.text.replace('%game%', data.name)
    display.innerHTML = question;
    switch(q.type){
        case 'releaseDate':
            console.log(q.type);
            break;
        case 'studio':
            console.log(q.type);
            answerGenerator('company', 18789, data.developers);
            break;
        case 'platform':
            console.log(q.type);
            answerGenerator('platform', 163, data.platforms);
            break;
        case 'character':
            answerGenerator('character', 39297, data.characters);
            console.log(q.type);
            break;
        case 'dlc':
                console.log(q.type);
                break;
        case 'setting':
                console.log(q.type);
                answerGenerator('location', 5376, data.locations);
                break;
        case 'characterImg':
                console.log(q.type);
                break;
        default:
            console.log('Defaulting, check inputs.');
    }
}