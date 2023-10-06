// touchstart / touchend
// toucnmove
// touchenter
// touchleave
// touchcancel

// touches колво пальцев 
// tartgetTouches 
// changedTouches

window.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault;

        console.log('start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault;

        console.log('start');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault;

        console.log('end');
    });

}); 

