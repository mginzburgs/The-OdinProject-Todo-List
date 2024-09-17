import "./styles/dropdown.css";

export const ToggleShow = (event, clickElementClass, showElementClass) => {
  const clickElementClass = document.querySelector(`${clickElementClass}`);
  const showElementClass = document.querySelector(`${showElementClass}`);

  clickElementClass.addEventListener(`${event}`, function () {
    showElementClass.classList.toggle("show");
  });
};
