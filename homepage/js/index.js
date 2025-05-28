// Script for the index.html

function loadPage(page) {
  const iframe = document.getElementById('content-frame');
  iframe.style.opacity = 0;
  iframe.onload = () => iframe.style.opacity = 1;
  iframe.src = page;
}
