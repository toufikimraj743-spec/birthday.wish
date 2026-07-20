const text = "HAPPY\nBIRTHDAY!";

const colors = [
"#ff4d4d",
"#ff9800",
"#ffd600",
"#4caf50",
"#2196f3",
"#9c27b0"
];

const container = document.getElementById("birthdayText");

let delay = 0;

for(let char of text){

if(char === "\n"){

container.appendChild(document.createElement("br"));
continue;

}

let span = document.createElement("span");

span.className="letter";

span.innerHTML=char===" "?"&nbsp;":char;

span.style.color=colors[Math.floor(Math.random()*colors.length)];

span.style.animationDelay=delay+"s";

container.appendChild(span);

delay+=0.08;

}

// Sparkles

const sparklePos=[

["40px","80px"],
["320px","140px"],
["70px","450px"],
["330px","500px"],
["180px","260px"]

];

sparklePos.forEach((p,i)=>{

const s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✦";

s.style.left=p[0];

s.style.top=p[1];

s.style.color=colors[i%colors.length];

document.querySelector(".container").appendChild(s);

});





document.getElementById("next-btn").addEventListener("click",function(){
    window.location.href="wish.html";
});