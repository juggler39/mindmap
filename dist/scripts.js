(() => {



    // ----------------------
    // Constants
    // ----------------------

    const $section = document.querySelector('section');
    const $note = document.getElementById('note');
    const $zoom = document.getElementById('zoom');
    const $map = document.getElementById('map');
    const map = new MindMap($map, MapConfig);



    // ----------------------
    // Resize
    // ----------------------

    function resize () {
        const section = getComputedStyle($section);
        const note = getComputedStyle($note);
        const spl = parseFloat(section.getPropertyValue('padding-left'));
        const spr = parseFloat(section.getPropertyValue('padding-right'));
        const spt = parseFloat(section.getPropertyValue('padding-top'));
        const spb = parseFloat(section.getPropertyValue('padding-bottom'));
        const nw = parseFloat(note.getPropertyValue('width'));
        const nmr = parseFloat(note.getPropertyValue('margin-right'));
        const sw = $section.offsetWidth - spl - spr - nw - nmr;
        const sh = $section.offsetHeight - spt - spb;
        const mw = $map.offsetWidth;
        const mh = $map.offsetHeight;
        const s = Math.min(sw / mw, sh / mh);
        $zoom.style.width = mw * s + 'px';
        $zoom.style.height = mh * s + 'px';
        $map.style.transform = `scale(${s})`;
    }

    window.addEventListener('resize', resize);
    resize();



    // ----------------------
    // Note
    // ----------------------


    const $noteTitle = $note.querySelector('h1');
    const $noteText = $note.querySelector('p');

    map.on('click', item => {
        $note.style.display = 'block';
        $noteTitle.textContent = item.label;
        $noteText.textContent = item.note;
    })



})();