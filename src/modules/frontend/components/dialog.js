import createProject from "../../backend/project";
import createTask from "../../backend/task";
import storage from "../../backend/storage";

const addProjectDialog = () => {
  const render = () => {
    const page = document.querySelector(".page");
    const dialog = document.createElement("div");
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

    page.appendChild(dialog);
  };
  const handleSubmit = () => {
    const dialog = document.querySelector(".project-add-dialog");
    const form = document.querySelector(".project-add-dialog__form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectName = form.querySelector(".project-add-dialog__input");
      createProject(projectName.value);
    });
  };

  const init = () => {
    render();
    handleSubmit();
  };
  //     <dialog open id="add-project-form"">
  //     <input class=" form-name" type="text"></input>
  // <button class="button" type="submit">Add project</button>
  // </dialog>
  return { init };
};

const addTaskDialog = (projectId) => {
  const render = () => {
    const page = document.querySelector(".page");
    const dialog = document.createElement("div");
    const form = document.createElement("form");
    const taskNameInput = document.createElement("input");
    const dueDateInput = document.createElement("input");
    const priorityInput = document.createElement("input");
    const projectIdInput = document.createElement("input");
    const taskId = document.createElement("input");
    const submitButton = document.createElement("button");

    dialog.classList.add("task-add-dialog");
    form.classList.add("task-add-dialog__form");
    form.method = "dialog";
    taskNameInput.classList.add("task-add-dialog__input", "input__task-name");
    dueDateInput.classList.add("task-add-dialog__input", "input__dueDate");
    priorityInput.classList.add(
      "task-add-dialog__input",
      "input__task-priority"
    );
    projectIdInput.classList.add(
      "task-add-dialog__input",
      "input__task-projectID"
    );
    taskId.classList.add("task-add-dialog__input", "input__task-taskID");
    taskId.setAttribute("placeholder", "TASK ID");

    projectId
      ? (projectIdInput.value = projectId)
      : (projectIdInput.value = "input ID");

    submitButton.classList.add("task-add-dialog__button");
    submitButton.innerText = "ADD TASK";

    dialog.appendChild(form);
    form.appendChild(taskId);
    form.appendChild(taskNameInput);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInput);
    form.appendChild(projectIdInput);
    form.appendChild(submitButton);

    page.appendChild(dialog);
  };
  const handleSubmit = () => {
    const dialog = document.querySelector(".task-add-dialog");
    const form = document.querySelector(".task-add-dialog__form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskName = form.querySelector(".input__task-name");
      const dueDateInput = form.querySelector(".input__dueDate");
      const priorityInput = form.querySelector(".input__task-priority");
      const projectIdInput = form.querySelector(".input__task-projectID");
      console.log(taskName.value, dueDateInput.value, priorityInput.value);
      createTask(
        taskName.value,
        dueDateInput.value,
        priorityInput.value,
        projectIdInput.value
      );
    });
  };

  const init = () => {
    render();
    handleSubmit();
  };
  //     <dialog open id="add-project-form"">
  //     <input class=" form-name" type="text"></input>
  // <button class="button" type="submit">Add project</button>
  // </dialog>
  return { init };
};

const editTaskDialog = (projectId) => {
  const render = () => {
    const page = document.querySelector(".page");
    const dialog = document.createElement("div");
    const form = document.createElement("form");
    const taskNameInput = document.createElement("input");
    const dueDateInput = document.createElement("input");
    const priorityInput = document.createElement("input");
    const projectIdInput = document.createElement("input");
    const taskId = document.createElement("input");
    const submitButton = document.createElement("button");

    dialog.classList.add("task-edit-dialog");
    form.classList.add("task-edit-dialog__form");
    form.method = "dialog";
    taskNameInput.classList.add("task-add-dialog__input", "input__task-name");
    dueDateInput.classList.add("task-add-dialog__input", "input__dueDate");
    priorityInput.classList.add(
      "task-add-dialog__input",
      "input__task-priority"
    );
    projectIdInput.classList.add(
      "task-add-dialog__input",
      "input__task-projectID"
    );
    taskId.classList.add("task-add-dialog__input", "input__task-taskID");
    taskId.setAttribute("placeholder", "TASK ID");

    projectId
      ? (projectIdInput.value = projectId)
      : (projectIdInput.value = "input ID");

    submitButton.classList.add("task-add-dialog__button");
    submitButton.innerText = "EDIT TASK";

    dialog.appendChild(form);
    form.appendChild(taskId);
    form.appendChild(taskNameInput);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInput);
    form.appendChild(projectIdInput);
    form.appendChild(submitButton);

    page.appendChild(dialog);
  };
  const handleSubmit = () => {
    const dialog = document.querySelector(".task-edit-dialog");
    const form = document.querySelector(".task-edit-dialog__form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskName = form.querySelector(".input__task-name");
      const dueDateInput = form.querySelector(".input__dueDate");
      const priorityInput = form.querySelector(".input__task-priority");
      const projectIdInput = form.querySelector(".input__task-projectID");
      console.log(taskName.value, dueDateInput.value, priorityInput.value);
      const storageService = storage();
      console.log(storageService);

      storageService.setItem(projectIdInput.value, {
        id: projectIdInput.value,
        task: taskName.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        projectId: projectIdInput.value,
      });
      createTask(
        taskName.value,
        dueDateInput.value,
        priorityInput.value,
        projectIdInput.value
      );
    });
  };

  const init = () => {
    render();
    handleSubmit();
  };
  //     <dialog open id="add-project-form"">
  //     <input class=" form-name" type="text"></input>
  // <button class="button" type="submit">Add project</button>
  // </dialog>
  return { init };
};

const removeTaskDialog = (id) => {
  const render = () => {
    const page = document.querySelector(".page");
    const dialog = document.createElement("div");
    const form = document.createElement("form");

    const taskId = document.createElement("input");
    const submitButton = document.createElement("button");

    dialog.classList.add("task-remove-dialog");
    form.classList.add("task-remove-dialog__form");
    form.method = "dialog";

    taskId.classList.add("task-remove-dialog__input", "input__task-taskID");
    taskId.setAttribute("placeholder", "TASK ID");

    submitButton.classList.add("task-remove-dialog__button");
    submitButton.innerText = "REMOVE TASK";

    dialog.appendChild(form);
    form.appendChild(taskId);

    form.appendChild(submitButton);

    page.appendChild(dialog);
  };
  const handleSubmit = () => {
    const dialog = document.querySelector(".task-remove-dialog");
    const form = document.querySelector(".task-remove-dialog__form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskIdInput = form.querySelector(".input__task-taskID");
      console.log(taskIdInput.value);
      const storageService = storage();

      storageService.removeItem(taskIdInput.value);
    });
  };

  const init = () => {
    render();
    handleSubmit();
  };
  //     <dialog open id="add-project-form"">
  //     <input class=" form-name" type="text"></input>
  // <button class="button" type="submit">Add project</button>
  // </dialog>
  return { init };
};

export { addProjectDialog, addTaskDialog, editTaskDialog, removeTaskDialog };
