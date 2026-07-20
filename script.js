let password = "";
const correct = "1234";

function press(num){

if(password.length>=4)
return;

password += num;

update();

if(password.length==4){

setTimeout(()=>{

if(password===correct){

document.getElementById("msg").innerHTML="❤️ Unlocked ❤️";

document.getElementById("nextBtn").style.display="inline-block";
}else{

document.getElementById("msg").innerHTML="❌ Wrong Password";

password="";
update();

}

},300);

}

}

function update(){

for(let i=1;i<=4;i++){

document.getElementById("b"+i).innerHTML=
password[i-1] ? "*" : "";

}

}



function goNext(){

window.location.href="birthday.html";}