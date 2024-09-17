const createDialog = () => {
  const render = () => {
    const page = document.querySelector(".page");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const projectNameInput = document.createElement("input");
    const submitButton = document.createElement("button");

    dialog.classList.add("project-add-dialog");
    form.classList.add("project-add-dialog__form");
    form.method = "dialog";
    projectNameInput.classList.add("project-add-dialog__input");
    submitButton.classList.add("project-add-dialog__button");
    submitButton.innerText = "ADD PROJECT";

    dialog.appendChild(form);
    form.appendChild(projectNameInput);
    form.appendChild(submitButton);

    dialog.open = true;

    page.appendChild(dialog);
  };
  const handleSubmit = () => {
    const dialog = document.querySelector(".project-add-dialog");
    const form = document.querySelector(".project-add-dialog__form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectName = form.querySelector(".project-add-dialog__input");
      console.log(projectName.value);
      dialog.close();
    });
  };
  //     <dialog open id="add-project-form"">
  //     <input class=" form-name" type="text"></input>
  // <button class="button" type="submit">Add project</button>
  // </dialog>
  return { render, handleSubmit };
};

export default createDialog;
