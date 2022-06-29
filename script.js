let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

let button = document.getElementById('button');
button.addEventListener('click', function(){
  console.log("hi")
let randomColor = colors[Math.floor(Math.random() * colors.length)]
  console.log(randomColor)
  
let container = document.getElementById('container');
container.style.background = randomColor;
})

