export async function giantBombInit(){
  try{
    const data = await fetch('https://crossorigin.me/https://www.giantbomb.com/api/characters/?api_key=9d667b02088703888d8e5b8b79705908424b1a0b');
    const result = await data.json();
    console.log(result);
  }
  catch(err){
    console.log(err)
  }
}