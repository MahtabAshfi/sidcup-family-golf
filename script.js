let cursor = document.getElementById("cursor");
let cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", function(e){
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  cursorBlur.style.left = e.x - 250 + "px";
  cursorBlur.style.top = e.y - 250 + "px";
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
    start:"top -65%",
    end:"top -70%",
    scrub:2
  }
})