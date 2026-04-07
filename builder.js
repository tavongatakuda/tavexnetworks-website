const TARVEX_EMAIL = "tarvexnetworks@gmail.com";

function generate(){

let text = document.getElementById("prompt").value.toLowerCase()

if(text==""){
alert("Describe website first")
return
}

document.getElementById("result").style.display="block"
document.getElementById("result").innerHTML="Generating..."

let layout=""

if(text.includes("restaurant")){

layout = `
<h2>Restaurant</h2>
<p>Welcome to our restaurant</p>
<ul>
<li>Burger</li>
<li>Pizza</li>
<li>Drinks</li>
</ul>
`

}

else if(text.includes("portfolio")){

layout = `
<h2>Portfolio</h2>
<p>My Projects</p>
<div>Project 1</div>
<div>Project 2</div>
`

}

else{

layout = `
<h2>Business Website</h2>
<p>Welcome to our company</p>
<button>Contact</button>
`

}

setTimeout(()=>{

document.getElementById("result").innerHTML = `

<h3>Website Preview</h3>

<iframe style="
width:100%;
height:500px;
border:none;
border-radius:10px;
background:white;
"
srcdoc="

<html>
<body style='font-family:Arial;margin:0'>

<div style='background:#0b2a5b;color:white;padding:15px'>
<b>${text.toUpperCase()}</b>
</div>

<div style='padding:20px'>
${layout}
<hr>
Email: ${TARVEX_EMAIL}
</div>

</body>
</html>

"></iframe>

<button onclick='deploy()'>Deploy Website</button>

`

},800)

}

function deploy(){
window.location.href="deploy.html"
}
