const request = require('request');



const fetchBreedDescription = function(breedName, callback) {

  let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(URL, (error, response, body) => {
    const data = JSON.parse(body); let dataArray = Object.keys(data); let data2 = data[dataArray];

    if (!data2) return callback(error, null);
    
    // if (error) return console.error(`Error: ${error}`);
    
    callback(null, data2.description);
  });
};

module.exports = { fetchBreedDescription };