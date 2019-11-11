import {giantBombInit} from './fetch'; //API call; Status: Complete
import {clickListener} from './clickListener'; //Check for User input; Status Complete
import {qList} from './questions'; //Question Template; Status: Complete
import {randomizer} from './rand'; //Question Randomizer; Status: Complete
import {answerSwitch} from './switch'; //Answer Generation; Status: Complete
import { answerCheck } from './answerCheck';

giantBombInit();
let userInput; //remove later

clickListener('#submit', async (e) => {
    let game = await giantBombInit();
    answerSwitch(randomizer(qList)[1], game);
    userInput = game;
})

clickListener('.trivia_answer_choice', (e) => {
    answerSwitch(randomizer(qList)[1], userInput);
    answerCheck(e.target.innerHTML, userInput);
});
