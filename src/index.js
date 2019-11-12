import {giantBombInit} from './fetch';
import {clickListener} from './clickListener';
import {qInit} from './questions';
import {randomizer} from './rand';
import {answerSwitch} from './switch';
import {answerCheck} from './answerCheck';

function triviaInit(){
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
        answerSwitch(randomizer(qInit(userInput))[1], userInput);
        if (answerCheck(e.target.innerHTML, userInput) == true){
            alert('Correct.');
            score = score + 1;
        } else{
            alert('Incorrect');
            if (score > highscore){
                alert(`New High Score: ${score}`);
                highscore = score;
            }
            score = 0;
        }
        document.querySelector('.trivia_scoreboard').innerHTML = score;
    });
    }
triviaInit();