// ==========================
// ELEMENTOS DO MODAL
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

  if (!modal) return;

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

  if (!modal) return;

  modal.style.display = "none";

}


// ==========================
// BOTÕES DE DETALHES
// ==========================

if (detailButtons.length > 0) {

  detailButtons.forEach(button => {

    button.addEventListener("click", () => {

      const car = button.dataset.car;

      const img = button.dataset.img;

      const desc = button.dataset.desc;

      const price = button.dataset.price;

      openModal(car, img, desc, price);

    });

  });

}


// ==========================
// FECHAR NO BOTÃO X
// ==========================

if (closeBtn) {

  closeBtn.addEventListener("click", closeModal);

}


// ==========================
// FECHAR CLICANDO FORA
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


// ==========================
// MENU HAMBÚRGUER
// ==========================

const menuToggle = document.getElementById("menuToggle");

const menu = document.getElementById("menu");

if (menuToggle && menu) {

  menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

  });

}

document.addEventListener("click", (event) => {

  const clicouNoMenu = menu.contains(event.target);

  const clicouNoBotao = menuToggle.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {

    menu.classList.remove("active");

  }

});
