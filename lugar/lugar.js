const axios = require("axios").default;

const getLugar = async(direccion) => {

    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "x-rapidapi-key": "4be51f5fecmshd847c9e828e6c04p18ace4jsnb46e2b1fdefc"
        }
    });

    const respuesta = await instance.get();


    if (respuesta.data.Results.length === 0) {
        throw new Error(`Ninguna locacion encontrada: ${ direccion }`);
    }

    const data = respuesta.data.Results[0]
    const direcc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcc,
        lat,
        lng
    };
}

module.exports = {
    getLugar
};