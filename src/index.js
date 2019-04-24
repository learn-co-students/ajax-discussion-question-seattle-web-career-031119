const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let button = document.getElementById('get-user-button');
  button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(putName);
  })

  function putName(json){
    console.log(json);
    let result = json.results[0];
    fullname.textContent = `${result.name.first} ${result.name.last}`
  }
});
