//Slider

const left = document.querySelector('.lf');
const right = document.querySelector('.rg');
const slidr = document.querySelector('.slider');
const imag = document.querySelectorAll('.image');

let slideNumber = 1 
const length = imag.length

const nxtsld = ()=>{
  slidr.style.transform = `translateX(-${slideNumber*1100}px)`;
  slideNumber++;
}

const presld = ()=>{
  slidr.style.transform = `translateX(-${(slideNumber-2)*1100}px)`;
  slideNumber--;
}

const firstsld = ()=>{
  slidr.style.transform = `translateX(-0px)`;
  slideNumber = 1;
}

const lstsld = ()=>{
  slidr.style.transform = `translateX(-${(length-1)*1100}px)`;
  slideNumber = length;
}

right.addEventListener('click', ()=> {
  slideNumber<length ? nxtsld() : firstsld();
});

left.addEventListener('click', ()=> {
  slideNumber > 1 ? presld() : lstsld();
});
