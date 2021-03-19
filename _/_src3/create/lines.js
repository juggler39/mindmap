export default function (map) {

    const $lines = document.querySelectorAll('.mm-line');

    Array.from($lines).forEach($line => {
        gsap.to($line, {
            strokeDashoffset: -18,
            repeat: -1,
            ease: Power0.easeNone,
            duration: 1
        })
    })
}