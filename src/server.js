async function test(){
const data = await fetch("https://api-v3.igdb.com/games",{
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'user-key': '42e763c170268439c45ee99f42691e54'
  },
  data: "alternative_names"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });
}