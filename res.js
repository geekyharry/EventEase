//Booking Station

let seats = document.querySelector(".all-seats");
for(let i=0; i<59;i++){
  let randomint = Math.floor(Math.random()*2);
  let booked = randomint===1 ? "booked" : "";

  seats.insertAdjacentHTML(
    "beforeend",
    `<input type = "checkbox" name="tickets" id="s${i+2}">
    <label for="s${i+2}" class="seat ${booked}"></label>
    `
  )
}

let tickets = seats.querySelectorAll("input")
tickets.forEach((ticket)=>{
  ticket.addEventListener("change", ()=>{
    let amount = document.querySelector(".amount").innerHTML;
    let count = document.querySelector(".count").innerHTML;

    amount = Number(amount)
    count = Number(count)

    if(ticket.checked){
      count+=1;
      amount+=200;
    }else{
      count-=1;
      amount-=200;
    }
    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
  })
})

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