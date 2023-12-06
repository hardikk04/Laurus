const t1 = gsap.timeline();
t1.from(".page3-elem-img>img", {
  width: "50%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-elem-img>img",
    // markers: true,
    scrub: 1,
    start: "top 90%",
    end: "top 20%",
  },
});

t1.from(".page3-elem>h1", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-elem>h1",
    // markers: true,
    scrub: 1,
    start: "top 90%",
    end: "top 60%",
  },
});

t1.to(".page3,.page4", {
  backgroundColor: " #a8bbbf",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    // markers: true,
    scrub: 1,
    start: "top 90%",
    end: "top 50%",
  },
});

t1.from(".page6-img>img", {
  width: "40%",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page6-img>img",
    // markers: true,
    scrub: 1,
    start: "top 90%",
    end: "top 0%",
  },
});

t1.from(".page7-box-elem", {
  marginTop: "20vw",
  stagger: 0.2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page7-box-elem",
    // markers: true,
    scrub: 1,
    start: "top 50%",
    end: "top -50%",
  },
});
