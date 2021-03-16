export default function (map) {


    // activate

    map.on('activate', planet => {
        map.planets.forEach(_planet => {
            if (_planet === planet) _planet.activate();
            else _planet.deactivate();
        });
        map.$overlay.style.opacity = 0.9;
        map.$overlay.style.zIndex = 1;
    })


    // deactivate

    map.on('deactivate', () => {
        map.planets.forEach(_planet => {
            if (_planet.active) _planet.deactivate();
        });
        map.$overlay.style.opacity = '';
        map.$overlay.style.zIndex = '';
    })


}