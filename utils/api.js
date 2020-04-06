const axios = require("axios")

const api = {
  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res)  {
      console.log(res.data);
    }).catch(function(error) {
      if (error) {
        console.log (error)
      } 
      else {
        console.log ("Success!")
      }
    })
  }
  
};
api.getUser("JillWesterfelhaus")
module.exports = api;

