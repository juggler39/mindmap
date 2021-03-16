import Utils from '@/utils'
import Moon from '@/items/moon'

export default class Planet {



    // ----------------------
    // Constructor
    // ----------------------

    constructor (options) {


        // options

        this.index = options.index;
        this.image = options.image;
        this.label = options.label;
        this.note = options.note;
        this.orbit = options.orbit;
        this.map = options.map;
        this.moons = options.moons || [];

        this.a = Math.PI / 4 + Math.PI * 2 / this.orbit.planets.length * this.index;
        this.x = this.orbit.oR * Math.cos(this.a);
        this.y = this.orbit.oR * Math.sin(this.a);
        this.x = Math.min(Math.max(this.x, -this.orbit.or), this.orbit.or);
        this.y = Math.min(Math.max(this.y, -this.orbit.or), this.orbit.or);


        // create container

        this.$node = Utils.createNode('mm-item');
        this.$node.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.orbit.ps})`


        // create moons

        this.moons = this.moons.map((options, index) => {
            return new Moon({
                ...options,
                index,
                planet: this,
                map: this.map
            })
        })


        // create planet

        this.$planet = Utils.createCircle(this);
        this.$planet.classList.add('mm-planet');
        this.$node.appendChild(this.$planet);
        this.map.$items.appendChild(this.$node);


        // listeners

        this.$planet.addEventListener('click', () => {
            if (this.active) return this.map.emit('click', this);
            this.map.planets.forEach(planet => planet.deactivate());
            this.activate();
        })


    }



    // ----------------------
    // Methods
    // ----------------------

    activate () {
        this.active = true;
        this.$node.style.zIndex = 1;
        this.moons.forEach(moon => moon.activate());
    }

    deactivate () {
        this.active = false;
        this.$node.style.zIndex = '';
        this.moons.forEach(moon => moon.deactivate());
    }

}