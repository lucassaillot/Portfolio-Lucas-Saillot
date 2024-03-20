// TOGGLE MENU
function toggleMenu() {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

// CHANGER FLAVICON SYSTEM NOIR OU BLANC
window.addEventListener("load", function () {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const favicon = document.getElementById("favicon");

  function toggleFavicon(darkModeMediaQuery) {
    if (darkModeMediaQuery.matches) {
      favicon.href = "img/flavicon_white.png"; // Favicon pour le mode sombre
    } else {
      favicon.href = "img/flavicon_dark.png"; // Favicon pour le mode clair
    }
  }

  toggleFavicon(darkModeMediaQuery);
  darkModeMediaQuery.addEventListener("change", toggleFavicon);
});

// PROJETS
function toggleProjet(projet) {
  projet.classList.toggle("active");
  event.stopPropagation();

  // Récupérer l'icône icon_caret spécifique à ce projet et lui appliquer la rotation
  const iconCaret = projet.querySelector(".icon_caret");
  iconCaret.classList.toggle("rotate");

  // Empêcher la propagation de l'événement de clic des boutons à l'intérieur du bloc de projet
  projet.querySelectorAll(".projet_details button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
}

// Ajouter un gestionnaire d'événements de clic à chaque vidéo à l'intérieur des blocs de projet
document.querySelectorAll(".projet_details video").forEach((video) => {
  video.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêcher la propagation de l'événement de clic vers le parent
  });
});

// Lorsque l'utilisateur fait défiler la page de 20px vers le bas, montre le bouton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("bouton_aller_en_haut").style.display = "block";
  } else {
    document.getElementById("bouton_aller_en_haut").style.display = "none";
  }
}

// Lorsque l'utilisateur clique sur le bouton, fait défiler jusqu'en haut de la page
function topFunction() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}
