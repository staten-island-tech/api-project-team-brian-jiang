
async function game_data(url = 'https://api-v3.igdb.com', endpoints = {}){
    const request = await fetch(url){
        method: 'POST',
        headers: {

        },

    });
    return await Response.json();
}

