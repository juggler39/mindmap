import Utils from '@/utils'
import Planet from '@/items/planet'

export default class Orbit {

    constructor (options) {


        // options

        this.index = options.index;
        this.map = options.map;
        this.planets = options.planets || [];
        this.ps = options.ps;
        this.ms = options.ms;

        this.pr = this.map.options.base.r * this.ps;
        this.mr = this.pr * this.ms;
        this.or = this.map.getOrbitRadius(this.index);

        this.oR = Math.sqrt(2) * this.or;
        this.pR = Math.sqrt(2) * (this.pr + this.mr);


        // create planets

        this.planets = options.planets.map((options, index) => {
            return new Planet({
                ...options,
                index,
                orbit: this,
                map: this.map
            })
        });


        // create node

        this.$node = Utils.createRect(this.map.center - this.or, this.or * 2);
        this.map.$lines.appendChild(this.$node);


    }

}