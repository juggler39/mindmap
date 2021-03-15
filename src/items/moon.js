import Utils from '@/utils'

export default class Moon {

    constructor (options) {

        this.index = options.index;
        this.label = options.label;
        this.note = options.note;
        this.map = options.map;
        this.planet = options.planet;

        this.a = Math.PI * 2 / this.planet.moons.length * this.index;
        this.x = this.map.options.base.r * Math.cos(this.a);
        this.y = this.map.options.base.r * Math.sin(this.a);

        this.$node = Utils.createCircle(this.x, this.y, this.planet.orbit.ms);
        this.$node.classList.add('mm-moon');
        this.$label = Utils.createLabel(this.label);
        this.$node.appendChild(this.$label);
        this.planet.$node.appendChild(this.$node);

    }

}