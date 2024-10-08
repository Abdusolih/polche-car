let form = document.querySelector("form");
let modal = document.querySelector("#modal");
let closeModal = document.querySelector("#closeModal");

closeModal.addEventListener("click", () => {
   modal.classList.add("hidden")
})

let admin = {
   name: "1",
   surname: "2",
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log(form.children[0].children[0].value);
   let name = form.children[0].children[0].value;
   let surname = form.children[1].children[0].value;
   if (!name || !surname) {
      modal.classList.remove("hidden")
   } else if (name !== admin.name || surname !== admin.surname) {
    modal.classList.remove("hidden")
   } else {
    localStorage.setItem("admin", "true")
      window.location.replace("/index.html")
   }
})