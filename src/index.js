const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


const button = document.getElementById('button')
button.addEventListener('click', getApiInfo)


const street = document.getElementById('street')
const city = document.getElementById('city')
const state = document.getElementById('state')
const postcode = document.getElementById('postcode')
const phone = document.getElementById('phone')
const cell = document.getElementById('cell')
const date_of_birth = document.getElementById('date_of_birth')
const profpic = document.getElementById('profile_picture')


function getApiInfo () {
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log(data.results[0])
    fullname.textContent = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
    street.textContent = data.results[0].location.street
    city.textContent = data.results[0].location.city
    state.textContent = data.results[0].location.state
    postcode.textContent = data.results[0].location.postcode
    phone.textContent = data.results[0].phone
    cell.textContent = data.results[0].cell
    date_of_birth.textContent = data.results[0].dob.date.slice(0,10)
    email.textContent = data.results[0].email
    profpic.src = data.results[0].picture.large
  })




}



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

});
