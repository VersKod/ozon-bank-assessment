export function updateProgress(valueInput, progressCircle) {
  const circle = progressCircle;
  const value = Math.min(100, Math.max(0, valueInput.value));
  circle.style.setProperty('--progressValue', `${(value / 100) * 360}deg`);
}

export function controlRotation(animateToggle, progressCircle) {
  const circle = progressCircle;
  if (animateToggle.checked) {
    circle.style.animation = `rotate 2s linear infinite`;
  } else {
    circle.style.animation = '';
  }
}

export function hideCircle(hideToggle, progressCircle) {
  const circle = progressCircle;
  circle.style.opacity = hideToggle.checked ? '0' : '1';
}