let button = document.getElementById("mode");
let button2 = document.getElementById("mode2");

button.addEventListener("click", (Event) =>{
    
  console.log('xexe');

    const body = document.querySelector('body')
    console.log(body)
    body.classList.toggle("dark")
})

button2.addEventListener("click", (Event) =>{
    
  console.log('xexe');

    const body = document.querySelector('body')
    console.log(body)
    body.classList.toggle("dark")
})


 var loader = document.getElementById("preloader");
 let big_div = document.querySelector("#bigg");

 window.addEventListener("load", function(){
   setTimeout(() => {
        loader.style.display = "none"
        big_div.style.display = "block"
   }, 1000);
 } , )

let burger = document.querySelector('#burger')
let modal = document.querySelector('#modal')

burger.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})

let isAdmin = localStorage.getItem("admin")

if (!isAdmin) {
  window.location.replace("/login.html")
}