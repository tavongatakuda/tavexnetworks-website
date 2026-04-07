const TARVEX_EMAIL = "tarvexnetworks@gmail.com";

let siteData = {}

function generate(){

let text = document.getElementById("prompt").value.toLowerCase()

if(text==""){
alert("Describe website first")
return
}

/* COLOR AI */

let theme = {
bg:"#ffffff",
text:"#000000",
nav:"#0b2a5b"
}

if(text.includes("dark")){
theme = {
bg:"#0b0b0b",
text:"#ffffff",
nav:"#000000"
}
}

if(text.includes("blue")){
theme = {
bg:"#f4f8ff",
text:"#000000",
nav:"#0b2a5b"
}
}

if(text.includes("light")){
theme = {
bg:"#ffffff",
text:"#111111",
nav:"#eeeeee"
}
}

/* NAV */

let nav = `
<div style="background:${theme.nav};color:white;padding:20px">
<h2>${text.toUpperCase()}</h2>
<a href="#" onclick="loadPage('index')" style="color:white;margin-right:15px">Home</a>
<a href="#" onclick="loadPage('about')" style="color:white;margin-right:15px">About</a>
<a href="#" onclick="loadPage('services')" style="color:white;margin-right:15px">Services</a>
<a href="#" onclick="loadPage('contact')" style="color:white">Contact</a>
</div>
`

/* LAYOUT AI */

let homeLayout=""

if(text.includes("restaurant")){

homeLayout = `
<h1>Restaurant</h1>
<p>Welcome to our restaurant</p>
<ul>
<li>Burger</li>
<li>Pizza</li>
<li>Drinks</li>
</ul>
`

}

else if(text.includes("portfolio")){

homeLayout = `
<h1>Portfolio</h1>
<p>My Projects</p>
<div style="display:flex;gap:10px">
<div style="background:#eee;padding:20px">Project 1</div>
<div style="background:#eee;padding:20px">Project 2</div>
</div>
`

}

else if(text.includes("shop")){

homeLayout = `
<h1>Shop</h1>
<div style="display:flex;gap:10px">
<div style="border:1px solid #ddd;padding:15px">
Product 1<br><button>Buy</button>
</div>
<div style="border:1px solid #ddd;padding:15px">
Product 2<br><button>Buy</button>
</div>
</div>
`

}

else{

homeLayout = `
<h1>Business Website</h1>
<p>Welcome to our company</p>
<button>Contact Us</button>
`

}

/* PAGES */

siteData.index = `
${nav}
<div style="padding:20px;background:${theme.bg};color:${theme.text}">
${homeLayout}
</div>
`

siteData.about = `
${nav}
<div style="padding:20px;background:${theme.bg};color:${theme.text}">
<h1>About</h1>
<p>This is your business description</p>
</div>
`

siteData.services = `
${nav}
<div style="padding:20px;background:${theme.bg};color:${theme.text}">
<h1>Services</h1>
<ul>
<li>Website Development</li>
<li>Hosting</li>
<li>Domains</li>
</ul>
</div>
`

siteData.contact = `
${nav}
<div style="padding:20px;background:${theme.bg};color:${theme.text}">
<h1>Contact</h1>
<p>Email: ${TARVEX_EMAIL}</p>
</div>
`

document.getElementById("result").style.display="block"

document.getElementById("result").innerHTML = `
<h3>Website Preview</h3>

<div id="preview" style="border-radius:10px;overflow:hidden">
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
