const prmy = prompt("Hey What's your name");
const body = document.querySelector('body')
body.addEventListener('click' , (e)=>{
const circle = document.createElement('div')
circle.classList.add('circle')
    circle.style.left = `${e.clientX - 25}px`
    circle.style.top = `${e.clientY - 25}px`

circle.textContent = 'Hi ❤'+prmy;
const color = [
  '#FFB3BA', // light pink
  '#FFDFBA', // light peach
  '#FFFFBA', // light yellow
  '#BAFFC9', // light green
  '#BAE1FF', // light blue
  '#E3BAFF', // light purple
  '#FFD6E0', // soft rose
  '#D6FFFB', // light aqua
  '#F3E5F5', // lavender light
  '#FFF1BA', // light gold
  '#C8F7C5', // mint green
  '#FADADD', // baby pink
  '#D0F0C0', // tea green
  '#CDE7FF', // sky soft blue
  '#FFE5B4'  // soft orange
]
circle.style.backgroundColor = color[Math.floor(Math.random()*16)];
document.body.append(circle)
setTimeout(()=>{
    circle.remove()
},5000)
})
