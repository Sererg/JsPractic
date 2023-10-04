
const btn = document.querySelectorAll('button');

btn.onmouseenter = function(){
    console.log('das');
}
let i = 0;
const deleteElemet = (e) =>{
    console.log(e.target);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener("click", deleteElemet);
    // }
}
btn.forEach(item =>{
    item.addEventListener("click", deleteElemet, {once: true});
})

  const link  = document.querySelector('a');
  link.addEventListener('click', function(e){
    e.preventDefault();

    console.log(e.target)
  })