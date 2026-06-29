const messages=[

"🤍 Sending you the biggest virtual hug, Nandini!",

"🌸 You deserve endless cuddles today, Nandini.",

"🍫 Chocolate is prescribed by me today, Nandini.",

"💖 I'm proud of you every single day, Nandini.",

"🌷 You're prettier than every flower, Nandini.",

"🥺 Rest today... I'll take care of everything, Nandini.",

"❤️ I wish I could hold your hand right now, Nandini.",

"✨ You're never alone. I'm always with you, Nandini.",

"🌼 Everything will be okay, Nandini."

];

const btn=document.getElementById("loveBtn");
const popup=document.getElementById("popup");

btn.onclick=()=>{

const random=messages[Math.floor(Math.random()*messages.length)];

popup.innerHTML=random;

};

const hearts=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,400);