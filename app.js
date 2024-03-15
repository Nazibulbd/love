const light = document.getElementById("light");
const offbtn =  document.getElementById("off");
const onbtn = document.getElementById("on");

const lights = {
    off : "https://www.w3schools.com/js/pic_bulboff.gif",
    on : "https://www.w3schools.com/js/pic_bulbon.gif",
};

offbtn.addEventListener("click", ()=>{
    light.src = lights.off
});
onbtn.addEventListener("click", ()=>{
    light.src = lights.on
});




const btn = document.getElementById("btn");
const secretMessage = document.getElementById("secretMessage");



const msg  = "I love you 😘 আমার শাশুড়ি আম্মার খরচন্নি মেয়ে আমি তোমাকে চোখটিপি দিতে চাই";
btn.addEventListener("click", (e) =>{
    secretMessage .textContent = msg;
});

