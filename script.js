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

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

// gsap.from("#page4 h1", {
//   y: 50,
//   scrollTrigger: {
//     trigger: "#page4 h1",
//     scroller: "body",
//     // markers:true,
//     start: "top 75%",
//     end: "top 70%",
//     scrub: 3,
//   },
// });
