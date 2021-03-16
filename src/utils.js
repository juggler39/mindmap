export default {

    createRect (offset, size, className) {
        const $rect = document.createElementNS(NS, 'rect');
        $rect.setAttribute('x', offset);
        $rect.setAttribute('y', offset);
        $rect.setAttribute('width', size);
        $rect.setAttribute('height', size);
        $rect.classList.add(className);
        return $rect;
    },

    createNode (className) {
        const $div = document.createElement('div');
        $div.classList.add(className);
        return $div;
    },

    createCircle (options) {
        const $div = document.createElement('div');
        $div.classList.add('mm-circle');
        if (options.image) {
            const $img = document.createElement('img');
            $img.src = options.image;
            $img.classList.add('mm-image');
            $div.appendChild($img);
        }
        if (options.label) {
            const $p = document.createElement('p');
            $p.textContent = options.label;
            $p.classList.add('mm-label');
            $div.appendChild($p);
        }
        if (options.video) {
            const $img = document.createElement('img');
            $img.src = options.map.options.video.image;
            $img.classList.add('mm-video');
            $div.appendChild($img);
        }
        return $div;
    },

    createLine ({ from, to }, center) {
        const $line = document.createElementNS(NS, 'line');
        $line.setAttribute('x1', center + from.x);
        $line.setAttribute('y1', center + from.y);
        $line.setAttribute('x2', center + to.x);
        $line.setAttribute('y2', center + to.y);
        $line.classList.add('mm-line');
        return $line;
    }

}