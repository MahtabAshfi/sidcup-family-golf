let cursor = document.getElementById("cursor");
let cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", function(e){
  cursor.style.left = e.x + 5 + "px";
  cursor.style.top = e.y + 5 + "px";
  cursorBlur.style.left = e.x - 250 + "px";
  cursorBlur.style.top = e.y - 250 + "px";
})

let navbtn = document.querySelectorAll("#nav h4");
navbtn.forEach((element)=>{
  element.addEventListener("mouseenter",()=>{
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #ffffff";
    cursor.style.backgroundColor = "transparent";
  })
  element.addEventListener("mouseleave",()=>{
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #92BC1E";
    cursor.style.backgroundColor = "#92BC1E";
  })
})

gsap.to("#nav",{
  backgroundColor:"#000",
  height:"105px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%",
    scrub:2
  }
})

gsap.from("#about-us #img1, #about-us #img2, #about-us-desc", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});