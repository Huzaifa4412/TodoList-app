let tl = gsap.timeline();
tl.from(".todo-list-container", {
  delay: 0.8,
  x: -200,
  duration: 1,
  ease: "elastic",
  opacity: 0,
})
  .from(".todo-list-header", {
    //   delay: 0.8,
    x: -200,
    duration: 1,
    ease: "elastic",
    opacity: 0,
  })
  .from(
    ".inputBar",
    {
      opacity: 0,
      width: 0,
    },
    "-=0.5"
  );

