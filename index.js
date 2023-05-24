

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
    document.querySelector('.search-div').style.display = 'block'

}

document.addEventListener("click", function (event) {
    if (window.innerWidth <= 992) {
        if (!document.querySelector('.nav_bar').contains(event.target) && event.target !== document.getElementById('menu-bar2') || document.getElementById('close-button').contains(event.target)) {
            document.querySelector('.nav_bar').style.display = "none";
        }
    }
});

if (window.innerWidth <= 992) {
    document.getElementById('close-button').style.display = 'block'
}


let favoriteCards = [];
let favoriteImagesVisibility = {};

const storedCards = localStorage.getItem('favoriteCards');
if (storedCards) {
    favoriteCards = JSON.parse(storedCards);
}

const storedImagesVisibility = localStorage.getItem('favoriteImagesVisibility');
if (storedImagesVisibility) {
    favoriteImagesVisibility = JSON.parse(storedImagesVisibility);
}

// select all "choose-favorite" images
const chooseFavorite = document.querySelectorAll('.choose-favorite');


// get the count of favorite cards from local storage
const favoriteMenu = document.getElementById('favorite-nav');
const storedCount = localStorage.getItem('favoriteCount');
let favoriteCount = storedCount ? parseInt(storedCount) : 0;
favoriteMenu.textContent = ` ${favoriteCards.length}`;


// add event listener to each image
chooseFavorite.forEach(image => {
    image.removeEventListener('click', handleClick);
    image.addEventListener('click', handleClick);

    const card = image.closest('.card');
    const favoriteImage = card.querySelector('.is-favorite');
    const cardImage = card.querySelector('.card-img-top').src;
    const cardTitle = card.querySelector('.card-title').textContent;
    const favoriteCard = { image: cardImage, title: cardTitle };

    if (favoriteCards.some(favoriteCard => favoriteCard.title === cardTitle && favoriteCard.image === cardImage)) {

        // card is already a favorite
        favoriteImage.style.display = 'inline-block';
        image.style.display = 'none';

        favoriteCount = favoriteCards.length;
        localStorage.setItem('favoriteCount', favoriteCount);
        favoriteMenu.textContent = ` ${favoriteCards.length}`;

    } else if (favoriteImagesVisibility[cardTitle]) {
        // chooseImage was clicked before and hidden
        favoriteImage.style.display = 'none';
        image.style.display = 'inline-block';
    }
});

function handleClick() {
    const card = this.closest('.card');
    const cardImage = card.querySelector('.card-img-top').src;
    const cardTitle = card.querySelector('.card-title').textContent;
    const favoriteImage = card.querySelector('.is-favorite');
    const chooseImage = card.querySelector('.choose-favorite');
    const favoriteCard = { image: cardImage, title: cardTitle };
    const exists = favoriteCards.some(favoriteCard => favoriteCard.title === cardTitle && favoriteCard.image === cardImage);

    if (!exists) {
        // Add card to favorites
        favoriteCards.push(favoriteCard);
        localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));

        // Swap images
        favoriteImage.style.display = 'inline-block';
        chooseImage.style.display = 'none';

        // Update visibility object
        favoriteImagesVisibility[cardTitle] = false;
        localStorage.setItem('favoriteImagesVisibility', JSON.stringify(favoriteImagesVisibility));

        // Update count of favorite cards and save to local storage
        favoriteCount = favoriteCards.length;
        localStorage.setItem('favoriteCount', favoriteCount);

        // Update text of favorites link in navbar
        favoriteMenu.textContent = ` ${favoriteCards.length}`;
    } else {
        // Remove card from favorites
        favoriteCards = favoriteCards.filter(favoriteCard => favoriteCard.title !== cardTitle || favoriteCard.image !== cardImage);
        localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));

        // Swap images
        favoriteImage.style.display = 'none';
        chooseImage.style.display = 'inline-block';

        // Update visibility object
        favoriteImagesVisibility[cardTitle] = true;
        localStorage.setItem('favoriteImagesVisibility', JSON.stringify(favoriteImagesVisibility));

        favoriteCount = favoriteCards.length;
        localStorage.setItem('favoriteCount', favoriteCount);

        // Update text of favorites link in navbar
        favoriteMenu.textContent = ` ${favoriteCards.length}`;
    }

    console.log(favoriteCards);

}

// select all "choose-favorite" images
const chooseFavoriteAnime = document.querySelectorAll('.choose-favorite');

// add event listener to each image
chooseFavoriteAnime.forEach(image => {
    const card = image.closest('.card');
    const favoriteImage = card.querySelector('.is-favorite');
    const cardImage = card.querySelector('.card-img-top').src;
    const cardTitle = card.querySelector('.card-title').textContent;

    // Update image visibility based on the state of the card
    if (favoriteCards.some(favoriteCard => favoriteCard.title === cardTitle && favoriteCard.image === cardImage)) {
        // card is already a favorite
        favoriteImage.style.display = 'inline-block';
        image.style.display = 'none';
    } else if (favoriteImagesVisibility[cardTitle]) {
        // chooseImage was clicked before and hidden
        favoriteImage.style.display = 'none';
        image.style.display = 'inline-block';
    }

    // Remove existing event listeners
    image.removeEventListener('click', handleClick);
    favoriteImage.removeEventListener('click', handleClick);

    // Add new event listeners
    image.addEventListener('click', handleClick);
    favoriteImage.addEventListener('click', handleClick);
});

function clearAnimeStorage() {
    localStorage.clear();
}

const cardWrapper = document.querySelector('.container-animes');
const cardWrapper1 = document.querySelector('.container-animes-1');
const cardWrapper2 = document.querySelector('.container-animes-2');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow1 = document.querySelector('#left-arrow-1');
const rightArrow1 = document.querySelector('#right-arrow-1');
const leftArrow2 = document.querySelector('#left-arrow-2');
const rightArrow2 = document.querySelector('#right-arrow-2');

const cardWidth = document.querySelector('.card').clientWidth;
let currentPosition = 0;

leftArrow.addEventListener('click', () => {
    if (currentPosition < 0) {
        if (window.innerWidth <= 992) {
            currentPosition += (3 * cardWidth);
        }
        else
            currentPosition += (4 * cardWidth);
        cardWrapper.style.transform = `translateX(${currentPosition}px)`;
    }
});

leftArrow1.addEventListener('click', () => {
    if (currentPosition < 0) {
        if (window.innerWidth <= 992) {
            currentPosition += (3 * cardWidth);
        }
        else
            currentPosition += (4 * cardWidth);
        cardWrapper1.style.transform = `translateX(${currentPosition}px)`;
    }
});

leftArrow2.addEventListener('click', () => {
    if (currentPosition < 0) {
        if (window.innerWidth <= 992) {
            currentPosition += (3 * cardWidth);
        }
        else
            currentPosition += (4 * cardWidth);
        cardWrapper2.style.transform = `translateX(${currentPosition}px)`;
    }
});

rightArrow.addEventListener('click', () => {
    const maxScroll = cardWrapper.scrollWidth - cardWrapper.clientWidth;

    if (window.innerWidth <= 992) {
        if (currentPosition > -maxScroll - cardWidth - 200) {
            currentPosition -= (3 * cardWidth);
        }
    }
    else if (currentPosition > -maxScroll - cardWidth) {

        currentPosition -= (4 * cardWidth);

    }
    cardWrapper.style.transform = `translateX(${currentPosition}px)`;
});

rightArrow1.addEventListener('click', () => {
    const maxScroll = cardWrapper.scrollWidth - (cardWrapper.clientWidth - 50);
    if (currentPosition > -maxScroll) {
        if (window.innerWidth <= 992) {
            currentPosition -= (3 * cardWidth);
        }
        else
            currentPosition -= (4 * cardWidth);
        cardWrapper1.style.transform = `translateX(${currentPosition}px)`;
    }
});

rightArrow2.addEventListener('click', () => {
    const maxScroll = cardWrapper.scrollWidth - cardWrapper.clientWidth;
    if (currentPosition > -maxScroll - cardWidth - 300) {
        if (window.innerWidth <= 992) {
            currentPosition -= (3 * cardWidth);
        }
        else
            currentPosition -= (4 * cardWidth);
        cardWrapper2.style.transform = `translateX(${currentPosition}px)`;
    }
});



window.addEventListener('scroll', () => {
    const navbar = document.getElementsByTagName('header')[0];
    const scrolledClass = 'navbar-scrolled';

    if (window.scrollY > 200) {
        navbar.classList.add(scrolledClass);
    } else {
        navbar.classList.remove(scrolledClass);
    }
});

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-container', {
        height: '700',
        width: '1500',
        videoId: getVideoIdFromUrl(), // Replace with the YouTube video ID
        playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function playAnime(videoId) {
    // Generate the URL with the videoId
    const videoUrl = 'https://www.youtube.com/watch?v=' + videoId;

    // Redirect to the watch.html page and pass the videoUrl as a query parameter
    window.location.href = 'watch.html?videoUrl=' + encodeURIComponent(videoUrl);

    if (player) {
        player.loadVideoById(youtubeVideoId);
    }
}

function getVideoIdFromUrl() {
    // Get the URL parameter from the query string
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('videoUrl');

    // Extract the video ID from the URL
    const videoId = videoUrl.split('v=')[1];

    return videoId;
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








