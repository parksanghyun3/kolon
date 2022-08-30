$(document).ready(function(){

  AOS.init();
  ScrollTrigger.matchMedia({
    // pc
    "(min-width: 769px)": function() {
      $(".txt-list").each(function(){
        gsap.to($(this), {
          scrollTrigger: {
            trigger: $(this),
            start: "top 10%",
            end: "bottom top",
            // pin: true,
            // pinSpacing: false,
            // markers: true,
          }
        });
      });
    
      $(".fixed-img").each(function(e){
        gsap.to($(".fixed-img").eq(e).not(".fasten"), {
          top: "-100%",
          ease: "none",
          scrollTrigger: {
            trigger: $(".txt-list").eq(e+1),
            start: "top 90%",
            end: "top 10%",
            scrub: true,
            // markers: true,
          }
        });
      });
    
      gsap.to(".right-layout", {
        scrollTrigger: {
          trigger: ".left-layout",
          start: "top 10%",
          end: "bottom bottom",
          pin: ".right-layout",
          scrub: true,
          // markers: true,
          onEnter: function(){
            $("#section1").addClass("onScroll");
          },
          onLeave: function(){
            $("#section1").removeClass("onScroll");
          },
          onEnterBack: function(){
            $("#section1").addClass("onScroll");
          },
          onLeaveBack: function(){
            $("#section1").removeClass("onScroll");
          },
        }
      });
    }

  });
  
});

