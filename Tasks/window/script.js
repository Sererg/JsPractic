'use strict';
 
const box = document.querySelector('.box'),
      btn = document.querySelector('button');


// const width = box.clientWidth;
// const heihth = box.clientHeight;
const width = box.offsetWidth;
const heihth = box.scrollHeight;

console.log(width, heihth);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style);
