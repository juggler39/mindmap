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


        // create planets

        this.planets = options.planets.map((options, index) => {
            return new Planet({
                ...options,
                index,
                orbit: this,
                map: this.map
            })
        });


        // create nodes

        this.$node = Utils.createRect(this.map.center - this.or, this.or * 2, 'mm-rect');
        this.$stroke = Utils.createRect(this.map.center - this.or, this.or * 2, 'mm-stroke');
        this.map.$lines.appendChild(this.$node);
        this.map.$lines.appendChild(this.$stroke);

        const length = this.$node.getTotalLength();
        const duration = 1 + Math.random();

        this.$stroke.style.strokeDasharray = length / 4;
        this.$stroke.style.animationDuration = duration + 's';
        this.$stroke.style.animationDelay = -duration * Math.random() + 's';
        this.$stroke.style.setProperty('--offset', -length / 2 + 'px');

    }

}