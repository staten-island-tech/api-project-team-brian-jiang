export async function giantBombInit() {
  try {
    let data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&query=${document.getElementById('user_input').value}&resources=game&field_list=name,id,api_detail_url&format=json`);
    let result = await data.json();
    let game = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/game/${result.results[0].id}/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&field_list=name,id,characters,developers,locations,platforms,objects&format=json`);
    game = await game.json();
    //console.log(game.results);
    return game = game.results
  } catch (err) {
    console.log(err);
  }
}