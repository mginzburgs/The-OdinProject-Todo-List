const createDropDown = (projects) => {
  const data = projects;

  const dropDownClick = () => {
    document.addEventListener("DOMContentLoaded", function () {
      const dropdownToggle = document.querySelector(".dropdown__toggle");
      const dropdownMenu = document.querySelector(".dropdown__menu");

      dropdownToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
      });

      document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target)) {
          dropdownMenu.classList.remove("show");
        }
        return event.target.getAttribute("data-key");
      });
    });
  };

  const renderDropDown = () => {
    const temp = document.querySelector("#dropdown-item");
    const parent = document.querySelector(".dropdown__menu");
    const fragment = document.createDocumentFragment();

    Object.entries(data).forEach(([key, value]) => {
      const clone = temp.content.cloneNode(true);
      const dropdownItem = clone.querySelector(".dropdown__item");
      dropdownItem.textContent = value.projectName;
      dropdownItem.setAttribute("data-key", key);
      parent.appendChild(dropdownItem);
    });
  };

  const init = () => {
    renderDropDown();
    dropDownClick();
  };

  return { init };
};

export default createDropDown;
