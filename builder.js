const TARVEX_EMAIL = "tarvexnetworks@gmail.com";

let siteData = {}

function generate(){

let text = document.getElementById("prompt").value

if(text==""){
alert("Describe website first")
return
}

/* BRAND NAME */

let words = text.split(" ")
let brand = words[0] + "ly"
brand = brand.charAt(0).toUpperCase() + brand.slice(1)

/* TAGLINE */

let tagline = "Build smarter with " + brand

/* NAV */

let nav = `
<div style="background:#0b2a5b;color:white;padding:20px">
<h2>${brand}</h2>
<small>${tagline}</small>
<br><br>

<a href="#" onclick="loadPage('index')" style="color:white;margin-right:15px">Home</a>
<a href="#" onclick="loadPage('about')" style="color:white;margin-right:15px">About</a>
<a href="#" onclick="loadPage('services')" style="color:white;margin-right:15px">Services</a>
<a href="#" onclick="loadPage('contact')" style="color:white">Contact</a>

</div>
`

/* HOME */

siteData.index = `
${nav}

<div style="padding:40px">

<h1>${brand}</h1>
<p>${tagline}</p>

<p>${text}</p>

<button style="
padding:12px 20px;
background:#0b2a5b;
color:white;
border:none;
border-radius:6px;
">
Get Started
</button>

</div>
`

/* ABOUT */

siteData.about = `
${nav}

<div style="padding:20px">

<h1>About ${brand}</h1>

<p>${brand} was generated using Tarvex AI.</p>

</div>
`

/* SERVICES */

siteData.services = `
${nav}

<div style="padding:20px">

<h1>Services</h1>

<ul>
<li>AI Website Builder</li>
<li>Hosting</li>
<li>Domains</li>
<li>Deployment</li>
</ul>

</div>
`

/* CONTACT */

siteData.contact = `
${nav}

<div style="padding:20px">

<h1>Contact</h1>

<p>Email: ${TARVEX_EMAIL}</p>

</div>
`

document.getElementById("result").style.display="block"

document.getElementById("result").innerHTML = `
<h3>Website Preview</h3>

<div id="preview" style="background:white;color:black">
${siteData.index}
</div>

<button onclick="deploy()">Deploy Website</button>
`

}

function loadPage(page){
document.getElementById("preview").innerHTML = siteData[page]
}

function deploy(){
localStorage.setItem("tarvex_site", JSON.stringify(siteData))
window.location.href="deploy.html"
}
