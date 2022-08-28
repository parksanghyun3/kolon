$(document).ready(function(){
  // AOS.init();

  var fixedTop = $(".fixed-con").offset().top;

  
  $(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= fixedTop){
    }
  });

  gsap.to(".right-layout", {
    ease: "none", 
    scrollTrigger: {
      trigger: ".right-layout",
      start: "top " + "10%",
      end: "bottom bottom",
      // markers: true,
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  $(".txt-list").each(function(){

  });
  gsap.to(".fixed-img", {
    top: "-100%",
    stagger: .5,
    scrollTrigger: {
      trigger: ".txt-list",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      markers: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  // gsap.set(".right-layout", {
  //   ease: "none", 
  //   top: "50%",
  //   yPercent: "-50%",
  // });

  
  // $(".fixed-img").each(function(i){
  //   gsap.to($(".fixed-img").eq(i), {
  //     top: "-100%",
  //     stagger: .5,
  //     scrollTrigger: {
  //       trigger: $(".left-layout").eq(i),
  //       start: "12% top",
  //       end: "90% top",
  //       scrub: true,
  //       markers: true,
  //     },
  //   })
  // })


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

