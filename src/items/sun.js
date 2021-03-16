import Utils from '@/utils'

export default class Sun {

    constructor (options) {


        // options

        this.image = options.image;
        this.map = options.map;


        // create node

        this.$node = Utils.createCircle(this);
        this.map.$items.appendChild(this.$node);


        // listeners

        this.$node.addEventListener('click', () => {
            this.map.planets.forEach(planet => {
                planet.deactivate();
            })
        })

    }

}