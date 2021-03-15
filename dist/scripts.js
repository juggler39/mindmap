(() => {

    const $map = document.getElementById('map')
    const map = new MindMap($map, MapConfig);

    console.log(map)

    map.orbits.forEach(orbit => {
        orbit.planets.forEach(planet => {
            planet.$node.addEventListener('click', () => {
                if (planet.$node.classList.contains('active')) alert(planet.note);
                else planet.$node.classList.add('active');
            })
            planet.moons.forEach(moon => {
                moon.$node.addEventListener('click', () => {
                    alert(moon.note);
                })
            })
        })
    })

})();