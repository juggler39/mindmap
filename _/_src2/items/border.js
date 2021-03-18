function render (w, h, index, gradient, rect, arcs) {
    return `
    <svg viewBox="0 0 ${w} ${h}">
        ${gradient}
        <rect stroke="url(#g${index})" x="${rect.offset}" y="${rect.offset}" width="${rect.width}" height="${rect.height}" />
        ${arcs.join('.')}
        ${arcs.map(arc => `<path stroke="url(#g${index})" d="${arc.arc}" transform="${arc.transform}" />`)}         
    </svg>`
}

function getCoords (cx, cy, r, deg) {
    const rad = deg * Math.PI / 180;
    return {
        x: cx + (r * Math.cos(rad)),
        y: cy + (r * Math.sin(rad))
    };
}

function getArc (cx, cy, r, a1, a2, sweep, la) {
    const p1 = getCoords(cx, cy, r, a2);
    const p2 = getCoords(cx, cy, r, a1);
    if (la === undefined) la = a2 - a1 <= 180 ? "0" : "1";
    return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${la} ${sweep} ${p2.x} ${p2.y}`
}

function getPlanetArcs (options, center, r) {


    let arcs = [];

    if (options.cornered) {
        const transform = `rotate(${options.angle} ${options.cx} ${options.cy})`
        const a1 = getArc(options.cx, options.cy, r, 0, -260, 1, 1);
        const a2 = getArc(options.cx, options.cy, r, 0, 80, 0);
        arcs[0] = {};
        arcs[0].arc = a1;
        arcs[0].transform = transform;
        arcs[1] = {};
        arcs[1].arc = a2;
        arcs[1].transform = transform;
    }
    else {
        const transform = `rotate(${options.angle} ${options.cx} ${options.cy})`
        const a1 = getArc(options.cx, options.cy, r, 0, 170, 0);
        const a2 = getArc(options.cx, options.cy, r, 0, -170, 1);
        arcs[0] = {};
        arcs[0].arc = a1;
        arcs[0].transform = transform;
        arcs[1] = {};
        arcs[1].arc = a2;
        arcs[1].transform = transform;
    }

    return arcs;

    // console.log(logposition, lined)
}


export default class Border {

    constructor (orbit, index, map) {


        const offset = orbit.offset - orbit.pr - map.stroke;

        this.$node = document.createElement('div');
        this.$node.style.left = offset + 'px';
        this.$node.style.right = offset + 'px';
        this.$node.style.top = offset + 'px';
        this.$node.style.bottom = offset + 'px';
        this.$node.classList.add('mm-rect');

        let rect = {};
        rect.offset = map.stroke + orbit.pr;
        rect.width = map.width - offset * 2 - rect.offset * 2;
        rect.height = map.height - offset * 2 - rect.offset * 2;

        const arcs = map.planets.filter(planet => planet.orbit === index).map(planet => {

            let options = {};
            if (planet.position.right === 0) options.cx = rect.offset + rect.width;
            if (planet.position.left === 0) options.cx = rect.offset;
            if (planet.position.left === '50%') options.cx = rect.offset + rect.width / 2;
            if (planet.position.bottom === 0) options.cy = rect.offset + rect.height;
            if (planet.position.top === 0) options.cy = rect.offset;
            if (planet.position.top === '50%') options.cy = rect.offset + rect.height / 2;

            if (planet.position.left === 0 && planet.position.top === '50%') options.angle = -90;
            if (planet.position.bottom === 0 && planet.position.left === '50%') options.angle = -180;
            if (planet.position.right === 0 && planet.position.top === '50%') options.angle = -270;
            if (planet.position.top === 0 && planet.position.left === '50%') options.angle = 0;

            if (planet.position.left === 0 && planet.position.top === 0) options.angle = 0;
            if (planet.position.bottom === 0 && planet.position.left === 0) options.angle = -90;
            if (planet.position.bottom === 0 && planet.position.right === 0) options.angle = -180;
            if (planet.position.top === 0 && planet.position.right === 0) options.angle = -270;

            options.cornered = !Object.keys(planet.position).find(prop => planet.position[prop] === '50%');

            return getPlanetArcs(options, orbit.pr + map.stroke, orbit.pr + map.stroke / 2)
        }).flat();






        this.$node.innerHTML = render(map.width - offset * 2, map.height - offset * 2, index, orbit.gradient, rect, arcs);


        // const $rect = this.$node.querySelector('')





        //
        // const $svg = document.createElementNS(NS, 'svg');
        // this.$node.appendChild($svg);
        //
        // const ro = map.stroke + orbit.pr;
        // const rw = map.width - offset * 2 - ro * 2;
        // const rh = map.height - offset * 2 - ro * 2;
        //
        // console.log(map.width)
        //
        // const $rect = document.createElementNS(NS, 'rect');
        // $rect.setAttribute('x', ro);
        // $rect.setAttribute('y', ro);
        // $rect.setAttribute('width', rw);
        // $rect.setAttribute('height', rh);
        // $rect.setAttribute('fill', 'none');
        // $rect.setAttribute('fill', `url(${orbit.fill})`);
        // $svg.appendChild($rect);
        //
        map.$node.appendChild(this.$node);



        // const planets = map.planets.filter(planet => planet.orbit === index);
        //
        // planets.forEach(planet => {
        //
        //     // const $circle = document.createElementNS(NS, 'svg');
        //     // $circle.style.top = planet.$node.style.top;
        //     // $circle.style.bottom = planet.$node.style.bottom;
        //     // $circle.style.left = planet.$node.style.left;
        //     // $circle.style.right = planet.$node.style.right;
        //     // $circle.setAttribute('class', planet.$node.className);
        //     // map.$node.appendChild($circle);
        //
        // })
        //
        // console.log(planets)


        //
        // // options
        //
        // this.index = options.index;
        // this.map = options.map;
        // this.planets = options.planets || [];
        // this.ps = options.ps;
        // this.ms = options.ms;
        //
        // this.pr = this.map.options.base.r * this.ps;
        // this.mr = this.pr * this.ms;
        // this.or = this.map.getOrbitRadius(this.index);
        // this.oR = Math.sqrt(2) * this.or;
        //
        //
        // // create planets
        //
        // this.planets = options.planets.map((options, index) => {
        //     return new Planet({
        //         ...options,
        //         index,
        //         orbit: this,
        //         map: this.map
        //     })
        // });
        //
        //
        // // create nodes
        //
        // this.$node = Utils.createRect(this.map.center - this.or, this.or * 2, 'mm-rect');
        // this.$stroke = Utils.createRect(this.map.center - this.or, this.or * 2, `mm-stroke`);
        // this.$stroke.classList.add(`level-${this.index}`);
        //
        //
        // this.map.$lines.appendChild(this.$node);
        // this.map.$lines.appendChild(this.$stroke);
        //
        // const length = this.$node.getTotalLength();
        // const duration = length / 1000;
        //
        // this.$stroke.style.strokeDasharray = length / 4;
        // this.$stroke.style.animationDuration = duration + 's';
        // this.$stroke.style.animationDelay = -duration * Math.random() + 's';
        // this.$stroke.style.setProperty('--offset', -length / 2 + 'px');

    }

}