const players = [
    {
        name: "Aymen Dahmen",
        currentClub: "El Hazem",
        age: 26,
        nationality: "Tunisia",
        image: "./img/players/dahmen.jpeg",
    },
    {
        name: "Sardar Azmoun",
        currentClub: "Bayer Liverkusen 04",
        age: 27,
        nationality: "Iran",
        image: "./img/players/azmoun.jpeg",
    },
    {
        name: "Rami Ben Sabaini",
        currentClub: "Borrusia Dortmund",
        age: 27,
        nationality: "Algeria",
        image: "./img/players/bensabaini.jpeg",
    },
    {
        name: "Achraf hakimi",
        currentClub: "Paris Saint Germain",
        age: 24,
        nationality: "Marocco",
        image: "./img/players/hakimi.jpeg",
    },
    {
        name: "Erlang halland",
        currentClub: "Manchester City",
        age: 22,
        nationality: "Norway",
        image: "./img/players/halland.jpeg",
    },
    {
        name: "Youssef Msakni",
        currentClub: "Al Rayyan Fc",
        age: 32,
        nationality: "Tunisia",
        image: "./img/players/msakni.jpeg",
    },
    {
        name: "Harry Kane",
        currentClub: "Tottenham Hottspurs",
        age: 29,
        nationality: "England",
        image: "./img/players/kane.jpeg",
    },
    {
        name: "John Stones",
        currentClub: "Manchester City",
        age: 29,
        nationality: "England",
        image: "./img/players/stones.jpeg",
    },
    {
        name: "Montassar Talbi",
        currentClub: "FC Lorient",
        age: 24,
        nationality: "Tunisia",
        image: "./img/players/talbi.jpeg",
    },
    {
        name: "Kerrian Trippier",
        currentClub: "New Castel United",
        age: 30,
        nationality: "England",
        image: "./img/players/trippier.jpeg",
    },
    {
        name: "Islam Slimany",
        currentClub: "Anderlakht",
        age: 33,
        nationality: "Algeria",
        image: "./img/players/slimani.jpeg",
    },
    {
        name: "Cristiano Ronaldo",
        currentClub: "AL Nasser Fc",
        age: 38,
        nationality: "Portugal",
        image: "./img/players/ronaldo.jpeg",
    },
    {
        name: "Neymar JS",
        currentClub: "Paris Saint Germain",
        age: 31,
        nationality: "Brazil",
        image: "./img/players/neymar.jpeg",
    },
    {
        name: "Mohamed Salah",
        currentClub: "Liverpool FC",
        age: 29,
        nationality: "Egypt",
        image: "./img/players/salah.jpeg",
    },
    {
        name: "Keyl Walker",
        currentClub: "Mancherster City",
        age: 30,
        nationality: "England",
        image: "./img/players/walker.jpeg",
    },
    {
        name: "Kylian Mbappee",
        currentClub: "Paris Saint Germain",
        age: 23,
        nationality: "Frensh",
        image: "./img/players/mbapee.jpeg",
    },
    {
        name: "Lionel Messi",
        currentClub: "Miami Heats",
        age: 35,
        nationality: "Argentina",
        image: "./img/players/messi.jpg",
    },
    {
        name: "Mohaned Ali",
        currentClub: "Al Siliya",
        age: 25,
        nationality: "Irak",
        image: "./img/players/mohaned.jpeg",
    },
    {
        name: "Hossain Kanaani",
        currentClub: "Al Ahli FC",
        age: 28,
        nationality: "Iran",
        image: "./img/players/kaani.jpeg",
    },
    {
        name: "Riadh Mahrez",
        currentClub: "Manchester City",
        age: 30,
        nationality: "Algeria",
        image: "./img/players/mahrez.jpeg",
    },
    {
        name: "Noussir Mazraoui",
        currentClub: "Bayern Munchen FC",
        age: 26,
        nationality: "Marocco",
        image: "./img/players/mazzraoui.jpg",
    },
    {
        name: "Youssef Blaili",
        currentClub: "Esperance de Tunis",
        age: 30,
        nationality: "Algeria",
        image: "./img/players/blaili.jpeg",
    },
    {
        name: "Edries Arfaoui",
        currentClub: "Zuhich FC",
        age: 19,
        nationality: "Tunisia",
        image: "./img/players/arfaoui.jpeg",
    },
];

const playersList = document.querySelector(".players");

players.forEach(player => {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("single-player");

    const image = document.createElement("img");
    image.classList.add("img-player");
    image.src = player.image;

    image.addEventListener("mouseover", (e) => {
        e.target.style.transform = 'scale(1.05)';
    })

    image.addEventListener("mouseout", (e) => {
        e.target.style.transform = 'scale(1)';
    })


    const title = document.createElement("h3");
    title.classList.add('title');
    title.textContent = `Name : ${player.name}`;

    const nationality = document.createElement("p");
    nationality.classList.add("nationality");
    nationality.textContent = `Nationality : ${player.nationality}`;

    const age = document.createElement("age");
    age.classList.add("age");
    age.textContent = `Age : ${player.age}`;

    playerDiv.appendChild(image);
    playerDiv.appendChild(title);
    playerDiv.appendChild(age);
    playerDiv.appendChild(nationality);
    playersList.appendChild(playerDiv);

});


