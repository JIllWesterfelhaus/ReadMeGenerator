const axios = require("axios");
const genMd = require("./generateMarkdown")
const api = {
  getUser(username,response) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res)  {
      genMd.generateMarkdown (res,response)

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

