const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//argv.direccion




// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

//intento mio

// const getinfo = async(argv.direccion) => {
//     const coords = await lugar.getLugarLatLng(argv.direccion);

//     if(resp.data.direccion === 0){
//         throw new Error(`No se pudo determinar el clima de ${argv.direccion}`);
//     }

//     clima.getClima(resp.data.lat, resp.data.lng)

//     return{

//     }

// }

//Respuesta

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}°.`;
    } catch {
        return `No se pude determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);