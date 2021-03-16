import Utils from '@/utils'

export default class Moon {



    // ----------------------
    // Constructor
    // ----------------------

    constructor (options) {


        // options

        this.index = options.index;
        this.label = options.label;
        this.note = options.note;
        this.map = options.map;
        this.planet = options.planet;


        // coordinates

        const br = this.map.options.base.r;
        const mr = br * Math.sqrt(2) + br * this.planet.orbit.ms
        this.a = Math.PI * 2 / this.planet.moons.length * this.index;
        this.x = mr * Math.cos(this.a);
        this.y = mr * Math.sin(this.a);


        // create node

        this.$node = Utils.createCircle(this);
        this.$node.classList.add('mm-moon');
        this.planet.$node.appendChild(this.$node);
        this.deactivate();


        // listeners

        this.$node.addEventListener('click', () => {
            this.map.emit('click', this);
        })

    }



    // ----------------------
    // Methods
    // ----------------------

    deactivate () {
        this.$node.style.transform = `translate(0px, 0px) scale(${this.planet.orbit.ms})`
    }

    activate () {
        this.$node.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.planet.orbit.ms})`
    }

}