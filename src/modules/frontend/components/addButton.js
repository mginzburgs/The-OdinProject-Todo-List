import addicon from "../../../assets/add-icon.svg";
import editIcon from "../../../assets/edit-icon.svg";
import trashIcon from "../../../assets/trash-icon.svg";
import { addProjectDialog, addTaskDialog } from "./dialog";

const createProjectAddButton = (event) => {
  const buttonContainer = document.querySelector(".header__add-project");
  const button = document.createElement("button");
  const img = document.createElement("img");

  button.classList.add("add-project__button");
  img.src = addicon;

  button.appendChild(img);
  buttonContainer.appendChild(button);

  button.onclick = (e) => {
    const modal = document.querySelector(".project-add-dialog");
    modal.classList.toggle("show");

    console.log("header add project button clicked");
  };
};

const createTaskAddButton = (projectId) => {
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");
  const img = document.createElement("img");

  buttonContainer.classList.add("task-list__add-task");
  buttonContainer.classList.add("add-task");

  button.classList.add("add-task__add-button");
  button.classList.add("add-button");
  img.src = addicon;

  button.appendChild(img);

  buttonContainer.appendChild(button);

  button.onclick = (e) => {
    const modal = document.querySelector(".task-add-dialog");
    modal.classList.toggle("show");
    modal.querySelector(".input__task-projectID").value = projectId;
    console.log("CLICKED add task button with projectID: ", projectId);

    // console.log("add task to project button clicked", e.target);
  };

  return buttonContainer;
};

const createEditTaskAddButton = (task) => {
  const buttonContainer = document.createElement("div");

  const imgEdit = document.createElement("img");
  const imgTrash = document.createElement("img");

  buttonContainer.classList.add("task-card__task-controls", "task-controls");

  imgEdit.classList.add("task-controls__icon", "edit-icon");
  imgTrash.classList.add("add-button", "trash-icon");
  imgEdit.src = editIcon;
  imgTrash.src = trashIcon;

  buttonContainer.appendChild(imgEdit);
  buttonContainer.appendChild(imgTrash);

  imgEdit.onclick = (e) => {
    const modal = document.querySelector(".task-edit-dialog");
    modal.classList.toggle("show");

    modal.querySelector(".input__task-taskID").value = task.id
      ? task.id
      : "specify id";
    modal.querySelector(".input__task-name").value = task.task
      ? task.task
      : "undefined task name";
    modal.querySelector(".input__dueDate").value = task.dueDate
      ? task.dueDate
      : "00-00-00";
    modal.querySelector(".input__task-projectID").value = task.projectId
      ? task.projectId
      : "Project ID undefined";
    modal.querySelector(".input__task-priority").value = task.priority
      ? task.priority
      : "Task priority undefined";

    console.log("CLICKED add task button with projectID: ", task.projectId);

    // console.log("add task to project button clicked", e.target);
  };

  imgTrash.onclick = (e) => {
    const modal = document.querySelector(".task-remove-dialog");
    modal.classList.toggle("show");

    modal.querySelector(".input__task-taskID").value = task.id
      ? task.id
      : "specify id";

    console.log("CLICKED add TRASH button with task Id: ", task.id);

    // console.log("add task to project button clicked", e.target);
  };

  return buttonContainer;
};

export { createProjectAddButton, createTaskAddButton, createEditTaskAddButton };
