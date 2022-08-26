$(document).ready(function(){
  // AOS.init();

  gsap.to(".right-layout", {
    ease: "none", 
    scrollTrigger: {
      trigger: ".fixed-con",
      start:"top 10%",
      end: "center top",
      // markers: true,
      pin: ".right-layout",
      // pinSpacing: false,
      scrub: true,
    }
  });

  
  $(".fixed-img").each(function(i){
    gsap.to($(".fixed-img").eq(i), {
      top: "-100%",
      stagger: .5,
      scrollTrigger: {
        trigger: $(".left-layout").eq(i),
        start: "12% top",
        end: "90% top",
        scrub: true,
        markers: true,
      },
    })
  })

  // gsap.to(".fixed-img", {
  //   top: "-100%",
  //   stagger: .5,
  //   scrollTrigger: {
  //     trigger: "#section1",
  //     start: "12% top",
  //     end: "90% top",
  //     // markers: true,
  //     pin: ".fixed-img",
  //     pinSpacing: false,
  //     scrub: true,
  //   }
  // });


  // gsap.to(".txt-list", {
  //   stagger: 3,
  //   scrollTrigger: {
  //     trigger: "#section1",
  //     start: "top top",
  //     end: "bottom top",
  //     pin: ".txt-list",
  //     markers: true,
  //     scrub: true,
  //   }
  // })

  // gsap.to(".right-layout", {
  //   top: "-100%",
  //   stagger: .1,
  //   scrollTrigger: {
  //     trigger: ".txt-list",
  //     start: "25% top",
  //     end: "bottom top",
  //     markers: true,
  //     scrub: true,
  //     pin: ".fixed-img",
  //   }
  // })

  // gsap.set(".fixed-img", {zIndex: (i, targets) => targets.length - i});
});

