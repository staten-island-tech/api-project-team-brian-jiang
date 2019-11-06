export async function giantBombInit(){
  try{
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto',{
      mode: 'no-cors'
    });
    let result = await data.json();
    console.log(result);
  }catch(err){
    console.log(err)
  }
}

//https://www.giantbomb.com/api/character/1/?api_key=9d667b02088703888d8e5b8b79705908424b1a0b