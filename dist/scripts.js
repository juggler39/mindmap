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
        const spl = parseFloat(section.getPropertyValue('padding-left'));
        const spr = parseFloat(section.getPropertyValue('padding-right'));
        const spt = parseFloat(section.getPropertyValue('padding-top'));
        const spb = parseFloat(section.getPropertyValue('padding-bottom'));
        const sw = $section.offsetWidth - spl - spr ;
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
    const $noteClose = $note.querySelector('a');

    function showNote (item) {
        const rect = item.$node.getBoundingClientRect();
        $note.style.left = window.scrollX + rect.left + rect.width / 2 + 'px'
        $note.style.top = window.scrollY + rect.top + rect.height / 2 + 'px'
        $noteTitle.textContent = item.label;
        $noteText.textContent = item.note;
        $note.style.display = 'block';
    }

    function hideNote () {
        $note.style.display = 'none';
    }

    function outsideNote (event) {
        let parent = event.target;
        while (parent) {
            if (parent === $note) return;
            parent = parent.parentNode;
        }
        hideNote();
    }

    map.on('click', showNote)
    $noteClose.addEventListener('click', hideNote);
    document.addEventListener('click', outsideNote, true);



    // ----------------------
    // Video
    // ----------------------

    map.on('video', src => {
        console.log(src);
    })



})();