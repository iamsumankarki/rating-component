const form = document.querySelector("form");
const initialLayout = document.querySelector(".get-rating");
const endLayout = document.querySelector(".rating-success");
const rating = document.querySelector(".rating");

const cardChange = () => {
  const checkedInput = form.querySelector("input[name='review-check']:checked");
  if (!checkedInput) return;

  initialLayout.classList.add("hidden");
  endLayout.classList.remove("hidden");
  rating.textContent = checkedInput.value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  cardChange();
})

cardChange();
