var Tline = gsap.timeline(
    {
        scrollTrigger : {
            trigger : ".sec",
            scroller : "body",
            start : "top top",
            markers : true,
            scrub : 3,
            pin : true,
        }
    }
)

var tl2 = gsap.timeline();
tl2.from("nav h3",{
    x : -100,
    opacity : 0,
    stagger : .3,

},"ele")
tl2.from("nav h1",{
    x : -100,
    opacity : 0,
    stagger : .3,
    duration : 1.5,
    
},"ele")

Tline.to("#left",{
    rotate : -35,
    
    opacity : 0,
    
},"ele")
Tline.to(".circle",{
    transform : "scale(34)",
    
},"ele")

Tline.to("#right",{
    rotate : 35,
    
    opacity : 0,
},"ele")