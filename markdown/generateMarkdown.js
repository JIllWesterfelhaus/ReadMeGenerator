//creating questions that will gather user input to generate readme
var fs = require("fs")
const genResponse = {

  generateMarkdown(res, response) {
   const userInfo =  `
# ${response.title}
<img width = "100" height = "100" src="${res.data.avatar_url}">
<h2>


<h1>ReadMe</h1>
<h2>Table of Contents</h2>
<ul>
<li><a href="#title">Project Title</a></li>

<li><a href="#description">Description</a></li>

<li><a href="#motivation">Motivation</a></li>

<li><a href="#contributors">Contributors</a></li>

<li><a href="#tech">Tech Used</a></li>

<li><a href="#build">Build Status</a></li>

<li><a href="#license">License</a></li>

<li><a href="#badges">Badges</a></li>

<li><a href="#installations">Installations</a></li>

<li><a href="#credits">Credits</a></li>

<li><a href="#contact">Contact for Further Information</a></li>
<br>

<h2 id="title">Project Title</h2>
<p><input type="text" name="title" value="">${response.title}</p>

<h2 id="description">Description</h2>
<p><input type="text" name= "description" value="">${response.description}</p>

<h2 id="motivation">Motivation</h2>
<p><input type="text" name="motivation" value="">${response.motivation}</p>

<h2 id="contributors">Contributors</h2>
<p>Contributor or contributors for this project are <input type="text" name="contributors" value="">${response.contributors}</p>

<h2 id="tech">Tech Used</h2>
<p>Tech used for this project is <input type="text" name="tech" value="">${response.tech}</p>

<h2 id="build">Build Status</h2>
<p>Build status for this project is <input type="text" name="build" value="">${response.build}</p>

<h2 id="license">License</h2>
<p>License for this project is <input type="text" name="license" value ="">${response.license}</p>

<h2 id="badges">Badges</h2>
<p>Badge or badges for this project are <input type="text" name="badges" value="">${response.badges}</p>

<h2 id="installations">Installations</h2>
<p><input type="text" name="installations" value="">${response.installations}</p>

<h2 id="credits">Credits</h2>
<p><input type="text" name="credits" value="">${response.credits}</p>

<h2 id="contact">Contact for Additional Questions</h2>
<p>Please feel free to email <input type="text" name="email" value="">${response.email} if you have additional questions.  Thank you.</p>

`
//write file to markdown folder
fs.writeFile("markdown/README.md",userInfo,function(err) {
  if (err) {
    return console.log(err)
  }
console.log ("Success!")
}) 

  }
}
module.exports = genResponse;


