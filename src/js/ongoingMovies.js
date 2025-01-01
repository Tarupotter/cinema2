import '../styles/ongoingMovies.scss';

const ongoingMoviesDom = document.querySelector(".ongoingMovies"); 

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


for (let currentIndex = 0; currentIndex < testArray.length; currentIndex++) {
    const element = testArray[currentIndex];
    createMovieCard({
        src: element.src,
        movieLabel: element.movieLabel
    })
}

function createMovieCard(props) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("ongoingMovies__card");
    ongoingMoviesDom.appendChild(cardDiv);

    let cardImage = document.createElement("img");
    cardImage.src = props.src;
    cardImage.classList.add("ongoingMovies__card__image")
    cardDiv.appendChild(cardImage);

    let cardLabel = document.createElement("h3");
    cardLabel.innerHTML = props.movieLabel; 
    cardLabel.classList.add("ongoingMovies__card__label");
    cardDiv.appendChild(cardLabel);
}