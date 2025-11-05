// Save scroll position before reload
window.addEventListener('beforeunload', () => {
  localStorage.setItem('scrollPos', window.scrollY);
});

// Restore scroll position after reload
window.addEventListener('load', () => {
  const scrollPos = localStorage.getItem('scrollPos');
  if (scrollPos) window.scrollTo(0, parseInt(scrollPos));
});

/*
 * index.html script
*/
const elem = document.querySelectorAll("#about, #art, #projects, #blog");

elem.forEach(el => {
  el.addEventListener("click", () => {
    const url = el.dataset.url;
    if (url) {
      window.location.href = url;
    }
  });
});


/*
 * creative.html script
 *
 */
const items = document.querySelectorAll(".tl-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active")
    }
  });
});

document.querySelectorAll('.nav-items a').forEach(link => {
  if (link.textContent.toLocaleLowerCase().includes(location.pathname.split("/").pop().replace(".html", ""))) { link.classList.add("active"); }
});


/*
 * for blog.html
 */
const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const carouselItems = document.querySelectorAll('#item-list .item');

const itemWidth = 150
const padding = 10

/*prev.addEventListener('click', () => {
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click', () => {
  list.scrollLeft += itemWidth + padding
})*/

carouselItems.forEach(item => {
  item.addEventListener('click', () => {
    carouselItems.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
  });
});

/*
 * for about.html
 *
 */
const holder = document.querySelector('.holder');
const profile = document.querySelector('.profile');
holder.addEventListener('mouseenter', () => {
  if (profile.querySelector('.scroll-icons')) {
    return;
  }
  if (!profile.querySelector('.hover-icons')) {
    const iconHolder = document.createElement('div');
    iconHolder.className = 'hover-icons';
    Object.assign(iconHolder.style, {
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '15px',
      opacity: '0',
      transition: 'opacity 0.4s ease',
      zIndex: '9999',
      pointerEvents: 'auto',
    });
    const icons = [
      { src: '../image/icon/home-svgrepo-com.svg', url: '../index.html' },
      { src: '../image/icon/palette-svgrepo-com (2).svg', url: '../html/art.html' },
      { src: '../image/icon/blog-comment-edit-svgrepo-com.svg', url: '../html/blog.html' },
      { src: '../image/icon/artificial-intelligence-svgrepo-com.svg', url: '../html/projects.html' },
    ];
    icons.forEach((item, i) => {
      const link = document.createElement('a');
      link.href = item.url;
      link.target = '_self';
      link.rel = 'noopener noreferrer';
      link.style.zIndex = '10000';
      link.style.pointerEvents = 'auto';
      const icon = document.createElement('img');
      icon.src = item.src;
      Object.assign(icon.style, {
        width: '30px',
        height: '30px',
        opacity: '0',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        filter:
          'invert(13%) sepia(14%) saturate(6982%) hue-rotate(316deg) brightness(96%) contrast(95%)',
      });
      // Fade-in animation
      link.appendChild(icon);
      iconHolder.appendChild(link);
      setTimeout(() => (icon.style.opacity = '1'), 100 * (i + 1));
    });
    profile.appendChild(iconHolder);
    setTimeout(() => (iconHolder.style.opacity = '1'), 50);
  }
});
holder.addEventListener('mouseleave', () => {
  const iconHolder = profile.querySelector('.hover-icons');
  if (iconHolder) {
    iconHolder.style.opacity = '0';
    setTimeout(() => iconHolder.remove(), 300);
  }
});
