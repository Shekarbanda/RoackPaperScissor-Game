let images=document.querySelectorAll(".image");

let para=document.querySelector("#para");
let player =document.querySelector("#player");
let computer=document.querySelector("#computer");

let p1=document.querySelector(".p1");
let c1=document.querySelector(".c1");

let img1=document.querySelector("#img1");
let img2=document.querySelector("#img2");
let img3=document.querySelector("#img3");

let ans=0;
let c_score=0;
let p_score=0;

images.forEach((image)=>
{
    image.addEventListener("mouseover",()=>
    {
        image.classList.add("border");
    })
})

img1.addEventListener("click",()=>
{
    ans=1;
    let res=Math.floor(Math.random()*3)+1;
    p1.innerText="Player: Rock";

if(ans===1 && res===1 || ans===2 && res===2 || ans===3 && res===3)
{
    c1.innerText="Computer: Rock";
    para.innerText="DRAW GAME";
    para.style.fontSize="30px";
    para.style.color="black";
}

else if(ans===1 && res===2 || ans===2 && res===3 || ans===3 && res===1)
{
    c1.innerText="Computer: Paper";
    c_score++;
    computer.innerText="Computer Score"+"\n"+c_score;
    player.innerText="Your Score"+"\n"+p_score;
    para.innerText="LOOSER";
    para.style.fontSize="30px";
    para.style.color="red";
}
else if(ans===2 && res===1 || ans===3 && res===2 || ans===1 && res===3)
{
    c1.innerText="Computer: Scissor";
    p_score++;
    player.innerText="Your Score"+"\n"+p_score;
    computer.innerText="Computer Score"+"\n"+c_score;
    para.innerText="Congratlation You are WINNER";
    para.style.fontSize="30px";
    para.style.color="green";
}
})
img2.addEventListener("click",()=>
{
    p1.innerText="Player: Paper";
    ans=2;
    let res=Math.floor(Math.random()*3)+1;

if(ans===1 && res===1 || ans===2 && res===2 || ans===3 && res===3)
{
    c1.innerText="Computer: Paper";
    para.innerText="DRAW GAME";
    para.style.fontSize="30px";
    para.style.color="black";
}

else if(ans===1 && res===2 || ans===2 && res===3 || ans===3 && res===1)
{
    c1.innerText="Computer: scissor";
    c_score++;
    computer.innerText="Computer Score"+"\n"+c_score;
    player.innerText="Your Score"+"\n"+p_score;
    para.innerText="LOOSER";
    para.style.fontSize="30px";
    para.style.color="red";
}
else if(ans===2 && res===1 || ans===3 && res===2 || ans===1 && res===3)
{
    c1.innerText="Computer: Rock";
    p_score++;
    player.innerText="Your Score"+"\n"+p_score;
    computer.innerText="Computer Score"+"\n"+c_score;
    para.innerText="Congratulation You are WINNER";
    para.style.fontSize="30px";
    para.style.color="green";
}
})
img3.addEventListener("click",()=>
{
    p1.innerText="Player: Scissor";
    ans=3;
    let res=Math.floor(Math.random()*3)+1;

if(ans===1 && res===1 || ans===2 && res===2 || ans===3 && res===3)
{
    c1.innerText="Computer: Scissor";
    para.innerText="DRAW GAME";
    para.style.fontSize="30px";
    para.style.color="black";
}

else if(ans===1 && res===2 || ans===2 && res===3 || ans===3 && res===1)
{
    c1.innerText="Computer: Rock";
    c_score++;
    computer.innerText="Computer Score"+"\n"+c_score;
    player.innerText="Your Score"+"\n"+p_score;
    para.innerText="LOOSER";
    para.style.fontSize="30px";
    para.style.color="red";
}
else if(ans===2 && res===1 || ans===3 && res===2 || ans===1 && res===3)
{
    c1.innerText="Computer: Paper";
    p_score++;
    player.innerText="Your Score"+"\n"+p_score;
    computer.innerText="Computer Score"+"\n"+c_score;
    para.innerText="Congratularions You are WINNER";
    para.style.fontSize="30px";
    para.style.color="green";
}
})


