import Utils from '@/utils'
import Moon from '@/items/moon'

export default class Planet {

    constructor (options) {

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

        this.$node = Utils.createCircle(this.x, this.y, this.orbit.ps);
        this.$node.classList.add('mm-planet');

        this.moons = this.moons.map((options, index) => {
            return new Moon({
                ...options,
                index,
                planet: this,
                map: this.map
            })
        })

        this.$image = Utils.createImage(this.image);
        this.$label = Utils.createLabel(this.label);
        this.$node.appendChild(this.$image);
        this.$node.appendChild(this.$label);
        this.map.$items.appendChild(this.$node);

    }

}