const mainContainer = document.querySelector('#main');
const searchInput = document.querySelector('#search');
const searchForm = document.querySelector('#form');
let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=447e9b64b9efe3df3c5b965636c50ba1';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}
getData();

function showData(data) {
  mainContainer.innerHTML = '';
  for (let key in data.results) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const movieInfo = document.createElement('div');
    const movieInfoH3 = document.createElement('h3');
    const movieInfoSpan = document.createElement('span');

    div.classList.add('movie');
    img.src = `https://image.tmdb.org/t/p/w1280${data.results[key].poster_path}`
    div.append(img);
    movieInfo.classList.add('movie-info');
    movieInfoH3.textContent = data.results[key].title;
    movieInfoSpan.textContent = data.results[key].vote_average;
    if (data.results[key].vote_average >= 7) {
      movieInfoSpan.classList.add('green');
    } else if (data.results[key].vote_average >= 5) {
      movieInfoSpan.classList.add('orange');
    } else {
      movieInfoSpan.classList.add('red');
    }
    movieInfo.append(movieInfoH3);
    movieInfo.append(movieInfoSpan);
    div.append(movieInfo);
    mainContainer.append(div);
  }
}

searchInput.addEventListener('change', (event) => {
  const target = event.target;
  event.preventDefault();
  url = `https://api.themoviedb.org/3/search/movie?query=${target.value}&api_key=447e9b64b9efe3df3c5b965636c50ba1`;
  getData();
  console.log(target.value);
})

searchForm.addEventListener('submit', (event) => {
  const target = event.target;
  event.preventDefault();
  console.dir(target);
  url = `https://api.themoviedb.org/3/search/movie?query=${target.firstElementChild.value}&api_key=447e9b64b9efe3df3c5b965636c50ba1`;
  getData();
})