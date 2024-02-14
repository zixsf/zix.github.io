const heart = document.getElementById('heart');
heart.addEventListener('click', () => {
  if (heart.style.animationPlayState === 'running') {
    heart.style.animationPlayState = 'paused';
  } else {
    heart.style.animationPlayState = 'running';
  }
});
