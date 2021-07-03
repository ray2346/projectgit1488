

const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length);
console.log(btns[1].classList.add('red'));
// if (btns[1].classList.contains('red')){
// console.log('red');
// }

btns[0].addEventListener('click',()=>{
if(!btns[1].classList.contains('red')){
    btns[1].classList.add('red');
}else  {btns[1].classList.remove('red');}

btns[1].classList.toggle('red');
});

