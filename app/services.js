export function updateProgress(valueInput, progressCircle) {
  const circle = progressCircle;
  const inputValue = valueInput;
  if (inputValue.value > MAX || inputValue.value < MIN || !(/^\d*\.?\d*$/).test(inputValue.value))
    inputValue.value = '';

  circle.style.setProperty('--progressValue', `${(inputValue.value / 100) * 360}deg`);
}

export function checkNaNValue(event) {
  if (!/[0-9.]/.test(event.key)) {
    event.preventDefault()
  }
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