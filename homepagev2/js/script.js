
/*
 * index.html script
*/
const elem = document.querySelectorAll("#about, #creative, #experimental, #blog");

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
window.addEventListener('scroll', () => {
  const profile = document.querySelector('.profile');
  const img = profile.querySelector('img');
  const scrollY = window.scrollY;
  const maxScroll = 300;

  // Calculate progress (0 to 1)
  const progress = Math.min(scrollY / maxScroll, 1);

  const startHeight = 30;
  const endHeight = 10;
  const height = startHeight + (endHeight - startHeight) * progress;

  // Calculate width (50% to 100%)
  const startWidth = 50;
  const endWidth = 99;
  const width = startWidth + (progress * (endWidth - startWidth));

  // Calculate border radius (250px to 20px for bottom)
  const radius = 240 - (progress * 230);
  const top = progress * 80;

  if (progress > 0) {
    profile.style.borderRadius = `${radius}px`;
    profile.style.height = `${height}vh`;
    profile.style.width = `${width}%`;
    profile.style.left = `${(100 - width) / 2}%`;
    profile.style.top = `10px`;

    // Fade out and scale down image
    img.style.opacity = 1 - progress;
    const imgScale = 1 - progress * 0.45;
    img.style.transform = `scale(${imgScale})`;
  } else {
    // Reset to initial state
    profile.style.borderRadius = '';
    profile.style.height = '';
    profile.style.top = ``;
    profile.style.width = '';
    profile.style.left = '';
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }

  // Hide scroll hint after scrolling
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollY > 50) {
    scrollHint.style.opacity = '0';
  } else {
    scrollHint.style.opacity = '1';
  }
})
