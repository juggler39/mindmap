import '@/index.css'
import Orbit from '@/items/orbit'

export default class MindMap {



    // ----------------------
    // Constructor
    // ----------------------

    constructor ($node, options) {


        // options

        this.options = options;


        // center

        const lastIndex = this.options.orbits.length - 1;
        const lastOrbit = this.options.orbits[lastIndex];
        const lastPR = this.options.base.r * lastOrbit.ps * Math.sqrt(2);
        const lastMr = this.options.base.r * lastOrbit.ps * lastOrbit.ms;
        this.center = this.getOrbitRadius(lastIndex) + lastPR + lastMr * 2;
        this.size = this.center * 2;


        // root node

        this.$node = $node;
        this.$node.style.width = this.size + 'px';
        this.$node.style.height = this.size + 'px';
        this.$node.classList.add('mm');
        this.$node.style.setProperty('--r', this.options.base.r + 'px');
        this.$node.style.setProperty('--f', this.options.base.f + 'px');


        // lines node

        this.$lines = document.createElementNS(NS, 'svg');
        this.$lines.setAttribute('viewBox', `0 0 ${this.size} ${this.size}`);
        this.$lines.classList.add('mm-lines');
        this.$node.appendChild(this.$lines);


        // items node

        this.$items = document.createElement('div');
        this.$items.classList.add('mm-items');
        this.$node.appendChild(this.$items);


        // create orbits

        this.orbits = this.options.orbits.map((orbit, index) => {
            return new Orbit({
                ...orbit,
                index,
                map: this
            });
        });

    }



    // ----------------------
    // Helpers
    // ----------------------

    getOrbitRadius (index) {
        const { base, orbits } = this.options;
        const slice = orbits.slice(0, index);
        const prev = slice.length ? slice.reduce((result, orbit) => result + orbit.ps * base.r * 2, 0) : 0;
        return base.r + prev + orbits[index].ps * base.r;
    }

}