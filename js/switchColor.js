const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
  startBtn: document.querySelector("start-btn-js"),
  stopBtn: document.querySelector("stop-btn-js"),
  body: document.querySelector(body),
}

refs.startBtn.addEventListener('click', beginChangingColor)

beginChangingColor = () =>{
setInterval(changeColor,1000)
}

changeColor = () => {
  refs.body.style.backgroundColor = colors[Math.random(0,colors.length)];
}