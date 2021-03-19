import '@/index.css'
import SVG from '@/index.svg'
import createBorders from '@/create/borders'
import createLines from '@/create/lines'

export default class MindMap {



    // ----------------------
    // Constructor
    // ----------------------

    constructor ($node, options) {

        $node.classList.add('mm');
        $node.innerHTML = SVG;

        createBorders(this);
        createLines(this);



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