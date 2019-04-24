const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const pic = document.getElementById("profile_picture");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let button = document.getElementById('button')
button.addEventListener('click', fetchData)

function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => {
            fullname.textContent = json.results[0].name.first + ' ' + json.results[0].name.last
            phone.textContent = json.results[0].phone
            email.textContent = json.results[0].email
            pic.src = json.results[0].picture.large
            street.textContent = json.results[0].location.street
            city.textContent = json.results[0].location.city
            state.textContent = json.results[0].location.state
          })
}

fetchData()
