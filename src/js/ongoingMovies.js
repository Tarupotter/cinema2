import '../styles/ongoingMovies.scss';
import { initializeMovieData, moviesArray } from './main.js';
import { observer } from './helpers/fadeIn.js';

const ongoingMoviesDom = document.querySelector(".ongoingMovies"); 

let genres = [];
let decades = [];

const useData = async () => {
    await initializeMovieData();
};

document.addEventListener("DOMContentLoaded", () => {
    useData().then((data) => InitializeOngoingMovies());
});

let testArray = [
    {
        src: "https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",
        movieLabel: "Sune i fjällen"
    },
    {
        src: "https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",
        movieLabel: "Sune i Norge"
    },
    {
        src: "https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",
        movieLabel: "Sune i fjällen"
    },
    {
        src: "https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",
        movieLabel: "Sune i Norge"
    },
]

function InitializeOngoingMovies() {
    createGenres();
    createDecades();
    createFilterProps();
    
    for (let currentIndex = 0; currentIndex < testArray.length; currentIndex++) {
        const element = testArray[currentIndex];
        createMovieCard({
            src: element.src,
            movieLabel: element.movieLabel
        })
    };
}

function createMovieCard(props) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("ongoingMovies__card");
    ongoingMoviesDom.appendChild(cardDiv);

    const cardImage = document.createElement("img");
    cardImage.src = props.src;
    cardImage.classList.add("ongoingMovies__card__image")
    cardDiv.appendChild(cardImage);

    const cardLabel = document.createElement("h3");
    cardLabel.innerHTML = props.movieLabel; 
    cardLabel.classList.add("ongoingMovies__card__label");
    cardDiv.appendChild(cardLabel);
    observer.observe(cardDiv);
}

function createGenres() {
    for (let currentMovieIndex = 0; currentMovieIndex < moviesArray["movies"].length; currentMovieIndex++) {
        let foundGenre = false; 
        const currentMovie = moviesArray["movies"][currentMovieIndex];
        
        for (let genreIndex = 0; genreIndex < genres.length; genreIndex++) {
            const currentGenre = genres[genreIndex];
            
            if (currentGenre == currentMovie.genre) {
                foundGenre = true 
            }
        }

        if (!foundGenre) {
            genres.push(currentMovie.genre)
        } 
    }
}

function createDecades() {
    for (let currentMovieIndex = 0; currentMovieIndex < moviesArray["movies"].length; currentMovieIndex++) {
        let foundDecade = false; 
        const currentMovie = moviesArray["movies"][currentMovieIndex];
        
        for (let decadeIndex = 0; decadeIndex < decades.length; decadeIndex++) {
            const currentDecade = decades[decadeIndex];
            
            if (currentDecade == currentMovie.decade) {
                foundDecade = true 
            }
        }

        if (!foundDecade) {
            decades.push(currentMovie.decade)
        } 
    }
}


function createFilterProps() {
    const filterDiv = document.createElement("div");
    filterDiv.classList.add("ongoingMovies__filterDiv");
    ongoingMoviesDom.appendChild(filterDiv);

    // Mobile only 
    const selectDiv = document.createElement("div");
    selectDiv.classList.add("ongoingMovies__filterDiv__selectDiv");
    filterDiv.appendChild(selectDiv);

    const filterDropdown = document.createElement("select");
    filterDropdown.classList.add("ongoingMovies__filterDiv__selectDiv__select");
    selectDiv.appendChild(filterDropdown);

    const startingOption = new Option("Välj genre (Ingen vald)");
    startingOption.selected = true;
    startingOption.classList.add("ongoingMovies__filterDiv__selectDiv__select__option");
    filterDropdown.add(startingOption)

    for (let genreIndex = 0; genreIndex < genres.length; genreIndex++) {
        const currentGenre = genres[genreIndex];
        
        let newOption = new Option(currentGenre, "genre_" + currentGenre);

        newOption.classList.add("ongoingMovies__filterDiv__selectDiv__select__option");
        filterDropdown.add(newOption);
    }

    // Desktop

    let filterSearchField = document.createElement("input");
    filterSearchField.classList.add("ongoingMovies__filterDiv__searchfield");
    filterSearchField.placeholder = "Sök";
    filterDiv.appendChild(filterSearchField);

    let genreChipDiv = document.createElement("div");
    genreChipDiv.classList.add("ongoingMovies__filterDiv__genreChipDiv");
    filterDiv.appendChild(genreChipDiv);

    for (let currentIndex = 0; currentIndex < genres.length; currentIndex++) {
        const currentGenre = genres[currentIndex];
        
        let chip = document.createElement("button");
        chip.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip");
        chip.textContent = currentGenre;
        genreChipDiv.appendChild(chip);
    }

    for (let currentIndex = 0; currentIndex < decades.length; currentIndex++) {
        const currentDecade = decades[currentIndex];
        
        let chip = document.createElement("button");
        chip.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip");
        chip.textContent = currentDecade + "-tal";
        genreChipDiv.appendChild(chip);
    }

    let chip = document.createElement("button");
    chip.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip");
    chip.textContent = "Svartvit";
    genreChipDiv.appendChild(chip);
}