// apikey dc4fd0345fbbc208266ac0c12da732af
fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=dc4fd0345fbbc208266ac0c12da732af`)
     .then(function(response){
         return response.json();
     })
.then(function(datos) {
     
    for(let i = 0; i< datos.genres.length; i++) {

        document.getElementById("generosJs").innerHTML += `
        <a class="generosHome" href="./detail-genres.html">
            <li>
                <div>
                    <h3>${datos.genres[i].name}</h3> 
                </div>
            </li>
        </a>`;
    }
})


fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=dc4fd0345fbbc208266ac0c12da732af`)
     .then(function(response){
         return response.json();
     })
.then(function(datos) {
     
    for(let i = 0; i< datos.genres.length; i++) {

        document.getElementById("generosSeries").innerHTML += `
        <a class="generosHome" href="./detail-genres.html">
            <li>
                <div>
                    <h3>${datos.genres[i].name}</h3> 
                </div>
            </li>
        </a>`;
    }
})