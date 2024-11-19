// script.js
gsap.registerPlugin(ScrollTrigger);

// 通用速度
const speed = 100;

// Div 2 動畫
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: "#main1",
    start: "top top",
    end: "bottom top",
    scrub: true,
});

scene1
    .to("#main1 .background", { y: speed * -0.2 }, 0)
    .to("#main1 .middle", { y: speed * -0.4, x: speed * -0.3 }, 0)
    .to("#main1 .foreground", { y: speed * -0.6, x: speed * -0.5 }, 0);

// Div 4 動畫
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: "#main2",
    start: "top top",
    end: "bottom top",
    scrub: true,
});

scene2
    .to("#main2 .background", { y: speed * -0.2 }, 0)
    .to("#main2 .middle", { y: speed * -0.4, x: speed * 0.3 }, 0)
    .to("#main2 .foreground", { y: speed * -0.6, x: speed * 0.5 }, 0);
