// apikey dc4fd0345fbbc208266ac0c12da732af
fetch (`https://api.themoviedb.org/3/movie/popular?api_key=dc4fd0345fbbc208266ac0c12da732af`)
     .then(function(response){
         return response.json();
     })
.then(function(datos) {
     
    for(let i = 0; i< 5; i++) {
       
            document.getElementById("peliculaspopulares").innerHTML += `
            <a class="detallesHome" href="detail-movie.html">
                <li>
                    <div>
                        <a href="./detail-movie.html?id=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt="Rapidos y Furiosos 9"></a>
                        <h3>${datos.results[i].title}</h3>
                        <p>${datos.results[i].release_date}</p>
                    </div>
                </li>
            </a>`;
    }
})


fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=dc4fd0345fbbc208266ac0c12da732af`)
     .then(function(response){
         return response.json();
     })
.then(function(datos) {
     
    for(let i = 0; i< 5; i++) {
       
            document.getElementById("seriespopulares").innerHTML += `
            <a class="detallesHome" href="detail-movie.html">
                <li>
                    <div>
                        <a href="./detail-movie.html?id=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt="Rapidos y Furiosos 9"></a>
                        <h3>${datos.results[i].title}</h3>
                        <p>${datos.results[i].release_date}</p>
                    </div>
                </li>
            </a>`;
    }
})


fetch (`https://api.themoviedb.org/3/tv/popular?api_key=dc4fd0345fbbc208266ac0c12da732af`)
     .then(function(response){
         return response.json();
     })
.then(function(datos) {
     
    for(let i = 0; i< 5; i++) {
       
            document.getElementById("mostviewedseries").innerHTML += `
            <a class="detallesHome" href="detail-movie.html">
                <li>
                    <div>
                        <a href="./detail-movie.html?id=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt="Rapidos y Furiosos 9"></a>
                        <h3>${datos.results[i].name}</h3>
                        <p>${datos.results[i].first_air_date}</p>
                    </div>
                </li>
            </a>`;
    }
})
