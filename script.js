function loco() {
    gsap.registerPlugin(ScrollTrigger);

    var locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

        var cursor = document.querySelector(".cursor");
        var main = document.querySelector('#main');

        main.addEventListener("mousemove", (event) => {
            // cursor.style.left = `${dets.clientX + window.scrollX}px`;
            // cursor.style.top = `${dets.clientY + window.scrollY}px`;
            var mouseX = event.clientX;
            var mouseY = event.clientY;


            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                ease: "power2.out",
                duration: 0.3
            });
        });

        locoScroll.on("scroll", (instance) => {
            var mouseX = instance.scroll.x;
            var mouseY = instance.scroll.y;

            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                ease: "power2.out",
                duration: 0.3
            });
        });
    };
loco();


function cardAnimation() {
    var cards = document.querySelectorAll('.card');
    var pg1 = document.querySelector(".page1")
    cards.forEach(card => {
        pg1.addEventListener('mousemove', (e) => {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var percentX = (x - centerX) / centerX;
            var percentY = (y - centerY) / centerY;
            var maxTilt = 15;

            let rotationY = percentX * maxTilt;
            let rotationX = -percentY * maxTilt;

            if (Math.abs(rotationY) > 100 || Math.abs(rotationX) > 100) {
                gsap.to(card, {
                    duration: 1.2,
                    ease: "cubic-bezier(.03,.98,.52,.99)",
                    rotationY: 0,
                    rotationX: 0,
                    transformPerspective: 1400,
                    scale: 1
                });
            } else {
                gsap.to(card, {
                    duration: 1.2,
                    ease: "cubic-bezier(.03,.98,.52,.99)",
                    rotationY: rotationY,
                    rotationX: rotationX,
                    transformPerspective: 1400,
                    scale: 1.04
                });
            }
        });
    });
};
cardAnimation();