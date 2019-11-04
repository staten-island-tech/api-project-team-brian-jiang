axios({
    url: 'https://api-v3.igdb.com/cover',
    method:'GET',
    headers: {
        'Accept': 'application/json',
        'user-key': API_KEY
    },
    data: "fields alpha_channel,animated,game,height,image_id,url,width;"
})
.then((response) => {
    console.log(response.data);
})
.catch(err => {
    console.error(err);
});


