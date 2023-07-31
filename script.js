var pics=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var n=Math.random();
var n1=Math.random();
n=n*6;
n1=n1*6;
n=Math.floor(n+1);
n1=Math.floor(n1+1);
var imgsrc1="images/dice"+n+".png";
var imgsrc2="images/dice"+n1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc1);
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);
if(n>n1){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(n==n1){
    document.querySelector("h1").innerHTML="It's a draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}