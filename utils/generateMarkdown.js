const genResponse = {


generateMarkdown(res,response) {
  return `
# ${response.title}
<h1>ReadMe</h1>
<h2>Table of Contents</h2>
<ul>
<li>Project Title</li>
<li>Description</li>
<li>Motivation</li>
<li>Contributors</li>
<li>Tech Used</li>
<li>Build Status</li>
<li>License</li>
<li>Badges</li>
<li>Installations</li>
<li>Credits</li>
<li>Contact for Further Information</li>
<br>
<h2>Project Title</h2>
<p>The title of this project is "".<p>
<h2>Description</h2>
<p>""</p>
<h2>Motivation</h2>
<p>The motivation for this project is "".</p>
<h2>Contributors</h2>
Contributor or contributors for this project are "".</p>
<h2>Tech Used</h2>
<p>Tech used for this project is "".</p>
<h2>Build Status</h2>
<p>Build status for this project is "".</p>
<h2>License</h2>
<p>License for this project is "".</p>
<h2>Badges</h2>
Badge or badges for this project are "".</p>
<h2>Installations</h2>
Installations done from this project are "".</p>
<h2>Credits</h2>
<p>We wish to thank "".</p>
<h2>Contact for Additional Questions</h2>
<p>Please feel free to email "" if you have additional questions.  Thank you.</p>



`;
}
}
module.exports = genResponse;


