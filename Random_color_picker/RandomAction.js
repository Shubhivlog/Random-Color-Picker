const arr=['red','blue','green','yellow','grey','orange','pink','indigo','purple'];
const btn=document.querySelector('button');
const body=document.querySelector('body');
const span=document.querySelector('span');
var color;
btn.addEventListener('click',()=>{
    color= arr[Math.floor(Math.random() * 9) +0];
    body.style.backgroundColor=color;
    span.innerText=color;
})