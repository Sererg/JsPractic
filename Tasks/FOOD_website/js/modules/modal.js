  // Modal окно
function modal() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

function openModal(){
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
clearInterval(modaltimerId);
};
modalTrigger.forEach(btn => {
  btn.addEventListener('click', openModal);
});


function closeModel(){
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modal.addEventListener('click', (e)=> {
  if (e.target === modal || e.target.getAttribute('data-close') == ''){
      closeModel();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.code === 'Escape' && modal.classList.contains('show')) {
      closeModel();
  }
});

const modaltimerId = setTimeout(openModal, 50000);

function showmodalByScroll(){
  if( window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
      openModal();
      window.removeEventListener('scroll', showmodalByScroll);
  }
}

window.addEventListener('scroll', showmodalByScroll);
}

module.exports = modal;