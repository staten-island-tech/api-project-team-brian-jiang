import {giantBombInit} from './fetch';
import {clickListener} from './clickListener';
import {qInit} from './questions';
import {randomizer} from './rand';
import {answerSwitch} from './switch';
import {answerCheck} from './answerCheck';
import {animInit, ansSelect, typewriterInit} from './anim';

function triviaInit(){
    typewriterInit(document.querySelector('.header'), 'VIDEOGAME TRIVIA')
    console.log('Created by William Anderson, Bryan Boyd, and Brian Jiang.')
    animInit();
    giantBombInit();
    let userInput;
    let score = 0;
    let highscore = 0;

    clickListener('#submit', async (e) => {
        if (document.querySelector('#user_input').value.length == 0){
            alert('Please input the name of a video game.');
        } else{
            let game = await giantBombInit();
            answerSwitch(randomizer(qInit(game))[1], game);
            userInput = game;
        }
    })

    clickListener('.trivia_answer_choice', (e) => {
        //answerSwitch(randomizer(qInit(userInput))[1], userInput);
        if (answerCheck(e.target.innerHTML, userInput) == true){
            ansSelect(e.target, 'green');
            score = score + 1;
            document.querySelector('.trivia_scoreboard').innerHTML = score;
            answerSwitch(randomizer(qInit(userInput))[1], userInput);
        } else{
            ansSelect(e.target, 'red');
            if (score > highscore){
                //document.querySelector('.trivia_question').innerHTML = `Game Over. New high score: ${score}!`;
                typewriterInit(document.querySelector('.trivia_question'), `Game Over. New high score: ${score}!`);
                highscore = score
            }
            score = 0;
            document.querySelector('.trivia_scoreboard').innerHTML = score;
            setTimeout(() => {
                answerSwitch(randomizer(qInit(userInput))[1], userInput)
            }, 3500);
        }
        /* document.querySelector('.trivia_scoreboard').innerHTML = score;
        answerSwitch(randomizer(qInit(userInput))[1], userInput); */
    });
    }
triviaInit();