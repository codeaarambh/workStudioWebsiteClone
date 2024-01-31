function loading() {
  let t = gsap.timeline();

  t.to(".yellow1", {
    top: "-100vh",
    delay: 0.5,
    duration: 0.8,
    ease: "expo-out",
  });
  t.from(
    ".yellow2",
    {
      top: "100vh",
      delay: 0.5,
      duration: 0.8,
      ease: "expo-out",
    },
    "anim"
  );
  t.to(
    ".loader h1",
    {
      delay: 0,
      color: "black",
      duration: 0.8,
    },
    "anim"
  );
  t.to(".loader", {
    display: "none",
    opacity:0
  });
}
loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
  
});
