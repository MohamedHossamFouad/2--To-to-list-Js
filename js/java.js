const addTask = document.getElementById("add");
const taskName = document.querySelector("input");
const form = document.querySelector("form");
const containerr = document.getElementById("containerr");
const task = document.querySelector(".task");

containerr.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.parentElement.parentElement.classList.add("finish");
      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.add("done");
      eo.target.classList.add("none");
      const heart = `<span class="icon-heart icon"></span>`;
      eo.target.parentElement.innerHTML += heart;

      break;

    case "icon-heart icon":
      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.remove("done");
      eo.target.classList.add("none");
      const addAngry = `<span class="icon-angry2 icon"> </span>`;
      eo.target.parentElement.parentElement.classList.remove("finish");
      eo.target.parentElement.innerHTML += addAngry;
      break;

    case "icon-star icon":
      eo.target.classList.add("active");
      containerr.prepend(eo.target.parentElement);
      break;

    case "icon-star icon active":
      eo.target.classList.remove("active");
      break;
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  containerr.innerHTML += `<div class="task">
  <span class="icon-star icon"> </span>
  <p class="text">${taskName.value}</p>
  <div class="">
      <span class="icon-trash icon"> </span>
      <span class="icon-angry2 icon"> </span>
      <!-- <i class="fa fa-heart"></i> -->
  </div>
</div>`;
  taskName.value = "";
});
