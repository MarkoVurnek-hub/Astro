import gsap from "gsap";
export default () => {
  const tl = gsap.timeline();
  tl.to(".title-skills", 1.8, {
    x: 3,
    ease: "power4.out",

    stagger: {
      amount: 0.3
    }
  })
    .to(".nodeLogo", 1, {
      css: { visibility: "visible" }
    })
    .to(".reactLogo", 1, {
      css: { visibility: "visible" }
    })

    .to(".mongoLogo", 1, {
      css: { visibility: "visible" }
    })
    .to(".linkedin", 1.8, {
      x: -3,
      ease: "power4.out",

      stagger: {
        amount: 0.3
      }
    });
};
