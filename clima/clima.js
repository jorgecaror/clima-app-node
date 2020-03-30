const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0a2826347a4b143fded3cb0ee0c15356&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}