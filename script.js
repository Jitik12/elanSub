gsap.to(".treeLine", {
  scrollTrigger : {
    scrub : 1
  },
  scale: 15,
  transformOrigin : "bottom center"
})

gsap.to(".grassLine", {
  scrollTrigger : {
    scrub : 1
  },
  scaleX : 3,
  transformOrigin : "bottom center"
})

gsap.to(".cloudLeft", {
  scrollTrigger : {
    scrub : 1
  },
  translateX : "-10000px"
})
gsap.to(".cloudRight", {
  scrollTrigger : {
    scrub : 1
  },
  translateX : "10000px"
})