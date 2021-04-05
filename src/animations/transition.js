import gsap from "gsap";
import skills from "./skills";

export default setControls => {
  const tl = gsap.timeline();
  tl.to("li", 0, {
    css: { display: "none" }
  })
    .to(".exhaust-flame", 0.1, {
      css: { display: "none" }
    })
    .to(".fire", 0, {
      css: { visibility: "visible" }
    })
    .to(".rocket", 1.5, {
      css: { rotate: -25 }
    })
    .to(".rocket", 0.1, {
      delay: 4,
      css: { rotate: 0 }
    })
    .fromTo(
      ".rocket",
      0.7,
      {
        y: 100
      },
      { y: -1000 }
    )
    .to(".title", 1.8, {
      x: -400,
      ease: "power4.out",
      delay: 1,

      stagger: {
        amount: 0.3
      }
    })
    .to(".title", 1.8, {
      css: { display: "none" }
    })

    .eventCallback("onComplete", () => {
      setControls(true);

      skills();
    });
};
