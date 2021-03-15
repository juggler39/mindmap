import './index.css'

export default function ($svg, config) {



    // ----------------------
    // Node creators
    // ----------------------

    function createRect (offset, size) {
        const $rect = document.createElementNS(NS, 'rect');
        $rect.setAttribute('x', offset);
        $rect.setAttribute('y', offset);
        $rect.setAttribute('width', size);
        $rect.setAttribute('height', size);
        return $rect;
    }

    function createCircle (x, y, r) {
        const $circle = document.createElementNS(NS, 'circle'); // has bg + test
        $circle.setAttribute('cx', x);
        $circle.setAttribute('cy', y);
        $circle.setAttribute('r', r);
        return $circle;
    }



    // ----------------------
    // Configuration
    // ----------------------


    // planet and moon radiuses

    const orbits = config.orbits.map(options => {
        const pr = config.base.r * options.ps;
        const mr = pr * options.ms;
        return { pr, mr, planets: options.planets }
    })


    // orbits radius

    orbits.forEach((orbit, index) => {
        let prev = orbits[index - 1];
        if (!prev) prev = { or: 0, pr: config.base.r }
        orbit.or = prev.or + prev.pr + orbit.pr;
    })


    // svg size

    const last = orbits[orbits.length - 1];
    const center = last.or + last.pr + last.mr;
    const size = center * 2;



    // ----------------------
    // Create nodes
    // ----------------------

    orbits.forEach(orbit => {


        // create rect

        const offset = center - orbit.or;
        const size = orbit.or * 2;
        orbit.$node = createRect(offset, size);


        // planet options

        const oR = Math.sqrt(2) * orbit.or;
        const pR = Math.sqrt(2) * orbit.pr + orbit.mr;
        const minp = center - orbit.or;
        const maxp = center + orbit.or;


        // create planets

        orbit.planets.forEach((planet, pi) => {

            const pa = Math.PI / 4 + Math.PI * 2 / orbit.planets.length * pi;
            let px = center + oR * Math.cos(pa);
            let py = center + oR * Math.sin(pa);
            px = Math.min(Math.max(px, minp), maxp);
            py = Math.min(Math.max(py, minp), maxp);
            planet.$node = createCircle(px, py, orbit.pr);


            // create moons

            planet.moons.forEach((moon, mi) => {
                const ma = Math.PI * 2 / planet.moons.length * mi;
                let mx = px + pR * Math.cos(ma);
                let my = py + pR * Math.sin(ma);
                moon.$node = createCircle(mx, my, orbit.mr);
            })


        })

    })



    // ----------------------
    // Append nodes
    // ----------------------

    orbits.forEach(orbit => {
        $svg.appendChild(orbit.$node);
    })

    orbits.forEach(orbit => {
        orbit.planets.forEach(planet => {
            $svg.appendChild(planet.$node);
        })
    })

    orbits.forEach(orbit => {
        orbit.planets.forEach(planet => {
            planet.moons.forEach(moon => {
                $svg.appendChild(moon.$node);
            })
        })
    })





    // dashed lines

    $svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

    // svg.appendChild(this.sun.$node)




}