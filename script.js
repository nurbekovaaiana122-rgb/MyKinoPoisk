async function getFilms(){
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
    method: 'GET',
    headers: {
        'X-API-KEY': '22bdf913-ba9c-43af-8d9e-136eec86c3e9',
        'Content-Type': 'application/json',
    },
})
    const films = await response.json()
    console.log(films);
    displayFilms(films.films)
}



function displayFilms(arr){
    const wrap = document.querySelector('.film__container')

    arr.forEach((film, ind)=>{
        const block = document.createElement('div')
        block.classList.add('film__block')

        const imgBlock = document.createElement('div')
        imgBlock.classList.add('film__img')

        const title = document.createElement('div')
        block.classList.add('film__subtitle')
        title.innerText = film.nameRu

        const genre = document.createElement('div')
        genre.classList.add('film__genre')
        film.genres.forEach((g, i)=>{
            const gen = document.createElement('span')
            gen.innerText = g.genre
            genre.append(gen)
        })

        const img = document.createElement('img')
        img.src = film.posterUrl
        imgBlock.append(img)
        block.append(imgBlock, title, genre)
        wrap.append(block)
    })
}

getFilms()