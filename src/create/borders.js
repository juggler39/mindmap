// ----------------------
// Arc animations
// ----------------------

function playArc ($node, { delay, duration, length  }, { dash, offset, angle, seek }, map) {

    const ease = Power0.easeNone;
    const cx = $node.getAttribute('cx');
    const cy = $node.getAttribute('cy');

    $node.setAttribute('transform', `rotate(${angle} ${cx} ${cy})`)
    $node.setAttribute('stroke-dasharray', `${dash} ${length}`);
    $node.setAttribute('stroke-dashoffset', `${offset[0]}`);

    const animation = gsap.timeline({ repeat: -1 })
        .to($node, { duration, ease, strokeDashoffset: offset[1] })
        .to({}, delay, {})
        .to($node, { duration, ease, strokeDashoffset: offset[2] })
        .to({}, delay, {})
        .seek(seek);
    
    map.animations.push(animation);
}



// ----------------------
// Rect animations
// ----------------------

function playRect ($node, { length, duration }, map) {
    $node.setAttribute('stroke-dasharray', length / 2);
    const animation = gsap.to($node, {
        strokeDashoffset: length,
        repeat: -1,
        ease: Power0.easeNone,
        duration
    })
    map.animations.push(animation);
}



// ----------------------
// Calculations
// ----------------------

const SM = length => {
    const dash = length / 4;
    const offset = [dash, 0, -dash]
    return { dash, offset}
}

const LG = length => {
    const dash = length / 4 * 3;
    const offset = [-length, -length + dash, -length + dash + dash]
    return { dash, offset}
}

const MB = length => {
    const dash = length / 2;
    const offset = [dash, 0, -dash]
    return { dash, offset}
}

const MT = length => {
    const dash = length / 2;
    const offset = [dash, dash * 2, dash * 3]
    return { dash, offset}
}

const Circle = ($node, rect) => {
    const length = $node.getTotalLength();
    const radius = +$node.getAttribute('r');
    const duration = radius * 2 / rect.length * rect.duration;
    const delay = rect.duration / 2 - duration;
    return { length, radius, duration, delay, sm: SM(length), lg: LG(length), mb: MB(length), mt: MT(length) }
}

const Rect = $node => {
    const length = $node.getTotalLength();
    const width = +$node.getAttribute('width');
    const height = +$node.getAttribute('height');
    const duration = length / 100;
    return { length, width, height, duration }
}



// ----------------------
// Border Class
// ----------------------

class Border {

    constructor ($border) {
        this.$rect = $border.querySelector('rect');
        this.$circle = $border.querySelector('circle');
        this.rect = Rect(this.$rect);
        this.circle = Circle(this.$circle, this.rect);
    }

    toTime (distance) {
        return distance / this.rect.length * this.rect.duration
    }

    getAngle (index) {
        switch (index) {
            case 0: return 0;
            case 1: return -90;
            case 2: return -90;
            case 3: return -180;
            case 4: return -180;
            case 5: return -270;
            case 6: return -270;
            case 7: return 0;
        }
    }

    getSeek (index) {
        switch (index) {
            case 0: return this.toTime(this.circle.radius);
            case 1: return this.toTime(this.rect.width + this.rect.height + this.rect.width + this.rect.height / 2 + this.circle.radius);
            case 2: return this.toTime(this.rect.width + this.rect.height + this.rect.width + this.circle.radius);
            case 3: return this.toTime(this.rect.width + this.rect.height + this.rect.width / 2 + this.circle.radius);
            case 4: return this.toTime(this.rect.width + this.rect.height + this.circle.radius);
            case 5: return this.toTime(this.rect.width + this.rect.height / 2 + this.circle.radius);
            case 6: return this.toTime(this.rect.width + this.circle.radius);
            case 7: return this.toTime(this.rect.width / 2 + this.circle.radius);
        }
    }

    getArc (type, index) {
        return {
            dash: this.circle[type].dash,
            offset: this.circle[type].offset,
            angle: this.getAngle(index),
            seek: this.getSeek(index)
        }
    }

}



// ----------------------
// Borders
// ----------------------

function b1 (map) {
    const $border = document.getElementById('b1');
    const $lg = $border.querySelectorAll('.mm-lg');
    const $sm = $border.querySelectorAll('.mm-sm');
    const border = new Border($border);
    playRect(border.$rect, border.rect, map);
    playArc($lg[0], border.circle, border.getArc('lg', 0), map);
    playArc($lg[1], border.circle, border.getArc('lg', 2), map);
    playArc($lg[2], border.circle, border.getArc('lg', 4), map);
    playArc($lg[3], border.circle, border.getArc('lg', 6), map);
    playArc($sm[0], border.circle, border.getArc('sm', 0), map);
    playArc($sm[1], border.circle, border.getArc('sm', 2), map);
    playArc($sm[2], border.circle, border.getArc('sm', 4), map);
    playArc($sm[3], border.circle, border.getArc('sm', 6), map);
}

function b2 (map) {
    const $border = document.getElementById('b2');
    const $lg = $border.querySelectorAll('.mm-lg');
    const $sm = $border.querySelectorAll('.mm-sm');
    const $mt = $border.querySelectorAll('.mm-mt');
    const $mb = $border.querySelectorAll('.mm-mb');
    const border = new Border($border);
    playRect(border.$rect, border.rect, map);
    playArc($lg[0], border.circle, border.getArc('lg', 0), map);
    playArc($lg[1], border.circle, border.getArc('lg', 2), map);
    playArc($lg[2], border.circle, border.getArc('lg', 4), map);
    playArc($lg[3], border.circle, border.getArc('lg', 6), map);
    playArc($sm[0], border.circle, border.getArc('sm', 0), map);
    playArc($sm[1], border.circle, border.getArc('sm', 2), map);
    playArc($sm[2], border.circle, border.getArc('sm', 4), map);
    playArc($sm[3], border.circle, border.getArc('sm', 6), map);
    playArc($mt[0], border.circle, border.getArc('mt', 1), map);
    playArc($mt[1], border.circle, border.getArc('mt', 3), map);
    playArc($mt[2], border.circle, border.getArc('mt', 5), map);
    playArc($mt[3], border.circle, border.getArc('mt', 7), map);
    playArc($mb[0], border.circle, border.getArc('mb', 1), map);
    playArc($mb[1], border.circle, border.getArc('mb', 3), map);
    playArc($mb[2], border.circle, border.getArc('mb', 5), map);
    playArc($mb[3], border.circle, border.getArc('mb', 7), map);
}

function b3 (map) {
    const $border = document.getElementById('b3');
    const $lg = $border.querySelectorAll('.mm-lg');
    const $sm = $border.querySelectorAll('.mm-sm');
    const border = new Border($border);
    playRect(border.$rect, border.rect, map);
    playArc($lg[0], border.circle, border.getArc('lg', 0), map);
    playArc($lg[1], border.circle, border.getArc('lg', 2), map);
    playArc($lg[2], border.circle, border.getArc('lg', 4), map);
    playArc($lg[3], border.circle, border.getArc('lg', 6), map);
    playArc($sm[0], border.circle, border.getArc('sm', 0), map);
    playArc($sm[1], border.circle, border.getArc('sm', 2), map);
    playArc($sm[2], border.circle, border.getArc('sm', 4), map);
    playArc($sm[3], border.circle, border.getArc('sm', 6), map);
}



// ----------------------
// Exports
// ----------------------

export default function (map) {
    b1(map);
    b2(map);
    b3(map);
}