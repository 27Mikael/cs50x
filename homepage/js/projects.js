// Scripts for projects.html 

const projectsCarouselElement = document.querySelector('#projects')
const carousel = new bootstrap.Carousel(projectsCarouselElement, {
  interval: 2000,
  wrap: false
});
