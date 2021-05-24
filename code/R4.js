axios({
    method: 'GET',
    url: `http://api.weatherstack.com/current?access_key=d2a2beb5184506d6a322c48d60472164&query=Buenos Aires,Argentina&language = es&units=m`
}).then ( respuesta => {
    document.getElementById('clima').innerHTML = `
        <tr>
            <th>Clima</th>
            <th>Ciudad</th>
            <th>Temperatura</th>
            <th>Sensación Térmica</th>
            <th>Humedad</th>
        </tr>
        <tr>
            <td><img src=${respuesta.data.current.weather_icons[0]} class="icono"></td>
            <td>${respuesta.data.location.name}, ${respuesta.data.location.country}</td>
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
axios({
    method: 'GET',
    url: `http://api.mediastack.com/v1/news?access_key=da281497c9e13581881496a2922c7392&languages=en`
}).then( respuesta => {
    
    console.log(respuesta.data.data);
    document.getElementById('articulos').innerHTML="";

    for (articulo of respuesta.data.data){
        console.log(articulo);
        document.getElementById('articulos').insertAdjacentHTML("beforeend",`
        <article>
            <div>
                <img width="100%" height="56.25%" src="${articulo.image}">
            </div>
            <div>
                <h2>${articulo.title}</h2>
                <p>${articulo.description}</p>
            </div>
        </article>
        `);
    }
})
