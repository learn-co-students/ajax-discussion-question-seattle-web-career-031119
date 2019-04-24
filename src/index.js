const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

const button = document.getElementById("button")
button.addEventListener('click', getInfo)

  function getInfo(){
          fetch('https://randomuser.me/api/')
            .then( res => res.json() )
            .then( data => {
              console.log(data.results[0])
            fullname.textContent = data.results[0].name.title + "." + " "+ data.results[0].name.first + " " + data.results[0].name.last })
  }

  fetchData()

});
