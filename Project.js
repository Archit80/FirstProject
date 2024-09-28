var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
    console.log(dets.y);
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})
var wrapper=document.querySelector(".loader-wrapper");
window.addEventListener("load",function(){
    wrapper.style.display="none";
})
// gsap.from("#TopRight",{
//     duration : 0.8,
//     x: 50
// })


// gsap.from("#NameTitle",{
//     duration : 0.5,
//     opacity: 0
// })

// gsap.from(".pages",{
//     y:100,
//     duration: 1,
//     stagger:0.5,
//     scrub: true,
//     scrollTrigger: {
//         trigger: ".pages",
//         scroller: "body",
        
//         // start: "90px",
//         // end: "70px"
//     }

// })


// // gsap.from("#page3",{
// //     y:100,
// //     duration: 1,
// //     scrub: true,
// //     scrollTrigger: {
// //         trigger: "#page3",
// //         scroller: "body",
        
// //         // start: "90px",
// //         // end: "70px"
// //     }

// // })

