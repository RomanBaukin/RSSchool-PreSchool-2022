const mainContainer = document.querySelector('#main');
const searchInput = document.querySelector('#search');
const searchForm = document.querySelector('#form');
const close = document.querySelector('.close');
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
    const overview = document.createElement('p');

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

    overview.classList.add('overview');
    overview.textContent = data.results[key].overview;
    movieInfo.append(movieInfoH3);
    movieInfo.append(movieInfoSpan);
    movieInfo.append(overview);
    div.append(movieInfo);
    mainContainer.append(div);
  }
}

searchForm.addEventListener('submit', (event) => {
  const target = event.target;
  event.preventDefault();
  url = `https://api.themoviedb.org/3/search/movie?query=${target.firstElementChild.value}&api_key=447e9b64b9efe3df3c5b965636c50ba1`;
  getData();
})

searchInput.addEventListener('input', (event) => {
  const target = event.target;
  event.preventDefault();

  if (target.value === '') {
    close.style.display = 'none';
  } else {
    close.style.display = 'block';
  }
})

close.addEventListener('click', () => {
  searchInput.value = '';
  close.style.display = 'none';
})