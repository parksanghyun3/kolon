$(document).ready(function(){
  // AOS.init();
  
  gsap.to(".fixed-img", {
    top: "-100%",
    // stagger: .01,
    scrollTrigger: {
      trigger: "#section1",
      start: "25% top",
      end: "bottom top",
      markers: true,
      scrub: true,
      pin: "#section1",
    }
  })

  // gsap.set(".fixed-img", {zIndex: (i, targets) => targets.length - i});
});

