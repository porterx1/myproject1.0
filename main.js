// валидация форм
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("person_name");
  const email = document.getElementById("person_email");
  const number = document.getElementById("person_number");

  document.querySelectorAll(".error-text").forEach((el) => el.remove());

  const showError = (input, message) => {
    const error = document.createElement("div");
    error.className = "error-text";
    error.textContent = message;
    error.style.color = "red";
    error.style.fontSize = "14px";
    input.parentElement.appendChild(error);
    isValid = false;
  };

  if (name.value.trim() === "") {
    showError(name, "Введите имя");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Введите корректный email");
  }

  if (number.value.trim() === "") {
    showError(number, "Введите номер");
  }

  if (isValid) {
    alert("Форма успешно отправлена");
    this.reset();
  }
});

// бургер меню
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
  });
});

const toTop = document.getElementById("toTop");

// скролл вверх
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
