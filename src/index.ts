import App from "./App"
import swordAnimation from "./Components/swordAnimation/swordAnimation";


window.addEventListener('DOMContentLoaded', () => {
//   App
swordAnimation

})



const slider = document.querySelector('.featureCardContainer') as HTMLElement;
let isDown = false;
let startX;
let scrollLeft;

slider!.addEventListener('mousedown', (e) => {
  isDown = true;
  slider!.classList.add('active');
  startX = e.pageX - slider!.offsetLeft;
  scrollLeft = slider!.scrollLeft;
});
slider!.addEventListener('mouseleave', () => {
  isDown = false;
  slider!.classList.remove('active');
});
slider!.addEventListener('mouseup', () => {
  isDown = false;
  slider!.classList.remove('active');
});
slider!.addEventListener('mousemove', (e:any) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider!.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider!.scrollLeft = scrollLeft - walk;
});






