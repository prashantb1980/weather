const axios = require('axios');

module.exports = async() => {
    //const long=process.env.LONG;
    //const lat=process.env.LAT;
    //const apiKey = process.env.APPID;
    //const endpoint=process.env.MAP_ENDPOINT;
    //const endpoint = `${mapURI}/weather?q=${targetCity}&appid=${appId}&`;
    const endpoint = 'https://api.openweathermap.org/data/2.5/forecast?lat=60.2099027&lon=25.1455394&APPID=07405ac9369512f9a04f9317fc47887f'
    //const endpoint1 = `${endpoint}?lat=${lat}&lon=${long}&APPID=${apiKey}`;
    //console.log(endpoint);
    const response = await axios.get(endpoint);

    return response.data ? response.data : {}
}