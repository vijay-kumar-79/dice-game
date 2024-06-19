var num1=Math.floor( Math.random()*6)+1;
var num2=Math.floor( Math.random()*6)+1;
var stg1="images/dice"+num1+".png";
var stg2="images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src",stg2);
document.querySelector(".img1").setAttribute("src",stg1);
if(num2>num1){
    document.querySelector("h2").innerHTML="Player2 wins🚩";
}
if(num1===num2){
    location.reload();
}