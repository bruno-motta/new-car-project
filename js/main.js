// ==========================
// ELEMENTOS
// ==========================

const modal = document.getElementById("modal");

const closeBtn = document.querySelector(".close");

const detailButtons = document.querySelectorAll(".detalhe");

const modalTitle = document.getElementById("modalTitle");

const modalDesc = document.getElementById("modalDesc");

const modalImg = document.getElementById("modalImg");

const modalPrice = document.getElementById("modalPrice");


// ==========================
// ABRIR MODAL
// ==========================

function openModal(car, img, desc, price) {

  modalTitle.textContent = car;

  modalDesc.textContent = desc;

  modalPrice.textContent = price;

  modalImg.src = img;

  modal.style.display = "flex";
}


// ==========================
// FECHAR MODAL
// ==========================

function closeModal() {

  modal.style.display = "none";

}


// ==========================
// EVENTOS DOS BOTÕES
// ==========================

detailButtons.forEach(button => {

  button.addEventListener("click", () => {

    const car = button.dataset.car;

    const img = button.dataset.img;

    const desc = button.dataset.desc;

    const price = button.dataset.price;

    openModal(car, img, desc, price);

  });

});


// ==========================
// FECHAR NO X
// ==========================

closeBtn.addEventListener("click", closeModal);


// ==========================
// FECHAR FORA DO MODAL
// ==========================

window.addEventListener("click", (event) => {

  if (event.target === modal) {

    closeModal();

  }

});


// ==========================
// FECHAR COM ESC
// ==========================

window.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeModal();

  }

});