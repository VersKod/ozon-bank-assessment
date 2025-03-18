import { updateProgress, controlRotation, hideCircle, checkNaNValue } from './services.js';

const progressCircle = document.getElementById('circle');
const valueInput = document.getElementById('value');
const animateToggle = document.getElementById('animate');
const hideToggle = document.getElementById('visibility');

valueInput.addEventListener('input', () => updateProgress(valueInput, progressCircle));
valueInput.addEventListener('keypress', checkNaNValue);

animateToggle.addEventListener('change', () =>
  controlRotation(animateToggle, progressCircle)
);

hideToggle.addEventListener('change', ()=> hideCircle(hideToggle, progressCircle) )
