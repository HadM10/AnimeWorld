window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');

    setTimeout(function () {
        preloader.style.display = 'none';
    }, 4000);
});

let randomCharacters = [
    {
        "name": "Naruto Uzumaki",
        "img": "random/naruto.jpg",
        "description": " Naruto Uzumaki is the main protagonist of the Naruto franchise. He is a young shinobi who dreams of becoming Hokage, the leader of his village. Naruto is a very optimistic and cheerful person, despite the fact that he was shunned and hated by the villagers of Konohagakure for being the host of the Nine-Tails, a powerful demon fox. Naruto is also very determined and never gives up on his dreams, even when things seem impossible. He is a skilled ninja and has a wide range of abilities, including the Rasengan, a powerful ball of chakra that he created himself. Naruto is a loyal friend and a great leader, and he is always willing to fight for what he believes in."
    },
    {
        "name": "Sasuke Uchiha",
        "img": "random/sasuke.jpg",
        "description": " Sasuke Uchiha is a fictional character in the Naruto manga and anime franchise created by Masashi Kishimoto. He is a member of the Uchiha clan, a notorious ninja family, and one of the most powerful, allied with Konohagakure (木ノ葉隠れの里) Most of its members were massacred by Sasuke's older brother, Itachi Uchiha, before the series began, leaving Sasuke one of the few living.  Sasuke is a skilled ninja and has a wide range of abilities, including the Sharingan, a powerful eye technique that allows him to copy other people's jutsu, and the Mangekyou Sharingan, a more powerful version of the Sharingan. He is also a master of the sword and has a great deal of physical strength.    Sasuke is a very complex and well-developed character. He is initially motivated by revenge against his brother, but he eventually comes to realize that there is more to life than just revenge. He becomes a valuable ally to Naruto and the other Konoha shinobi, and he ultimately sacrifices his own happiness to protect the village."
    },
    {
        "name": "Eren Yeager",
        "img": "random/eren.jpg",
        "description": " Eren Yeager is the main protagonist of the Attack on Titan manga series and anime.He is a young man who lives in the Walls, a series of fortifications that protect humanity from the Titans, giant humanoid creatures that eat humans.Eren dreams of one day joining the Survey Corps, a group of soldiers who fight Titans outside the Walls. Eren is a very determined and passionate person.He is always willing to fight for what he believes in, even when it means putting himself in danger.He is also very protective of his friends and family.Eren is a very complex character, and he has gone through a lot of changes throughout the series.He has started out as a naive and idealistic young man, but he has slowly become more hardened and cynical as he has witnessed the horrors of the world."
    },
    {
        "name": "Levi Ackerman",
        "img": "random/levi.jpg",
        "description": " Levi Ackerman is a fictional character in the Attack on Titan manga series and anime. He is the captain of the Survey Corps, a group of soldiers who fight Titans outside the Walls. Levi is known for his incredible skills as a Titan killer, and he is considered to be the strongest soldier in humanity. Levi is a very complex and well-developed character. He is initially portrayed as a cold and ruthless individual, but he eventually shows that he has a strong sense of justice and a deep care for his comrades. Levi is also a very skilled tactician, and he is always willing to put himself in danger to protect the people he cares about."
    },
    {
        "name": "Itachi Uchiha",
        "img": "random/itachi.jpg",
        "description": "Itachi Uchiha is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. He is a member of the Uchiha clan, a clan of powerful ninjas from the Hidden Leaf Village. Itachi is a prodigy, and he is considered to be one of the strongest ninjas in the world. He is also a master of the Sharingan, a powerful eye technique that allows him to copy other people's jutsu.    Itachi is a very complex and well-developed character. He is initially portrayed as a villain, but it is later revealed that he is actually a hero. Itachi massacred his entire clan in order to prevent a civil war, and he then defected from the Hidden Leaf Village in order to protect his younger brother, Sasuke. Itachi is a very intelligent and strategic ninja. He is always thinking several steps ahead, and he is able to come up with creative solutions to problems. He is also a very skilled fighter, and he is able to defeat even the most powerful opponents. Itachi is a very complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Light Yagami (Kira)",
        "img": "random/kira.jpg",
        "description": "Light Yagami is the main protagonist of the Death Note manga and anime series. He is a high school student who finds a supernatural notebook called the Death Note, which allows him to kill anyone whose name he writes in it. Light decides to use the Death Note to rid the world of criminals and create a perfect world, but he soon becomes corrupted by power and begins to kill anyone who gets in his way. Light is a very intelligent and charismatic person. He is also very ambitious and driven. Light is willing to do whatever it takes to achieve his goals, even if it means killing people. Light is a complex and well-developed character. He is a villain, but he is also a sympathetic character. Light's story is one of ambition, corruption, and ultimately, downfall."
    },
    {
        "name": "L",
        "img": "random/l.jpg",
        "description": " L is a fictional character in the Death Note manga and anime series. He is a world-renowned detective who is hired by the Japanese police to investigate the Kira case, a series of murders committed by a serial killer who is using a supernatural notebook called the Death Note. L is a very intelligent and eccentric person. He is also very secretive and mysterious. L is willing to do whatever it takes to solve the Kira case, even if it means breaking the law or putting himself in danger. L is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Goku",
        "img": "random/goku.jpg",
        "description": "Goku is the main protagonist of the Dragon Ball manga and anime series. He is a Saiyan, a race of warriors from another planet. Goku is a very kind and compassionate person. He is always willing to help others, even if it means putting himself in danger. Goku is also a very skilled fighter. He has trained for many years, and he is one of the strongest fighters in the world. Goku is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Monkey D. Luffy",
        "img": "random/luffy.jpg",
        "description": "Monkey D. Luffy is the main protagonist of the One Piece manga and anime series. He is a pirate who dreams of becoming the Pirate King, the most powerful pirate in the world. Luffy is a very determined and optimistic person. He is always willing to fight for what he believes in, even when it seems impossible. Luffy is also very charismatic and has a knack for making friends. Luffy is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and friendship."
    },
    {
        "name": "Ichigo Kurosaki",
        "img": "random/ichigo.jpg",
        "description": "Ichigo Kurosaki is the main protagonist of the Bleach manga and anime series. He is a high school student who gains the powers of a Soul Reaper, a being that protects humans from evil spirits. Ichigo is a very determined and compassionate person. He is always willing to help others, even if it means putting himself in danger. Ichigo is also a very skilled fighter. He has trained for many years, and he is one of the strongest Soul Reapers in the world. Ichigo Kurosaki is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Gon Freecss",
        "img": "random/gon.jpg",
        "description": "Gon Freecss is the main protagonist of the Hunter x Hunter manga and anime series. He is a young boy who dreams of becoming a Hunter, a licensed professional who specializes in anything from hunting animals to finding lost treasures. Gon is a very determined and optimistic person. He is always willing to fight for what he believes in, even when it seems impossible. Gon is also very charismatic and  has a knack for making friends. He is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and friendship."
    },
    {
        "name": "Killua Zoldyck",
        "img": "random/killua.jpg",
        "description": "Killua Zoldyck is a fictional character in the Hunter x Hunter manga and anime series. He is a young assassin who is a member of the Zoldyck family, a family of assassins. Killua is a very skilled fighter. He has trained for many years, and he is one of the most skilled assassins in the world. Killua is also very kind and compassionate. He is always willing to help others, even if it means putting himself in danger. Killua is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Rengoku Kyojuro",
        "img": "random/rengoku.jpg",
        "description": "Rengoku Kyojuro is a fictional character in the Demon Slayer: Kimetsu no Yaiba manga and anime series. He is a Flame Hashira, one of the nine most powerful swordsmen in the Demon Slayer Corps. Rengoku is a very skilled fighter. He is known for his powerful flame breathing techniques. Rengoku is also very kind and compassionate. He is always willing to help others, even if it means putting himself in danger. Rengoku is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Tanjiro Kamado",
        "img": "random/tanjiro.jpg",
        "description": "Tanjiro Kamado is the main protagonist of the Demon Slayer: Kimetsu no Yaiba manga and anime series. He is a young man who dreams of becoming a Demon Slayer and turning his sister Nezuko, who has been turned into a demon, back into a human. Tanjiro is a very determined and passionate person. He is always willing to fight for what he believes in, even when it seems impossible. Tanjiro is also very protective of his family and friends. Tanjiro is a complex and well-developed character. He is a role model for many people, and his story is one of hope, determination, and sacrifice."
    },
    {
        "name": "Madara Uchiha",
        "img": "random/madara.jpg",
        "description": "Madara Uchiha was a powerful Uchiha clan member who lived during the Second Great Ninja War. He was one of the founders of Konohagakure, along with his rival and best friend, Hashirama Senju. Madara was a brilliant strategist and tactician, and he was also a powerful shinobi. Madara was a complex and conflicted individual. He was driven by a desire to create a world where everyone would be happy and safe. However, he was also willing to use extreme and violent methods to achieve his goals. This led him to clash with Hashirama, and eventually to war. Madara was ultimately defeated by Hashirama, but he survived and went into hiding. Madara resurfaced many years later, and he began to work towards his goal of creating a world of peace. However, his methods were still extreme and violent, and he eventually came into conflict with Naruto Uzumaki and his friends. Madara was ultimately defeated by Naruto, but his legacy continues to haunt the world of Naruto."
    },
    {
        "name": "Obito Uchiha",
        "img": "random/obito.jpg",
        "description": "Obito Uchiha was a shinobi from Konohagakure's Uchiha clan. He was believed to have died during the Third Shinobi World War, his only surviving legacy being the Sharingan he gave to his teammate, Kakashi Hatake. However, Obito secretly survived and resurfaced years later under the alias Tobi, leading the Akatsuki, a criminal organization that sought to bring peace to the world through the Infinite Tsukuyomi. Obito was a complex and conflicted character. He was initially a kind and idealistic young man who wanted to protect his friends and village. However, after witnessing the death of his love interest, Rin Nohara, Obito became disillusioned with the world and believed that it was a cruel and unforgiving place. He was manipulated by Madara Uchiha, who convinced him that the only way to achieve peace was to create a world where everyone was under the Infinite Tsukuyomi, a genjutsu that would place them in a state of eternal happiness. Obito eventually realized the error of his ways and helped Naruto Uzumaki to defeat Madara. He died in the battle, but he was able to redeem himself and achieve his goal of peace."
    },
]

let characters = document.getElementById('random-character');

function getRandomCharacter(randomCharacters) {
    var characterElement = document.querySelector(".container-characters");
    characterElement.style.opacity = '1';
    var randomIndex = Math.floor(Math.random() * randomCharacters.length);
    return randomCharacters[randomIndex];

}



var randomCharacter = getRandomCharacter(randomCharacters);

document.querySelector(".container-characters").innerHTML = `
  <div class="character-image">
    <img src="${randomCharacter.img}" />
  </div>
  <div class="character-info">
    <h2 class="character-name">${randomCharacter.name}</h2>
    <p class="character-description">${randomCharacter.description}</p>
  </div>
`;

document.getElementById("getRandomCharacter").addEventListener("click", function () {
    var randomCharacter = getRandomCharacter(randomCharacters);
    var containerElement = document.querySelector(".container-characters");

    // Fade out container
    containerElement.style.opacity = 0;

    setTimeout(function () {
        // Update character data
        containerElement.innerHTML = `
        <div class="character-image">
          <img src="${randomCharacter.img}" />
        </div>
        <div class="character-info">
          <h2 class="character-name">${randomCharacter.name}</h2>
          <p class="character-description">${randomCharacter.description}</p>
        </div>
      `;

        // Fade in container
        containerElement.style.opacity = 1;
    }, 500); // Delay for 500 milliseconds (0.5 seconds)
});

const storedCards = localStorage.getItem('favoriteCards');
const favoriteCards = JSON.parse(storedCards);

const favoriteMenu = document.getElementById('favorite-nav');
if (favoriteMenu) {
    favoriteMenu.textContent = ` ${favoriteCards.length}`;
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementsByTagName('header')[0];
    const scrolledClass = 'navbar-scrolled';

    if (window.scrollY > 50) {
        navbar.classList.add(scrolledClass);
    } else {
        navbar.classList.remove(scrolledClass);
    }
});

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
