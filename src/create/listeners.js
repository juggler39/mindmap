import Config from '@/config'

export default function (map) {



    // ----------------------
    // Helpers
    // ----------------------

    function find (className, $node) {
        while ($node && $node.classList) {
            if ($node.classList.contains(className)) return $node;
            $node = $node.parentNode;
        }
    }



    // ----------------------
    // Elements
    // ----------------------

    const $svg = map.$node.querySelector('svg');
    const $planets = $svg.querySelectorAll('g.mm-planet');
    const $overlay = $svg.querySelector('.mm-overlay');



    // ----------------------
    // Planets
    // ----------------------

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



    // ----------------------
    // Variables
    // ----------------------

    let active = {}



    // ----------------------
    // Video
    // ----------------------

    function clickVideo ($video) {
        const $node = $video.parentNode;
        const src = $video.getAttribute('data-video-src');
        const width = +$video.getAttribute('data-video-width');
        const height = +$video.getAttribute('data-video-height');
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        map.emit('activate:video', { $node, video: { src, width, height } });
    }



    // ----------------------
    // Planet
    // ----------------------

    function getNote ($node) {
        return {
            $node,
            note: $node.querySelector('.mm-note').textContent,
            title: $node.querySelector('.mm-title').textContent
        }
    }

    function clickPlanet ($planet) {
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        if (active.planet) {
            if (active.planet.$planet !== $planet) map.emit('deactivate:planet');
            else return map.emit('activate:note', getNote(active.planet.$group));
        }
        const planet = planets.find(planet => planet.$planet === $planet);
        map.emit('activate:planet', planet);
    }

    function clickMoon ($moon) {
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        map.emit('activate:note', getNote($moon));
    }



    // ----------------------
    // Click listener
    // ----------------------

    map.$node.addEventListener('click', event => {
        const $video = find('mm-video', event.target);
        if ($video) return clickVideo($video);
        const $planet = find('mm-planet', event.target);
        if ($planet) return clickPlanet($planet);
        const $moon = find('mm-moon', event.target);
        if ($moon) return clickMoon($moon);
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        if (active.planet) map.emit('deactivate:planet');
    })

    map.$node.addEventListener('click', event => {
        const shown = Object.keys(active).some(key => active[key]);
        $overlay.style.display = shown ? 'block' : 'none'
    })


    // ----------------------
    // Map listener
    // ----------------------

    map.on('activate:video', video => {
        active.video = video;
    })

    map.on('deactivate:video', () => {
        active.video = null;
        const shown = Object.keys(active).some(key => active[key]);
        console.log(shown)
        $overlay.style.display = shown ? 'block' : 'none'
    })

    map.on('activate:planet', planet => {
        $svg.appendChild(planet.$group);
        planet.animations.forEach(animation => animation.play());
        active.planet = planet;
    })

    map.on('deactivate:planet', () => {
        active.planet.animations.forEach(animation => animation.reverse());
        $svg.insertBefore(active.planet.$group, active.planet.$next);
        active.planet = null;
    })

    map.on('activate:note', note => {
        active.note = note;
    })

    map.on('deactivate:note', () => {
        active.note = null;
    })


}