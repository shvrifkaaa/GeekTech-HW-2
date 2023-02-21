const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.querySelector('input');
const check = document.querySelector('#check')
const checkBox = document.querySelector('div')
checkBox.classList.add('checkbox')
checkBox.style.width = '50px'
checkBox.style.height = '50px'
checkBox.style.marginTop = '10px'
checkBox.style.backgroundColor = 'black'

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value)
};


check.addEventListener('click', () => {
  if (isEmailValid(input.value)) {
    checkBox.style.backgroundColor = 'green'
    alert('Email is valid');

  } else {
    checkBox.style.backgroundColor = 'red'
    alert('Email is invalid');

  }
});
let box = document.querySelector('.box')

let posX = 0
function move (){
  if(posX <=120){
    posX += 5;
    box.style.left = `${posX}px`
    setTimeout(move, 300)
  }
}
move()
