const init=()=>{
    
 

const container=document.querySelector(".container");
const card=document.querySelector(".card");
const img=document.querySelector(".sneaker img");
const order=document.querySelector(".order button");
const heading=document.querySelector(".heading");



container.addEventListener("mousemove",e=>
{
let xAxis=(window.innerWidth/2-e.pageX)/10;
let yAxis=(window.innerHeight/2-e.pageY)/10;


card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
//animate in

container.addEventListener("mouseenter",e=>{

    
    card.style.transition="none"
    img.style.transform="translateZ(100px) rotateZ(-45deg)" ;
    
    heading.style.transform="translateZ(100px)";
    order.style.transform="translateZ(100px)";

});


//animate out
container.addEventListener("mouseleave",e=>{

    card.style.transform="rotateY(0deg) rotateX(0deg)";
    card.style.transition="all 0.5s ease"
    img.style.transform="translateZ(0px)";
    heading.style.transform="translateZ(0px)";
    order.style.transform="translateZ(0px)";
   
});


}

init();