import '@/index.css'

export default class MindMap {



    // ----------------------
    // Constructor
    // ----------------------

    constructor ($node, options) {


        // // options
        //
        // this.$node = $node;
        // this.sr = options.sr;
        // this.si = options.si;
        // this.vi = options.vi;
        // this.stroke = options.stroke;
        // this.scale = 1;
        //
        //
        // // orbits configuration
        //
        // this.orbits = options.orbits.map(orbit => {
        //     const pr = this.sr * orbit.ps;
        //     const pR = pr * Math.sqrt(2);
        //     const mr = pr * orbit.ms;
        //     return { pr, pR, mr, ...orbit }
        // })
        //
        // this.orbits.slice().reverse().forEach((orbit, i, orbits) => {
        //     const prev = orbits[i - 1];
        //     if (prev) orbit.offset = prev.offset + prev.pr + orbit.pr;
        //     else orbit.offset = orbit.mr * 2 + orbit.pR;
        // })
        //
        //
        // // set size
        //
        // this.size = (this.orbits[0].offset + this.orbits[0].pr + this.sr) * 2;
        // this.resize();
        // // function resize () {
        // //     map.resize($container.offsetWidth, $container.offsetHeight)
        // // }
        // //
        // // window.addEventListener('resize', resize);
        //
        //
        // // create planets
        //
        // this.planets = options.planets.map(planet => {
        //     return new Planet(planet, this);
        // });
        //
        //
        // // create borders
        //
        // this.borders = this.orbits.map((orbit, index) => {
        //     return new Border(orbit, index, this);
        // })
        //
        //
        // this.lines = [];
        // this.sun = {};
        //
        // this.$node.classList.add('mm');
        // this.$node.style.setProperty('--radius', this.sr + 'px');


    }



    // ----------------------
    // Helpers
    // ----------------------

    getOrbitRadius (index) {
        const { sr, orbits } = this.options;
        const slice = orbits.slice(0, index);
        const prev = slice.length ? slice.reduce((result, orbit) => result + orbit.ps * sr * 2, 0) : 0;
        return sr + prev + orbits[index].ps * sr;
    }

    // get planets () {
    //     return this.orbits.map(orbit => orbit.planets).flat();
    // }



    // ----------------------
    // Events
    // ----------------------

    on (event, handler) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(handler);
    }

    off (event, handler) {
        if (!this.listeners[event]) return;
        const index = this.listeners[event].indexOf(handler);
        if (index > -1) this.listeners[event].splice(index, 1);
    }

    emit (event, param) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach(handler => handler(param, this));
    }



    // ----------------------
    // API
    // ----------------------

    resize () {
        const sw = this.$node.parentNode.offsetWidth / this.size;
        const sh = this.$node.parentNode.offsetHeight / this.size;
        this.scale = Math.min(sw, sh);
        this.width = this.size / (this.scale / sw);
        this.height = this.size / (this.scale / sh);
        this.$node.style.width = this.width + 'px';
        this.$node.style.height = this.height + 'px';
        this.$node.style.transform = `translate(-50%, -50%) scale(${this.scale})`;
    }



}