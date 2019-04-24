const fullname = document.getElementById("fullname");
const dob = document.getElementById("date_of_birth");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


const button = document.getElementById('add_button')
  button.addEventListener('click', data)

function data () {
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log(data.results[0]);

    fullname.textContent = data.results[0].name.first + " " + data.results[0].name.last

    dob.textContent = data.results[0].dob.date
  })
}



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
