let songs = ["Gang Albanii - Napad na bank", "big klamoty", "ballada o esporcie", "wok to poland", "bombsajt a"]

//const title = document.getElementById('title');
const title = document.getElementById('title');
// const answers = Array.from(document.getElementsByClassName('btn'))
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const paragraf = document.getElementById("counter");
const sumOfPoints = document.getElementById("points");

// console.log(answers)

// console.log(songs[0]);

let counter = 0;
let points = 0;
let availableSongs = [];
let currentSong = [];

const maxSongs = 5;

function StartGame() {
    counter = 0;
    points = 0;
    availableSongs = [...songs]
    // console.log(availableSongs);
    GetNewSong();
}

function GetNewSong() {
    if (availableSongs.length == 0 || counter >= maxSongs) {
        return window.location.assign("/menu.html")
    }
    counter++;
    const songIndex =  Math.floor(Math.random() * availableSongs.length);
    // console.log(songIndex)
    currentSong = availableSongs[songIndex];
    // console.log(currentSong)
    title.innerText = currentSong;
    paragraf.innerText = "Ilość rund: " + counter;
    sumOfPoints.innerText = "Ilość punktów: " + points;


    availableSongs.splice(songIndex, 1);
}


// answers.forEach(answer => {
//     answer.addEventListener("click", e => {

//     })
// })

// answers.forEach(answer => {
//     answer.addEventListener("click", e => {
//         console.log(e.target)
//         if (answer.correct) {
//             console.log("dupa")
//             points++
//         } 

//         GetNewSong();
//     });
// });

correct.addEventListener('click', () => {
    points++
    console.log(points)
    GetNewSong();
})

wrong.addEventListener('click', () => {
    GetNewSong();
})


StartGame();