// 5.2

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });
});

// 5.3

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};


document.querySelector('.nav__link').addEventListener('click',(e)=>{
   e.preventDefault();
    e.target.style.backgroundColor = randomColor();
   console.log(e.target);
//    e.stopPropagation();
})
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
    e.target.style.backgroundColor = randomColor();

    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  console.log(e.target);
//   e.stopPropagation();

});
document.querySelector('.nav').addEventListener('click', e => {
e.preventDefault();
  e.target.style.backgroundColor = randomColor();
  console.log(e.target);
//   e.stopPropagation();
});


// 5.4

const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered';

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach((el)=>{
    if(el !==h1){
        return el.style.transform = 'scale(0.5)'
    }
})