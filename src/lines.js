import Utils from '@/utils'

export default function (map) {

    const lines = [


        // 2

        {
            from: map.orbits[1].planets[0],
            to: map.orbits[2].planets[0],
        },
        {
            from: map.orbits[1].planets[2],
            to: map.orbits[2].planets[1],
        },
        {
            from: map.orbits[1].planets[4],
            to: map.orbits[2].planets[2],
        },
        {
            from: map.orbits[1].planets[6],
            to: map.orbits[2].planets[3],
        },


        // 1

        {
            from: { x: 0, y: map.orbits[0].or },
            to: map.orbits[1].planets[1],
        },
        {
            from: { x: -map.orbits[0].or, y: 0 },
            to: map.orbits[1].planets[3],
        },
        {
            from: { x: 0, y: -map.orbits[0].or },
            to: map.orbits[1].planets[5],
        },
        {
            from: { x: map.orbits[0].or, y: 0 },
            to: map.orbits[1].planets[7],
        },


        // 0

        {
            from: { x: 0, y: 0 },
            to: map.orbits[0].planets[0],
        },
        {
            from: { x: 0, y: 0 },
            to: map.orbits[0].planets[1],
        },
        {
            from: { x: 0, y: 0 },
            to: map.orbits[0].planets[2],
        },
        {
            from: { x: 0, y: 0 },
            to: map.orbits[0].planets[3],
        }

    ]

    lines.forEach(line => {
        const $line = Utils.createLine(line, map.center);
        map.$lines.appendChild($line);
    })

}