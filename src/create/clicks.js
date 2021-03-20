import Config from '@/config'

export default function (map) {

    const $svg = map.$node.querySelector('svg');
    const $planets = $svg.querySelectorAll('g.mm-planet');
    const $overlay = $svg.querySelector('.mm-overlay');

    let active = null;

    const planets = Array.from($planets).map($planet => {
        const $group = $planet.parentNode;
        const $next = $group.nextElementSibling;
        const $moons = $group.querySelectorAll('.mm-moon');
        const $circle = $group.querySelector('circle');
        const m = +$group.getAttribute('data-moon-margin');
        const r = +$circle.getAttribute('r') + (m || Config.moon.margin) + Config.moon.r;
        const animations = Array.from($moons).map(($moon, i) => {
            const a = Math.PI * 2 / $moons.length * i;
            const x = r * Math.cos(a);
            const y = r * Math.sin(a);
            return gsap.to($moon, { x, y, paused: true, duration: .3 })
        })
        map.animations = map.animations.concat(animations);
        return { $planet, $group, $next, animations }
    })


    planets.forEach(planet => {

        planet.$planet.addEventListener('click', () => {
            active = planet;
            $overlay.style.display = 'block';
            $svg.appendChild(active.$group);
            active.animations.forEach(animation => animation.play());
        })

    })

    $overlay.addEventListener('click', () => {
        if (!active) return;
        active.animations.forEach(animation => animation.reverse());
        $svg.insertBefore(active.$group, active.$next);
        $overlay.style.display = 'none';
    })



}