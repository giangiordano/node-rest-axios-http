const axios = require('axios');

const getClima = async(lat, lon) => {

    const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=f08287c729ac58498611b37b95b0dbcb`
    );

    return data.data.main.temp;
}

module.exports = {
    getClima
}