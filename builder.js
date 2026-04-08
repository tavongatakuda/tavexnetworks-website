function generate(){

let text = document.getElementById("prompt").value

if(text==""){
alert("Describe your app idea")
return
}

let brand = text.split(" ")[0]
brand = brand.charAt(0).toUpperCase() + brand.slice(1)

let site = `

<div style="font-family:Arial">

<div style="
background:#02110d;
color:white;
padding:15px;
display:flex;
justify-content:space-between">

<div>${brand}</div>

<div>
Home | About | Services | Contact
</div>

</div>

<div style="padding:40px;text-align:center">

<h1>${brand}</h1>
<p>${text}</p>

<button style="
padding:12px 20px;
background:#00ffae;
color:black;
border:none;
border-radius:8px">
Get Started
</button>

</div>

<div style="padding:30px">
<h2>About</h2>
<p>Welcome to ${brand}. Built using Tarvex AI.</p>
</div>

<div style="padding:30px">
<h2>Services</h2>
<ul>
<li>Website Builder</li>
<li>Hosting</li>
<li>Domains</li>
<li>AI Tools</li>
</ul>
</div>

<div style="padding:30px">
<h2>Contact</h2>
<p>Email: tarvexnetworks@gmail.com</p>
</div>

<div style="
background:#02110d;
color:white;
padding:20px;
text-align:center">

${brand} © Tarvex Networks

</div>

</div>
`

document.getElementById("result").innerHTML=`

<h3>Website Preview</h3>

<div style="
background:white;
color:black;
border-radius:12px;
overflow:hidden">

${site}

</div>

`

}
