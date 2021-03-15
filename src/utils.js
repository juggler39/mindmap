export default {

    createRect (offset, size) {
        const $rect = document.createElementNS(NS, 'rect');
        $rect.setAttribute('x', offset);
        $rect.setAttribute('y', offset);
        $rect.setAttribute('width', size);
        $rect.setAttribute('height', size);
        $rect.classList.add('mm-rect');
        return $rect;
    },

    createCircle (x, y, s) {
        const $div = document.createElement('div');
        $div.style.transform = `translate(${x}px, ${y}px) scale(${s})`
        $div.classList.add('mm-circle');
        return $div;
    },

    createImage (image) {
        const $img = document.createElement('img');
        $img.src = image;
        $img.classList.add('mm-image');
        return $img;
    },

    createLabel (label) {
        const $p = document.createElement('p');
        $p.textContent = label;
        $p.classList.add('mm-label');
        return $p;
    }

}