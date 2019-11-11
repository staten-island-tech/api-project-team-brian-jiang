import {giantBombInit} from './fetch'; //API call; Status: Complete
import {clickListener} from './clickListener'; //Check for User input; Status Complete
import {qInit} from './questions'; //Question Template; Status: Complete
import {randomizer} from './rand'; //Question Randomizer; Status: Complete
import {answerSwitch} from './switch'; //Answer Generation; Status: Complete
import { answerCheck } from './answerCheck';

giantBombInit();
let userInput; //remove later
let score = 0;
let highscore = 0;

clickListener('#submit', async (e) => {
    let game = await giantBombInit();
    answerSwitch(randomizer(qInit(game))[1], game);
    userInput = game;
})

clickListener('.trivia_answer_choice', (e) => {
    answerSwitch(randomizer(qList)[1], userInput);
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
