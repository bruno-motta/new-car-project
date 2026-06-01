// ==========================
// ELEMENTOS DO MODAL
// ==========================

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");
const modalPrice = document.getElementById("modalPrice");

// ==========================
// CAMINHO BASE DAS IMAGENS
// Corrige o caminho dependendo se está em /pages/ ou na raiz
// ==========================

const inPages = window.location.pathname.includes("/pages/");
const imgBase = inPages ? "../assets/images/cars/" : "assets/images/cars/";

// ==========================
// DADOS DOS CARROS
// ==========================

const cars = [
  { name: "BMW X1",             price: "R$ 250/dia", img: "BMW_X1.webp",                desc: "SUV premium com tecnologia de ponta, automático e confortável. Ideal para viagens longas com estilo.",          category: "SUV"       },
  { name: "Fiat Pulse",         price: "R$ 200/dia", img: "FIAT_PULSE.webp",             desc: "SUV compacto moderno, econômico e espaçoso. Perfeito para o dia a dia urbano e estradas.",                       category: "SUV"       },
  { name: "Mercedes-Benz GLA",  price: "R$ 280/dia", img: "MERCEDESBENZ_GLA_250.webp",   desc: "SUV de luxo com acabamento premium, desempenho refinado e máximo conforto em cada detalhe.",                    category: "SUV"       },
  { name: "Volkswagen Golf",    price: "R$ 180/dia", img: "VOLKSWAGEN_GOLF.webp",         desc: "Hatchback esportivo com design europeu, dirigibilidade precisa e interior bem equipado.",                        category: "Hatchback" },
  { name: "Audi A3",            price: "R$ 220/dia", img: "AUDI_A3.webp",                desc: "Sedan compacto premium com tecnologia avançada, conforto superior e design sofisticado.",                        category: "Sedan"     },
  { name: "Chevrolet Onix",     price: "R$ 130/dia", img: "CHEVROLET_ONIX.webp",          desc: "Compacto econômico, líder de vendas no Brasil. Ótimo custo-benefício para uso urbano.",                         category: "Hatchback" },
  { name: "Toyota Corolla",     price: "R$ 200/dia", img: "TOYOTA_COROLLA.webp",          desc: "Sedan confiável e refinado, reconhecido mundialmente pela durabilidade e conforto.",                             category: "Sedan"     },
  { name: "Ford Mustang",       price: "R$ 350/dia", img: "FORD_MUSTANG.webp",            desc: "Esportivo icônico americano com motor potente, design agressivo e som inconfundível.",                           category: "Esportivo" },
  { name: "Honda Civic Type R", price: "R$ 190/dia", img: "HONDA_CIVIC.webp",             desc: "Sedan esportivo de alto desempenho, com suspensão esportiva e acabamento premium.",                             category: "Sedan"     },
  { name: "Renault Duster",     price: "R$ 150/dia", img: "RENAULT_DUSTER.webp",          desc: "SUV compacto com boa altura em relação ao solo, ideal para estradas variadas e aventuras.",                     category: "SUV"       },
  { name: "Nissan Kicks",       price: "R$ 160/dia", img: "NISSAN_KICKS.webp",            desc: "SUV moderno com design arrojado, espaço interno generoso e tecnologia embarcada.",                              category: "SUV"       },
  { name: "Hyundai Creta",      price: "R$ 170/dia", img: "HYUNDAI_CRETA.webp",           desc: "SUV versátil com excelente relação custo-benefício, conforto e equipamentos completos.",                        category: "SUV"       },
  { name: "Volkswagen Polo",    price: "R$ 140/dia", img: "VOLKSWAGEN_POLO.webp",         desc: "Hatchback compacto com qualidade europeia, econômico e fácil de estacionar na cidade.",                         category: "Hatchback" },
  { name: "Jeep Compass",       price: "R$ 260/dia", img: "JEEP_COMPASS.webp",            desc: "SUV robusto com visual imponente, tração 4x4 e excelente desempenho em qualquer terreno.",                      category: "SUV"       },
  { name: "Fiat Argo",          price: "R$ 130/dia", img: "FIAT_ARGO_1.3.webp",           desc: "Hatchback estiloso, ágil e econômico. Ótima opção para quem busca praticidade no dia a dia.",                   category: "Hatchback" },
];

// ==========================
// RENDERIZAR CARDS
// ==========================

function renderCars(list) {
  const grid = document.querySelector(".cards-grid");
  if (!grid) return; // página sem grid (favoritos, reservas, login)
  grid.innerHTML = list.map(car => `
    <article class="card">
      <img src="${imgBase}${car.img}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.price}</p>
      <button class="detalhe"
        data-car="${car.name}"
        data-img="${imgBase}${car.img}"
        data-desc="${car.desc}"
        data-price="${car.price}">
        Detalhes
      </button>
    </article>
  `).join("");
}

const isHomePage = window.location.pathname === "/" ||
                   window.location.pathname.endsWith("index.html");

renderCars(isHomePage ? cars.slice(0, 9) : cars);

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
// EVENT DELEGATION — BOTÕES DE DETALHES
// ==========================

document.querySelector(".cards-grid")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".detalhe");
  if (!btn) return;
  openModal(btn.dataset.car, btn.dataset.img, btn.dataset.desc, btn.dataset.price);
});

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
  if (event.target === modal) closeModal();
});

// ==========================
// FECHAR COM ESC
// ==========================

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
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