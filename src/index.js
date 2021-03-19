import '@/index.css'
import Config from '@/config'
import SVG from '@/svg'
import createBorders from '@/create/borders'
import createLines from '@/create/lines'
import createClicks from '@/create/clicks'

export default class MindMap {



    // ----------------------
    // Constructor
    // ----------------------

    constructor ($node, options) {
        this.$node = $node;
        this.$node.classList.add('mm');
        this.animations = [];
        this.options = options
        this.init();
    }

    init () {
        const nw = this.$node.offsetWidth;
        const nh = this.$node.offsetHeight;
        const s = Math.min(nw, nh) / Config.size;
        const w = nw / s;
        const h = nh / s;
        const x = (w - Config.size) / 6;
        const y = (h - Config.size) / 6;        
        const dir = this.options.imagesFolder;
        this.$node.innerHTML = SVG({ w, h, x, y, dir });
        createBorders(this);
        createLines(this);
        createClicks(this);
    }
    
    destroy () {
        this.animations.forEach(animation => animation.kill());
    }






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



}