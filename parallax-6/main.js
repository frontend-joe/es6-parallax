const { innerHeight } = window;

const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () =>
        i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
    },
    {
      backgroundPosition: () =>
        `50% ${innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
      },
    }
  );
});
