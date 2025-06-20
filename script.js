// Enable mouse follower and magnetic buttons
Shery.mouseFollower();
Shery.makeMagnet(".magnet");

// Hover video circle on text headings
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"]
});

// Scroll-based animation for text section
gsap.to(".fleftel", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%", // scroll effect
  ease: "power1"
});

// Scroll-linked image syncing using Shery.imageEffect
let sections = document.querySelectorAll(".fleftel"); // ✅ Fixed typo

Shery.imageEffect(".images", {
  style: 1, // or try style: 1 if needed
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index); // sync scroll to image
        }
      });
    });
  },
});
