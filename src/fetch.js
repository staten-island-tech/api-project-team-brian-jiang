async function giantBombInit(userInput){
  const data = await fetch('https://www.giantbomb.com/api/characters/?api_key=9d667b02088703888d8e5b8b79705908424b1a0b');
  const result = await result.json();
  console.log(result)
}