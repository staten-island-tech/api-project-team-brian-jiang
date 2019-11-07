//import {getUserInput} from './input'
import {clickListener} from './clickListener'
import {giantBombInit} from './fetch'

//getUserInput();

clickListener('#submit', (giantBombInit(document.getElementById('user_input').value)))