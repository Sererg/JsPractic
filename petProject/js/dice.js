
window.addEventListener( 'DOMContentLoaded', function () {
	
    const buttonRoolDice = document.querySelector( '.dice-roll' );
    const diceSide1 = document.getElementById( 'dice-side-1' ),
    diceSide2 = document.getElementById( 'dice-side-2' ),
    status = document.getElementById( 'status' );

   

          

  function rollDice () {

    const side1 = Math.floor( Math.random() * 6 ) + 1,
    side2 = Math.floor( Math.random() * 6 ) + 1,
    diceTotal = side1 + side2;

    diceSide1.innerHTML = side1;
    diceSide2.innerHTML = side2;
    diceSide1.rotateIn();
    diceSide2.rotateIn();

    status.innerHTML = 'You rolled ' + diceTotal + '.';

    if ( side1 === side2 ) {
        status.innerHTML += ' Doubles! You get a free turn!';
    }
  }

  buttonRoolDice.addEventListener( 'click', rollDice, false );

  //create Dice
  const input = document.getElementById('number');
  const createDice = document.querySelector('.createDice');
  function Input() {

    let block = new Array();
    for (i = 0; i < input.value; i++)
      block.push(`<div class="dice">${Math.floor( Math.random() * 6 ) + 1}</div>`);
    document.getElementById('block').innerHTML = block.join('');

    console.log(block);
  }

  createDice.addEventListener('click', () =>{
    Input();
  });
}, false);
