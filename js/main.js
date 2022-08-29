$(document).ready(function(){
  // AOS.init();

  var fixedTop = $(".fixed-con").offset().top;
  var sectionTop = $("#section2").offset().top - innerHeight;

  
  $(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    // 스크롤이 content에 닿았을 때
    if(scrollTop >= fixedTop){
      $("#section1").addClass("onScroll");
    } else {
      $("#section1").removeClass("onScroll");
    }
    // 스크롤이 content를 넘어갔을 때
    if(scrollTop > sectionTop){
      $("#section1").removeClass("onScroll");
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

  $(".txt-list").each(function(e){
      // gsap.to($(this), {
      //   scrollTrigger: {
      //     trigger: $(this).find(".txt-wrap"),
      //     start: "center top",
      //     end: "bottom bottom",
      //     pin: $(this),
      //     pinSpacing: false,
      //     scrub: true,
      //     markers: true
      //   }
      // });

      gsap.to($(".fixed-img").eq(e).not(".fasten"), {
      top: "-100%",
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        pinSpacing: false,
        scrub: true,
      }
    });
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

