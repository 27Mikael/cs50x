window.addEventListener('scroll', () => {
  const profile = document.querySelector('.profile');
  const img = profile.querySelector('img');
  const scrollY = window.scrollY;
  const maxScroll = 300;
  // Calculate progress (0 to 1)
  const progress = Math.min(scrollY / maxScroll, 1);
  const startHeight = 30;
  const endHeight = 8;
  const height = startHeight + (endHeight - startHeight) * progress;
  // Calculate width (50% to 100%)
  const startWidth = 50;
  const endWidth = 45;
  const width = startWidth + (progress * (endWidth - startWidth));
  // Calculate border radius (250px to 20px for bottom)
  const radius = 240 - (progress * 230);
  if (progress > 0) {
    profile.style.borderRadius = `${radius}px`;
    profile.style.height = `${height}vh`;
    profile.style.width = `${width}%`;
    profile.style.left = `50%`;
    profile.style.top = `2%`;
    // Fade out and scale down image
    img.style.opacity = 1 - progress;
    const imgScale = 1 - progress * 0.45;
    img.style.transform = `scale(${imgScale})`;
    // Check if icons already exist
    if (!profile.querySelector('.scroll-icons')) {
      const iconHolder = document.createElement('div');
      iconHolder.className = 'scroll-icons';
      iconHolder.style.position = 'absolute';
      iconHolder.style.bottom = '15px';
      iconHolder.style.left = '50%';
      iconHolder.style.transform = 'translateX(-50%)';
      iconHolder.style.gap = '15px';
      iconHolder.style.display = 'flex';
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
        link.style.pointerEvents = 'auto';
        const icon = document.createElement('img');
        icon.src = item.src;
        icon.style.width = '40px';
        icon.style.height = '40px';
        icon.style.opacity = '0';
        icon.style.transition = 'opacity 0.4s ease';
        link.appendChild(icon);
        iconHolder.appendChild(link);
        setTimeout(() => (icon.style.opacity = '1'), 100 + i * 100);
      });
      profile.appendChild(iconHolder);
    }
  } else {
    // Reset to initial state
    profile.style.borderRadius = '';
    profile.style.height = '';
    profile.style.top = '';
    profile.style.width = '';
    profile.style.left = '';
    img.style.opacity = '';
    img.style.transform = 'scale(1)';
    // Remove icons when scrolling back up
    const existingIcons = profile.querySelector('.scroll-icons');
    if (existingIcons) existingIcons.remove();
  }
  // Hide scroll hint after scrolling
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollY > 50) {
    scrollHint.style.opacity = '0';
  } else {
    scrollHint.style.opacity = '1';
  }
})


