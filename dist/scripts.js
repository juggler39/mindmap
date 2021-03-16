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
        const zw = $zoom.offsetWidth;
        const zh = $zoom.offsetHeight;
        const mw = $map.offsetWidth;
        const mh = $map.offsetHeight;
        const s = Math.min(zw / mw, zh / mh);
        $map.style.transform = ` scale(${s}) translate(-50%, -50%)`;
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

    const $video = document.getElementById('video');

    map.on('video', planet => {
        const rect = planet.$node.getBoundingClientRect();
        $video.style.left = window.scrollX + rect.left + rect.width / 2 + 'px'
        $video.style.top = window.scrollY + rect.top + rect.height / 2 + 'px'
        $video.src = planet.video.src;
        $video.height = planet.video.height;
        $video.width = planet.video.width;
        $video.style.display = 'block';
    })


    document.addEventListener('click', event => {
        let parent = event.target;
        while (parent) {
            if (parent === $video) return;
            parent = parent.parentNode;
        }
        $video.style.display = 'none';
        $video.src = '';
    }, true);



})();