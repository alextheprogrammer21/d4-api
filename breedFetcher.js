const request = require('request');
let breedName = process.argv.slice(2);
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

request(URL, (error, response, body) => {
  const data = JSON.parse(body); let dataArray = Object.keys(data); let data2 = data[dataArray];

  if (!data2) return console.error('error: invalid type of breed');
  
  if (error) return console.error(`Error: ${error}`);
  
  
  console.log(data2.description);
});