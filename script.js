//elements
const itemsWrapper = document.querySelector('.items-wrapper');
const circlesWrapper = document.querySelector('.circles');
const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');

//nascondo di defoult il bottone prev
btnPrev.classList.add('hide');

//nascondo di defoult il bottone prev
btnPrev.classList.add('hide');

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts, and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


let counterImg = 0;

//resetto lo slider
itemsWrapper.innerHTML = '';
circlesWrapper.innerHTML = '';

//con un ciclo stampo tutte le immagini dentro a items-wrapper
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log(image);
    itemsWrapper.innerHTML += `<img src="${image}" class="item hide"></img>`;
    //stampare tanti pallini quanti sono le immagini
    circlesWrapper.innerHTML += `<div class="circle"></div>`;
}

//prendo tutti gli elementi ocn la classe item e li salvo in un array
const itemsCollection = document.getElementsByClassName('item');

//prendo tutta la collection dei pallini
const circlesCollection = document.getElementsByClassName('circle');

//al primo elemento tolgo la classe hide
itemsCollection[counterImg].classList.remove('hide');

//rendo attivo il primo pallino
circlesCollection[counterImg].classList.add('active');

//al click di next
btnNext.addEventListener('click', function(){
    //aggiungo la classe hide all'elemento corrente e rimuovo active dal pallino corrente
    itemsCollection[counterImg].classList.add('hide');
    circlesCollection[counterImg].classList.remove('active');
    //incrementa il contatore
    counterImg++;
    //BONUS 1
    // Verifico se si è raggiunta l'ultima immagine
    if (counterImg === itemsCollection.length) {
        // Se sì, torna alla prima immagine
        counterImg = 0;
    }
    //tolgo la classe hide all'elemento corrente e aggiungo active dal pallino corrente
    itemsCollection[counterImg].classList.remove('hide');
    circlesCollection[counterImg].classList.add('active');
    //al click di next appare prev
    btnPrev.classList.remove('hide');
});

//al click di prev come punto 4 va inverso
btnPrev.addEventListener('click', function(){
    itemsCollection[counterImg].classList.add('hide');
    circlesCollection[counterImg].classList.remove('active');
    counterImg--;
    //BONUS 1
    // Verifico se si è raggiunta la prima immagine
    if (counterImg < 0) {
        // Se sì, torna all'ultima immagine
        counterImg = itemsCollection.length - 1;
    }
    itemsCollection[counterImg].classList.remove('hide');
    circlesCollection[counterImg].classList.add('active');
    //al click di prev mostrio next togliendo la classe hide
    btnNext.classList.remove('hide');
    
});

//Autoslide
// Variabile per l'intervallo di autoslide
let interval; 

// Tempo in millisecondi tra le slide automatiche
const autoSlideInterval = 3000; 

// Funzione per avviare l'autoslide
function startAutoSlide() {
  interval = setInterval(function () {

    // Simula il click sul pulsante "Next" per cambiare immagine
    btnNext.click(); 
  }, autoSlideInterval);
}

// Funzione per interrompere l'autoslide
function stopAutoSlide() {
  clearInterval(interval);
}

// Aggiungo un gestore di eventi per avviare l'autoslide al caricamento della pagina
document.addEventListener("DOMContentLoaded", startAutoSlide);

// Aggiungo gestori di eventi per interrompere l'autoslide quando il mouse è sopra il carosello
itemsWrapper.addEventListener("mouseover", stopAutoSlide);
itemsWrapper.addEventListener("mouseout", startAutoSlide);
