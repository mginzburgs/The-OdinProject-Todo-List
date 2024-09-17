import "../styles/css-reset.css";
import "../styles/styles.css";

export default function printPage() {
  const dropDownHandler = () => {
    document.addEventListener("DOMContentLoaded", function () {
      const dropdownToggle = document.querySelector(".dropdown__toggle");
      const dropdownMenu = document.querySelector(".dropdown__menu");

      dropdownToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
      });

      // Close the dropdown when clicking outside
      document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target)) {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  };

  return { dropDownHandler };
}
