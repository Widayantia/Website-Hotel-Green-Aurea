// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//  ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#Search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#Search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const itemDetailModal = document.querySelector(".item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");
  const closeIcon = document.querySelector(".close-icon");

  // Tombol untuk membuka modal
  itemDetailButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // cegah reload halaman
      itemDetailModal.style.display = "flex";
    });
  });

  // Tombol untuk menutup modal
  closeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    itemDetailModal.style.display = "none";
  });

  // Klik di luar modal untuk menutup
  window.addEventListener("click", (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const itemDetailMo = document.querySelector(".item-detail-mo");
  const itemDetailBu = document.querySelectorAll(".item-detail-bu");
  const closeIcon = document.querySelector(".close-icon");

  // Tombol untuk membuka modal
  itemDetailBu.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // cegah reload halaman
      itemDetailMo.style.display = "flex";
    });
  });

  // Tombol untuk menutup modal
  closeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    itemDetailMo.style.display = "none";
  });

  // Klik di luar modal untuk menutup
  window.addEventListener("click", (e) => {
    if (e.target === itemDetailMo) {
      itemDetailMo.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("✅ Pesan berhasil terkirim!");
    form.reset();
  });
});
