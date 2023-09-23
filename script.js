class Slider {
    constructor(images, itemsWrapperClass, circlesWrapperClass, btnNextClass, btnPrevClass) {
      this.images = images;
      this.counterImg = 0;
  
      // Seleziona gli elementi del DOM in base alle classi fornite come argomenti
      this.itemsWrapper = document.querySelector(itemsWrapperClass);
      this.circlesWrapper = document.querySelector(circlesWrapperClass);
      this.btnNext = document.querySelector(btnNextClass);
      this.btnPrev = document.querySelector(btnPrevClass);
      this.autoSlideInterval = 5000; // Intervallo di autoslide in millisecondi
  
      // Nascondi il pulsante "Prev" all'inizio e svuota i contenitori delle immagini e dei cerchi
      this.btnPrev.classList.add('hide');
      this.itemsWrapper.innerHTML = '';
      this.circlesWrapper.innerHTML = '';
  
      // Inizializza il carousel
      this.init();
    }
  
    init() {
      // Renderizza le immagini nel carousel
      this.renderImages();
      // Aggiungi gli eventi per la navigazione e l'auto-avanzamento
      this.addEventListeners();
      // Avvia l'auto-avanzamento delle immagini
      this.startAutoSlide();
    }
  
    renderImages() {
      for (let i = 0; i < this.images.length; i++) {
        const image = this.images[i];
        const item = document.createElement('div');
        item.classList.add('item', 'hide');
        item.innerHTML = `
          <img src="${image.image}" alt="${image.title}">
          <h2>${image.title}</h2>
          <p>${image.text}</p>`;
        this.itemsWrapper.appendChild(item);
  
        const circle = document.createElement('div');
        circle.classList.add('circle');
        this.circlesWrapper.appendChild(circle);
      }
  
      // Mostra la prima immagine e il cerchio corrispondente
      this.itemsWrapper.querySelector('.item').classList.remove('hide');
      this.circlesWrapper.querySelector('.circle').classList.add('active');
    }
  
    addEventListeners() {
      // Aggiungi eventi per i pulsanti di navigazione e l'auto-avanzamento
      this.btnNext.addEventListener('click', () => this.nextSlide());
      this.btnPrev.addEventListener('click', () => this.prevSlide());
      this.itemsWrapper.addEventListener('mouseover', () => this.stopAutoSlide());
      this.itemsWrapper.addEventListener('mouseout', () => this.startAutoSlide());
    }
  
    nextSlide() {
      // Passa alla prossima immagine e aggiorna le classi di visualizzazione
      this.toggleSlide(this.counterImg, 'hide', 'active');
      this.counterImg = (this.counterImg + 1) % this.images.length;
      this.toggleSlide(this.counterImg, 'hide', 'active');
      this.btnPrev.classList.remove('hide');
    }
  
    prevSlide() {
      // Passa all'immagine precedente e aggiorna le classi di visualizzazione
      this.toggleSlide(this.counterImg, 'hide', 'active');
      this.counterImg = (this.counterImg - 1 + this.images.length) % this.images.length;
      this.toggleSlide(this.counterImg, 'hide', 'active');
      this.btnNext.classList.remove('hide');
    }
  
    toggleSlide(index, hideClass, activeClass) {
      // Gestisce la visualizzazione delle immagini e dei cerchi
      const item = this.itemsWrapper.querySelectorAll('.item')[index];
      const circle = this.circlesWrapper.querySelectorAll('.circle')[index];
  
      item.classList.toggle(hideClass);
      circle.classList.toggle(activeClass);
    }
  
    startAutoSlide() {
      // Avvia l'auto-avanzamento delle immagini
      this.interval = setInterval(() => {
        this.nextSlide();
      }, this.autoSlideInterval);
    }
  
    stopAutoSlide() {
      // Ferma l'auto-avanzamento delle immagini
      clearInterval(this.interval);
    }
  }
  
  // Array di immagini
  const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];
  
  // Creazione dell'istanza del carousel
  const slider = new Slider(
    images,
    '.items-wrapper',
    '.circles',
    '.right',
    '.left'
  );
  