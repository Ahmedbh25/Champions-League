
const teams = [
    {
        title: "Barcelona",
        description: "Barcelona is the champion in Liga.",
        dateAdded: "2023-06-14",
        imageUrl: "./img/teams/team1.png",
    },
    {
        title: "Real Madrid",
        description: "real madrid is Second team in Liga Table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team2.png"
    },

    {
        title: "Athletico Madrid",
        description: "Athletico Madrid is Third team in Liga Table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team6.png"
    },

    {
        title: "Real Sociedad",
        description: "Real Sociedad is the Forth team in Liga Table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team7.png"
    },

    {
        title: "Manchester City",
        description: "Manchester City is the champion in Premier League.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team4.png"
    },

    {
        title: "Arsenal",
        description: "Arsenal is the Second team in Premier League Table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team0.png"
    },

    {
        title: "Manchester United",
        description: "Athletico United is the third team in Premier League Table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team3.png"
    },

    {
        title: "New Castel United",
        description: "New Castel United is the forth Team in Premier League.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team5.png"
    },

    {
        title: "Bayern Munchin",
        description: "Bayen is the winner of Bundesliga.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team8.png"
    },

    {
        title: "Borrusia Dortmund",
        description: "Borrusia Dortmund is the Second team in Bundesliga table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team9.png"
    },

    {
        title: "Leipzig",
        description: "Leipzig is the Third team in Bundesliga table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team10.png"
    },

    {
        title: "Union Berlin",
        description: "Union Berlin is the Forth team in Bundesliga table.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team11.svg"
    },

    {
        title: "Napoli",
        description: "Napoli is the winner of Italian Serie A.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team12.png"
    },

    {
        title: "Lazio",
        description: "Lazio in The second place in Serie A.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team13.png"
    },

    {
        title: "Inter Milano",
        description: "Inter in the third place in Serie A.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team14.png"
    },

    {
        title: "Milan",
        description: "Milan in the Forth place in Serie A.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team15.png"
    },

    {
        title: "Paris Saint Germain",
        description: "PSG is the winner of ligue 1.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team16.png"
    },

    {
        title: "Lens FC",
        description: "Lens, in second place in ligue 1.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team17.png"
    },

    {
        title: "feyenoord rotterdam",
        description: "feyenoord is the winner of Holland league.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team18.png"
    },

    {
        title: "Galatasaray",
        description: "Galatasaray is the winner of Turkish league.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team19.png"
    },

    {
        title: "Benfica",
        description: "Benfica is the winner of Liga in Portugal.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team21.png"
    },

    {
        title: "Porto",
        description: "Porto is the second in Liga of Portugal.",
        dateAdded: "2023-06-15",
        imageUrl: "./img/teams/team20.jpeg"
    },


]

const listContainer = document.querySelector(".team-list");

teams.forEach(team => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("team-container");

    const img = document.createElement("img");
    img.src = team.imageUrl;
    img.addEventListener("mouseover", (e)=>{
        e.target.style.transform = "scale(1.05, 1.07)";
    });
    img.addEventListener("mouseout", (e)=>{
        e.target.style.transform = "scale(1)";
    });

    const title = document.createElement("h3");
    title.textContent = team.title;

    const description = document.createElement("p");
    description.textContent = team.description;

    const dateAdded = document.createElement("p");
    dateAdded.textContent = "Date Added: " + team.dateAdded;

    imgContainer.appendChild(img);
    imgContainer.appendChild(title);
    imgContainer.appendChild(description);
    imgContainer.appendChild(dateAdded);

    listContainer.appendChild(imgContainer);
});
