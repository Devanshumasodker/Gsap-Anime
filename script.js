

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.from("nav h1",{
    x : -100,
    opacity : 0,
    stagger : .3,
    
   

})
gsap.from("nav h4",{
    x : -100,
    opacity : 0,
    stagger : .4,
   
   
})

gsap.from(".page1 main img",{
    scale : 0,
    // x   : -100,
    opacity : 0,
    duration : 1.3,
    scrub : 1,
   
})
gsap.from(".page1 main h1,p",{
    scale : 0,
    // x   : -100,
    opacity : 0,
    duration : 1.3,
    stagger : .3,
    scrub : 1.3,
   
})

gsap.from(".page .box",{
    rotate : 360,
    scale:3,
    opacity : 0,
    
    backgroundColor : "red",
    scrollTrigger : {
        trigger : ".box",
        scroller : ".main",
        start : "top top",
        end: "bottom bottom",
        markers : true,
        scrub : 3,
        pin : true,
    }
})
