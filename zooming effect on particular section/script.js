const mainImage = document.getElementById('mainImage');
const zoom = document.getElementById('zoom');

mainImage.addEventListener('mousemove', (event) => {
  const rect = mainImage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Calculate the percentage of the position relative to the image
  const xPercent = (x / mainImage.width) * 100;
  const yPercent = (y / mainImage.height) * 100;

  zoom.style.backgroundImage = `url(${mainImage.src})`;
  zoom.style.backgroundSize = `${mainImage.width * 2}px ${mainImage.height * 2}px`; // 2x zoom
  zoom.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  zoom.style.display = 'block';
});

mainImage.addEventListener('mouseleave', () => {
  zoom.style.display = 'none';
});
