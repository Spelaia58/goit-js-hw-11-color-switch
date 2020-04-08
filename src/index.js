import './styles.css';


colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
  },

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
 
  let interval = null;

  refs.startBtn.addEventListener('click', e => interval = interval ? interval:
  setInterval(() => randomIntegerFromInterval(), 1000));

  refs.stopBtn.addEventListener('click', e => clearInterval(interval));