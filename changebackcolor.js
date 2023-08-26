const button=document.getElementById("btn");
const main=document.getElementById("main");

const colors=["red","green","yellow","gray","greenyellow","red","pink"]
let i=0;
button.addEventListener("click",()=>{

main.style.backgroundColor=colors[i];
i++;

if(i==colors.length) i=0;

})