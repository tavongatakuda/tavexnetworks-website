function search(){

let name = document.getElementById("domain").value

if(name==""){
alert("Enter domain")
return
}

document.getElementById("results").style.display="block"

document.getElementById("results").innerHTML = `

<h3>Available Domains</h3>

${domainRow(name,".com",10)}
${domainRow(name,".net",8)}
${domainRow(name,".org",7)}
${domainRow(name,".online",3)}
${domainRow(name,".store",5)}

`

}

function domainRow(name,ext,price){

return `
<div class="domain">
<span>${name}${ext}</span>
<button onclick="buy('${name}${ext}',${price})">
$${price} Buy
</button>
</div>
`

}

function buy(domain,price){

localStorage.setItem("domain",domain)
localStorage.setItem("price",price)

window.location.href="checkout.html"

}
