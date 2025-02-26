let seats = document.querySelector(".avail-seats");
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