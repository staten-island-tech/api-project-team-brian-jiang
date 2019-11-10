import {giantBombInit} from './fetch';
import { clickListener } from './clickListener';
import { qList } from './questions';
import { answerSwitch } from './switch';
import { randomizer } from './rand';

giantBombInit();

let userInput; //remove later

clickListener('#submit', async () => {
    let game = await giantBombInit();
    answerSwitch(randomizer(qList)[1], game);
    userInput = game;
})

clickListener('.trivia_answer_choice', () => {
    answerSwitch(randomizer(qList)[1], userInput);
})