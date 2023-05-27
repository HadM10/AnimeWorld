window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');

    setTimeout(function () {
        preloader.style.display = 'none';
    }, 4000);
});



// JavaScript code for search.html
var searchQuery = decodeURIComponent(getParameterByName('query'));

var animeArray = [
    {
        "name": "Naruto",
        "description": "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts—the first set in Naruto's pre-teen years, and the second in his teens.",
        "image": "cards/naruto.jpg"
    },
    {
        "name": "Attack on Titan",
        "description": "Attack on Tita is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.",
        "image": "cards/Attack_on_Titan.webp"
    },
    {
        "name": "One Piece",
        "description": "One Piece follows the adventures of Monkey D. Luffy, a young pirate with the ability to stretch his body after eating a Devil Fruit. Luffy and his diverse crew of pirates, known as the Straw Hat Pirates, search for the ultimate treasure known as One Piece.",
        "image": "cards/one-piece.jpg"
    },
    {
        "name": "Dragon Ball Z",
        "description": "Dragon Ball Z is the sequel to the original Dragon Ball anime series. It follows the adult life of Goku and his friends as they defend Earth from various threats, including powerful villains and extraterrestrial beings.",
        "image": "cards/dragon-ball.png"
    },
    {
        "name": "Death Note",
        "description": "Death Note is a psychological thriller anime series. It revolves around a high school student named Light Yagami who discovers a supernatural notebook that allows him to kill anyone by writing their name in it. Light uses the notebook to cleanse the world of criminals, but his actions draw the attention of a brilliant detective known as L.",
        "image": "cards/death-note.jpg"
    },
    {
        "name": "My Hero Academia",
        "description": "My Hero Academia is set in a world where most of the population has superpowers known as Quirks. The story follows Izuku Midoriya, a young boy born without a Quirk, who dreams of becoming a hero. He enrolls in a prestigious hero academy and faces various challenges to achieve his goal.",
        "image": "cards/my-hero-academia.jpg"
    },
    {
        "name": "Fullmetal Alchemist: Brotherhood",
        "description": "Fullmetal Alchemist: Brotherhood is a fantasy adventure anime series. It follows the story of two brothers, Edward and Alphonse Elric, who use alchemy in their quest to find the Philosopher's Stone and restore their bodies after a failed alchemical experiment.",
        "image": "cards/fmab.jpg"
    },
    {
        "name": "Demon Slayer: Kimetsu no Yaiba",
        "description": "Demon Slayer: Kimetsu no Yaiba follows the story of Tanjiro Kamado, a young boy whose family is slaughtered by demons. He becomes a demon slayer and embarks on a journey to avenge his family and find a cure for his sister, who has been turned into a demon.",
        "image": "cards/demon-slayer.jpg"
    },
    {
        "name": "Hunter x Hunter",
        "description": "Hunter x Hunter is an adventure anime series that follows a young boy named Gon Freecss as he sets out to become a Hunter, a licensed professional with exceptional skills and knowledge. Along the way, he encounters friends, enemies, and dangerous challenges.",
        "image": "cards/hunter x hunter.jpg"
    },
    {
        "name": "Haikyuu!!",
        "description": "Haikyuu!! is a sports anime series centered around the high school volleyball team of Karasuno High School. The story follows Shoyo Hinata, a determined and passionate player, as he and his teammates strive to become the best in the competitive world of high school volleyball. The series explores themes of teamwork, perseverance, and personal growth.",
        "image": "cards/haikyu.jpg"
    },
    {
        "name": "Your Lie in April",
        "description": "Your Lie in April is a music drama anime series that follows the story of Kōsei Arima, a former child prodigy pianist who lost his ability to play after the death of his mother. His life takes a turn when he meets a talented violinist named Kaori Miyazono, who helps him rediscover his love for music. The series explores themes of friendship, love, and the power of music.",
        "image": "cards/your-lie-in-april.jpg"
    },
    {
        "name": "Dr. Stone",
        "description": "Dr. Stone is a sci-fi adventure anime series set in a world where all of humanity has been petrified by a mysterious event. The story follows Senku Ishigami, a brilliant scientist who awakens thousands of years later and seeks to rebuild civilization using science and technology. The series combines science, strategy, and survival as Senku and his allies face various challenges in their quest to restore humanity.",
        "image": "cards/dr-stone.jpg"
    },
    {
        "name": "Tokyo Ghoul",
        "description": "Tokyo Ghoul is a dark fantasy anime series that takes place in a world where flesh-eating creatures known as Ghouls exist and live among humans. The story follows Ken Kaneki, a college student who becomes a half-ghoul after a fateful encounter. As he struggles to navigate between his human and ghoul sides, he becomes entangled in a world of violence, mystery, and the search for identity.",
        "image": "cards/tokyo-ghoul.jpg"
    },
    {
        "name": "Boruto",
        "description": "Boruto: Naruto Next Generations is a sequel to the popular anime series Naruto. It follows the story of Boruto Uzumaki, the son of Naruto Uzumaki, as he embarks on his ninja journey. Boruto and his friends face new challenges and threats as they strive to protect their village and uncover the mysteries of the ninja world.",
        "image": "cards/boruto.jpg"
    },
    {
        "name": "Blue Lock",
        "description": "Blue Lock is a sports anime series that focuses on the world of soccer. It takes place in a specialized training facility called Blue Lock, where talented young strikers are gathered to develop their skills and compete against each other. The story follows Yoichi Isagi, a promising young player who enters the intense and competitive environment of Blue Lock to become the best striker in the world.",
        "image": "cards/blue-lock.jpg"
    },
    {
        "name": "Jujutsu Kaisen",
        "description": "Jujutsu Kaisen is a supernatural action anime series set in a world where cursed spirits and curses exist. It follows the story of Yuji Itadori, a high school student who becomes involved in the world of jujutsu (a form of sorcery) after ingesting a cursed object. Yuji joins the Tokyo Metropolitan Jujutsu Technical High School and becomes part of a team fighting against cursed spirits to protect humanity.",
        "image": "cards/jujutsu-kaisen.jpg"
    },
    {
        "name": "Vinland Saga",
        "description": "Vinland Saga is a historical action anime series set during the Viking Age. The story revolves around Thorfinn, a young warrior seeking revenge against Askeladd, the leader of a band of mercenaries who killed his father. The series explores themes of war, honor, and personal growth as Thorfinn navigates the brutal and unforgiving world of Vikings.",
        "image": "cards/vinland-saga.jpg"
    },
    {
        "name": "Bleach",
        "description": "Bleach is a supernatural action anime series that follows the story of Ichigo Kurosaki, a teenager with the ability to see ghosts. After obtaining the powers of a Soul Reaper, a spiritual being who protects the living world from evil spirits, Ichigo becomes involved in battles against Hollows (corrupted souls) and other dangerous entities. The series combines intense action, supernatural elements, and intricate character relationships.",
        "image": "cards/bleach.jpg"
    },
    {
        "name": "Yu-Gi-Oh",
        "description": "Yu-Gi-Oh is a fantasy card game-based anime series that centers around the story of Yugi Muto, a young boy who solves the ancient Millennium Puzzle and becomes host to a mysterious spirit. As Yugi and his friends engage in the Duel Monsters card game, they face various opponents and encounter magical artifacts with the fate of the world at stake. The series combines strategy, friendship, and epic card battles.",
        "image": "cards/yugioh.jpg"
    }

];



var resultsContainer = document.getElementById("animeResults");

resultsContainer.innerHTML = ""; // Clear previous results

// Filter `animeArray` based on the search query
var filteredResults = animeArray.filter(function (anime) {
    return anime.name.toLowerCase().includes(searchQuery);
});

// Display the filtered results
if (filteredResults.length > 0) {
    filteredResults.forEach(function (anime) {
        var animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        var animeCardImage = document.createElement("div");
        animeCardImage.classList.add("anime-card-image");

        animeCard.appendChild(animeCardImage);

        var animeImage = document.createElement("img");
        animeImage.src = anime.image;
        animeCardImage.appendChild(animeImage);


        var animeCardInfo = document.createElement("div");
        animeCardInfo.classList.add("anime-card-info");

        animeCard.appendChild(animeCardInfo);

        var animeName = document.createElement("h3");
        animeName.textContent = anime.name;
        animeCardInfo.appendChild(animeName);

        var animeDescription = document.createElement("p");
        animeDescription.textContent = anime.description;
        animeCardInfo.appendChild(animeDescription);

        resultsContainer.appendChild(animeCard);
    });
}
else {
    var notFoundMessage = document.createElement("div");
    notFoundMessage.classList.add("not-found");
    notFoundMessage.textContent = "Not found !";
    resultsContainer.appendChild(notFoundMessage);

}

// Function to retrieve URL parameters
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//ALERT

function showAlert(message) {
    var modal = document.getElementById("customAlertModal");
    var alertMessage = document.getElementById("alertMessage");

    alertMessage.textContent = message;
    modal.style.display = "block";
}

// Close the custom alert modal
function closeAlert() {
    var modal = document.getElementById("customAlertModal");
    modal.style.display = "none";
}

//SEARCH 

function searchAnime() {

    var searchQuery = document.getElementById("searchInput").value.toLowerCase();

    if (searchQuery == '') {
        showAlert('Enter an Anime')
    }
    else
        window.location.href = 'search.html?query=' + encodeURIComponent(searchQuery);

}

function menuHover() {

    document.getElementById('menu-bar1').style.display = 'none'
    document.getElementById('menu-bar2').style.display = 'block'
}

function menuDefault() {

    document.getElementById('menu-bar1').style.display = 'block'
    document.getElementById('menu-bar2').style.display = 'none'
}

function showNav() {
    document.querySelector('.nav_bar').style.display = 'block'

}

document.addEventListener("click", function (event) {
    if (window.innerWidth <= 1009) {
        if (!document.querySelector('.nav_bar').contains(event.target) && event.target !== document.getElementById('menu-bar2') || document.getElementById('close-button').contains(event.target)) {
            document.querySelector('.nav_bar').style.display = "none";
        }
    }
});

if (window.innerWidth <= 1009) {
    document.getElementById('close-button').style.display = 'block'
}


const storedCards = localStorage.getItem('favoriteCards');
const favoriteCards = JSON.parse(storedCards);

const favoriteMenu = document.getElementById('favorite-nav');
if (favoriteMenu) {
    favoriteMenu.textContent = ` ${favoriteCards.length}`;
}


