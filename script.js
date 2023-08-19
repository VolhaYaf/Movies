const searchInput = document.querySelector('.find');
const searchMovie = document.querySelectorAll('.movie');

searchInput.addEventListener('keyup', function (event) {
    const word = event.target.value.toLowerCase();

searchMovie.forEach(item => {
    item.querySelector('p').textContent.toLowerCase().includes(word) ? 
    (item.style.display = 'block') : (item.style.display = 'none');
})    
})