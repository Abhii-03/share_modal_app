let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

let openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};
  
// Modal close function
let  closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};