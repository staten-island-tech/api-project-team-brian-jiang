import { format } from "path";

export async function giantBombInit(gameName){
  try{
    let data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=ba31dd109b521b66607178ada5c6b8f4fc13ca0b&query=${gameName}&resources=game&field_list=name,id,api_detail_url&format=json`);
    let result = await data.json();
    console.log(result);
  }catch(err){
    console.log(err)
  }
}

//https://www.giantbomb.com/api/character/1/?api_key=9d667b02088703888d8e5b8b79705908424b1a0b