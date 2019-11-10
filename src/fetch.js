//import { format } from "path";
import {qList} from './questions';
import {answerSwitch} from './switch';
import {randomizer} from './rand';
export function giantBombInit(){
  document.getElementById('submit').addEventListener('click', async function(e){
    e.preventDefault();
    try{
      let data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&query=${document.getElementById('user_input').value}&resources=game&field_list=name,id,api_detail_url&format=json`);
      let result = await data.json();
      //console.log(result);
      let game = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/game/${result.results[0].id}/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&format=json`);
      game = await game.json();
      console.log(game);
      answerSwitch(randomizer(qList)[1], game.results);
    }catch(err){
      console.log(err);
    }
  })
}

//https://www.giantbomb.com/api/character/1/?api_key=9d667b02088703888d8e5b8b79705908424b1a0b