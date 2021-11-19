window.addEventListener("load",function(){
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let id = objetoQueryString.get('id');

    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=dc4fd0345fbbc208266ac0c12da732af`)
    .then(function(response){
        return response.json();
    })
    .then (function(datos){
    console.log(datos);

    document.querySelector('.contenedor').innerHTML = `
    <aside class="detail-box"> 
    <div><img class="photo-box" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="Photo"></div>     

    <ul class="text-box">
     <li>${datos.title}</li>
     <li>Género :<em> ${datos.genres[1].name}</em></li>
     <li>Fecha de Estreno : ${datos.release_date }</li>
     <li>Duración: ${datos.runtime} minutes</li>
     <li>Calificación : ${datos.vote_average}</li>
     <li>Sinopsis: ${datos.overview}</li>
     <li>Total de Reseñas: ${datos.vote_count}</li>
     <li><a id="ul-fav" href="favorite.html">Agregar a Favoritos</li></a>
    </ul> 
  </aside>`;

    })
    .catch(function (error) {
        console.log (`El error fue: ${error}`);
    })


})