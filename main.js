const url = 'https://api.themoviedb.org/3/search/movie?query=Batman&callback=test';
const apiKey = 'd397fbb683d9715d315453502b3502f5';

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d397fbb683d9715d315453502b3502f5&language=en-US&region=US&page=1")
  .then(response => response.json())
  .then(data => {
    // Traitement de la réponse JSON
    
    console.log(data);

    // Maintenant, vous pouvez utiliser le code JavaScript pour afficher les données comme vous le souhaitez
    const contenaire = document.querySelector('#contenaire');
    contenaire.innerHTML = '';

    data.results.map(movie => {
      const card = document.createElement('div');
      card.classList.add('card_movie');

      const image = document.createElement('img');
      image.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`;
      card.appendChild(image);

      const title = document.createElement('p');
      title.textContent = `Title : ${movie.title}`;
      card.appendChild(title);

      const year = document.createElement('p');
      year.textContent = `Year : ${movie.release_date}`;
      card.appendChild(year);

      const qid = document.createElement('p');
      qid.textContent = `Language : ${movie.original_language}`;
      card.appendChild(qid);

      const stars = document.createElement('p');
      stars.textContent = `Notes : ${movie.vote_average}`;
      card.appendChild(stars);

      const description = document.createElement('p');
      description.textContent = `Description : ${movie.overview}`
      card.appendChild(description);

      contenaire.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la requête fetch:', error);
  });


const rechercher= document.querySelector('#rechercher');
const btn_search = document.querySelector('#btn_search');

btn_search.addEventListener('click', ()=>{
    search= rechercher.value.trim();

    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=d397fbb683d9715d315453502b3502f5`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const contenaire = document.querySelector('#contenaire');
        contenaire.innerHTML = '';

       data.results.map(movie => {
            const card = document.createElement('div');
            card.classList.add('card_movie');

            const image = document.createElement('img');
            image.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`;
            card.appendChild(image);

            const title = document.createElement('p');
            title.textContent = `Title : ${movie.title}`;
            card.appendChild(title);

            const year = document.createElement('p');
            year.textContent = `Year : ${movie.release_date}`;
            card.appendChild(year);

            const qid = document.createElement('p');
            qid.textContent = `Language : ${movie.original_language}`;
            card.appendChild(qid);

            const stars = document.createElement('p');
            stars.textContent = `Notes : ${movie.vote_average}`;
            card.appendChild(stars);

            const description = document.createElement('p');
            description.textContent = `Description : ${movie.overview}`
            card.appendChild(description);

            contenaire.appendChild(card);
            rechercher = '';

            });
        });

});

const h1 = document.querySelector('#h1');

h1.addEventListener('click', ()=>{
    window.location.reload();
});
