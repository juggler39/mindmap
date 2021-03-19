(() => {



    // ----------------------
    // Constants
    // ----------------------

    const $section = document.querySelector('section');
    const $note = document.getElementById('note');
    const $container = document.getElementById('container');
    const $map = document.getElementById('map');
    const map = new MindMap($map, {
        imagesFolder: 'images/png'
    });

    window.addEventListener('resize', () => {
        map.destroy();
        map.init();
    });

})();