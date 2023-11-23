function loader(){
    let a =0;
    setInterval(()=>{
        if(a<100){
            a=a+Math.floor(Math.random()*20);
            document.querySelector(".loader h2").innerHTML= a + '%';
        }
        else{
            a=100
            document.querySelector(".loader h2").innerHTML= a + '%';
        }
    },150)
}

let cursor =document.querySelector(".cursor");
let blur =document.querySelector(".cursor_blur");
document.addEventListener('mousemove',(pos)=>{
    cursor.style.left = pos.x+ "px";
    cursor.style.top = pos.y +"px" ;
    blur.style.left = pos.x - 100 +"px";
    blur.style.top = pos.y - 100 +"px"
})
let allh4=document.querySelectorAll(".nav h4");
allh4.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        cursor.style.scale = 2.5;
        cursor.style.backgroundColor="transparent";
        cursor.style.border="1px solid #fff"
    })
    e.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1;
        cursor.style.backgroundColor="cyan;";
        cursor.style.border="0px solid #fff"
    })
})
let tl = gsap.timeline();
tl.to(".loader h2",{
    scale: 1.25,
    duration:1,
    onStart: loader
})
tl.to(".loader",{
    y:"-100vh",
    duration:2,
    delay:0.5
})
tl.from(".nav h4 , .nav .logo-img",{
    y:-50,
    opacity:0,
    duration:0.3,
    stagger:0.2
})
gsap.to(".nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "105px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
      },
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: ".main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2 
    },
})

gsap.from(".about_us .about_us_content , .about_us img",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger: ".about_us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2 
    },
});
gsap.from(".card",{
    scale:0.7,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2 
    },
});

gsap.from("#comma1",{
    y: -50,
    x: -50,
    scrollTrigger: {
      trigger: "#comma1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
})
gsap.from("#comma2",{
    y: 50,
    x: 50,
    scrollTrigger: {
      trigger: "#comma1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
})
gsap.from(".content-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".content-4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }
    
})