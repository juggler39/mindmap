export default function (map) {


    // activate

    map.on('activate', planet => {
        map.planets.forEach(_planet => {
            if (_planet === planet) _planet.activate();
            else _planet.deactivate();
        });
        map.$overlay.style.opacity = 0.7;
        map.$overlay.style.zIndex = 1;
    })


    // deactivate

    map.$node.addEventListener('click', event => {
        let parent = event.target;
        while (parent && parent.classList) {
            if (parent.classList.contains('mm-circle')) return;
            parent = parent.parentNode;
        }
        map.emit('deactivate');
    })


    map.on('deactivate', () => {
        map.planets.forEach(planet => {
            if (planet.active) planet.deactivate();
        });
        map.$overlay.style.opacity = '';
        map.$overlay.style.zIndex = '';
    })


}