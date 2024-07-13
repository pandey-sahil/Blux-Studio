var crsr = document.querySelector('.cursor');
// var main = document.querySelector("#main")

main.addEventListener("mousemove", function (dets) {
    // console.log(dets.x)
    gsap.to(crsr, {
        top: dets.y,
        left: dets.x
    })
})