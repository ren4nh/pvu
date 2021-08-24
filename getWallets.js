let nodeList = document.querySelectorAll("#w0 > table > tbody > tr > td:nth-child(2) > a") 

let list = []

for(let li of nodeList) {
    list.push(li.innerText)
}