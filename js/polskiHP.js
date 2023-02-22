let songs = [
    "NAPAD NA BANK - PRO8L3M",
    "BIG KLAMOTY",
    "VHS - PRO8L3M",
    "MOLLY - PRO8L3M",
    "MAKJIAŻ - PRO8L3M",
    "DOUBLE D'S - SCHAFTER, ŻABSON",
    "PAKISTAŃSKIE DISCO - POPEK",
    "BESTIA - YOUNG IGI",
    "CALIFORNIA - WHITE2115",
    "DLA PRAWDZIWYCH DAM - POPEK",
    "8 KOBIET - TACONAFIDE",
    "WODOSPADY - POPEK",
    "CANDY - QUEBONAFIDE",
    "TAMAGOTCHI - TACONAFIDE",
    "SZAMAN - PALUCH",
    "NA SZCZYCIE - GRUBSON",
    "SEXOHOLI - ŻABSON",
    "JUNGLE GIRL - YOUNG LEOSIA",
    "DISNEY - KIZO",
    "KRÓL BALU - KIZO",
    "KISS CAM - MATA",
    "SZAFIR - MATA",
    "SCHODKI - MATA",
    "BIBLIOTEKA TRAP - MATA",
    "PATOINTELIGENCJA - MATA",
    "W PIĄTKI LEŻE W WANNIE - TACO",
    "LECI NOWY FUTURE - TACO",
    "JAKIE TO UCZUCIE? - OKI",
    "BUBBLETEA - QUEBONAFIDE",
    "JESTEŚ ŁADNIEJSZ NIŻ NA - BEDOES",
    "HOT COFFEE - SCHAFTER",
]

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
let sec = 30;
let time = setInterval(Timer, 1000);

const maxSongs = 10;

function StartGame() {
    counter = 0;
    points = 0;
    availableSongs = [...songs]
    // console.log(availableSongs);
    GetNewSong();
}

function GetNewSong() {
    sec = 30;
    if (availableSongs.length == 0 || counter >= maxSongs) {
        return window.location.assign("/index.html")
    }
    counter++;
    const songIndex =  Math.floor(Math.random() * availableSongs.length);
    // console.log(songIndex)
    currentSong = availableSongs[songIndex];
    // console.log(currentSong)
    title.innerText = currentSong;
    paragraf.innerText = "Ilość rund: "+ counter + "/10"; 
    sumOfPoints.innerText = "Ilość punktów: " + points;


    availableSongs.splice(songIndex, 1);
}

function Timer() {
    document.getElementById('timer').innerHTML ="Czas: " + sec + " sekund";
    sec--;
    if(sec == -1) {
        // clearInterval(time);
        GetNewSong();
        console.log(time)
    }
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
    sec = 30;
})

wrong.addEventListener('click', () => {
    GetNewSong();
    Timer();
    sec = 30;
})


StartGame();