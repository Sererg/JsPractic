
const box = document.getElementById('box');
const btns = document.getElementsByTagName("button");
const cirles = document.getElementsByClassName('circle');
const herts = document.querySelectorAll('.heart');
const oneHerts = document.querySelector('.heart');
const wrapper = document.querySelectorAll('.wrapper');

box.style.backgroundColor = 'blue';
btns[1].style.borderRadius = '100%';
box.style.cssText = 'background-color: yellow';

// for(let i = 0; i < herts.length; i++){
//     herts[i].style.backgroundColor = 'black';
// }

herts.forEach(item => {
    item.style.backgroundColor = 'black'
});

const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);

// herts[0].before(div);
// herts[0].after(div);

// cirles[0].remove();

// herts[0].replaceWith(cirles[0]);

div.innerHTML = "hello world";