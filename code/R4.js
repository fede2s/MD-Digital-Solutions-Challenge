    axios({
        method: 'GET',
        url: `http://api.weatherstack.com/current?access_key=d2a2beb5184506d6a322c48d60472164&query=Buenos Aires,Argentina&language = es&units=m`
    }).then ( respuesta => {
            document.getElementById('clima').innerHTML = `
            <tr>
                <th>Ciudad</th>
                <th>Clima</th>
                <th>Temperatura</th>
                <th>Sensación Térmica</th>
                <th>Humedad</th>
            </tr>
            <tr>
                <td>${respuesta.data.location.name}, ${respuesta.data.location.country}</td>
                <td><img src=${respuesta.data.current.weather_icons[0]} class="icon"></td>
                <td>${respuesta.data.current.temperature}°C</td>
                <td>${respuesta.data.current.feelslike}°C</td>
                <td>${respuesta.data.current.humidity}%</td>
            </tr>
                `;
            document.getElementById('favicon').setAttribute("href",respuesta.data.current.weather_icons[0]);
            document.getElementById('titulo').innerHTML=`${respuesta.data.location.name} ${respuesta.data.current.temperature}°C`;
    }).catch( error => {
        
        if (respuesta.data.error.code == 105){
            document.getElementById('clima').innerHTML="Tu navegador no es compatible";
        }
    })

