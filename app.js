const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura de ${coords.direcc} es de ${ temp }`;

    } catch (error) {

        console.log(error);
    }

}

getInfo(argv.direccion).then(console.log);