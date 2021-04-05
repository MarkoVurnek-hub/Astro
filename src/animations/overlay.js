import gsap from "gsap";
export default () => {
  //prevents elements flashing
  gsap.to("body", 0, { css: { visibility: "visible" } });
  gsap.to("#root", 0, { css: { visibility: "visible" } });
  gsap.to("html", 0, { css: { visibility: "visible" } });
  const tl = gsap.timeline();

  tl.from(".title", 1.8, {
    x: -400,
    ease: "power4.out",
    delay: 1,

    stagger: {
      amount: 0.3
    }
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".header", 2, {
      css: { backgroundColor: "black", opacity: 0.4 },

      ease: "expo.inOut"
    })

    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })

    .to(".intro-overlay", 0, { css: { display: "none" } });
};
