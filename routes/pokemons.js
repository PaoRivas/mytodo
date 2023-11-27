var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET pokemons listing. */
router.get('/', function(req, res, next) {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    axios.get(apiUrl)
      .then(response => {
        // Handle the API response data here
        res.send(response.data);
      })
      .catch(error => {
        // Handle errors
        res.status(404).send('Sorry, cant find that');
      });
 
});

module.exports = router;