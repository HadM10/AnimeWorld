window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');

  setTimeout(function () {
    preloader.style.display = 'none';
  }, 4000);
});

const storedCards = localStorage.getItem('favoriteCards');
const favoriteCards = JSON.parse(storedCards);

const favoriteMenu = document.getElementById('favorite-count');
if (favoriteMenu) {
  favoriteMenu.textContent = ` ${favoriteCards.length}`;
}

const favoriteCardsContainer = document.getElementById('favorite-anime');

favoriteCards.forEach(card => {

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.classList.add('card-fav');
  cardElement.classList.add('cWidth');
  cardElement.innerHTML = `
    <img class="card-img-top" src="${card.image}">
    <div class="card-body">
      <h5 class="card-title-fav">${card.title}</h5>
    </div>
  `;
  favoriteCardsContainer.appendChild(cardElement);

});

//Navbar

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


window.addEventListener('scroll', () => {
  const navbar = document.getElementsByTagName('header')[0];
  const scrolledClass = 'navbar-scrolled';

  if (window.scrollY > 200) {
    navbar.classList.add(scrolledClass);
  } else {
    navbar.classList.remove(scrolledClass);
  }
});