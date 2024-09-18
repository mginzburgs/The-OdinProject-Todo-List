import { intervalToDuration } from "date-fns";
import editicon from "../../../assets/edit-icon.svg";
import timeicon from "../../../assets/time-icon.svg";
import trashicon from "../../../assets/trash-icon.svg";
import { createTaskAddButton, createEditTaskAddButton } from "./addButton";

const createProjects = (projects) => {
  const data = projects;
  const projectContainer = document.querySelector(".main__projects-list");
  const render = () => {
    Object.entries(data).forEach(([key, value]) => {
      const projectList = document.createElement("li");
      projectList.classList.add("projects-list__project-card");
      projectList.classList.add("project-card");
      const cardList = document.createElement("ul");
      cardList.classList.add("project-card__task-list");
      cardList.classList.add("task-list");
      projectList.appendChild(cardList);
      projectContainer.append(projectList);

      projectList.appendChild(createTaskAddButton(key));

      const tasks = projects[key].tasks;

      if (tasks.length > 0) {
        Object.entries(tasks).forEach(([key, value]) => {
          renderTasks(tasks[key], cardList);
        });
      }
    });
  };

  const renderTasks = (task, projectList) => {
    let time = intervalToDuration({ end: task.dueDate, start: Date.now() });

    const projectTask = `
                            <li class="task-list__task-card task-card">
                                  <p class="task-card__priority">${
                                    task.priority
                                  }</p>
                                  <p class="task-card__task-name">${
                                    task.task
                                  }</p>
                                  <div class="task-card__time-left time-left">
                                      <img src=${timeicon} alt="time left">
                                      <p class="time-left__time">
                                      ${time.years ? `${time.years} Years` : ""}
                                        ${
                                          time.months
                                            ? `${time.months} Month`
                                            : ""
                                        }
                                        ${time.days ? `${time.days} Days` : ""}
                                        ${
                                          time.hours
                                            ? `${time.hours} Hours`
                                            : ""
                                        }
                                        ${
                                          time.minutes
                                            ? `${time.minutes} Min`
                                            : ""
                                        }
                          
                                   
                                      </p>
                                  </div>

                              </li>`;

    // projectList.appendChild(createEditTaskAddButton(task));
    let projectTaskElement = document.createElement("div");
    projectTaskElement.classList.add("huj");
    projectTaskElement.innerHTML = projectTask;
    projectTaskElement.appendChild(createEditTaskAddButton(task));
    projectList.appendChild(projectTaskElement);
    let test = document.querySelector(".task-card");
  };

  const init = () => {
    render();
  };

  return {
    init,
  };
};

export default createProjects;

{
  /* <ul class="main__projects-list">
                <li class="projects-list__project-card project-card">
                    <ul class="project-card__task-list task-list">
                        <li class="task-list__task-card task-card">
                            <p class="task-card__priority">H</p>
                            <p class="task-card__task-name">Design Header Element</p>
                            <div class="task-card__time-left time-left">
                                <img src="./assets/time-icon.svg" alt="time left">
                                <p class="time-left__time">24d 24h 15min</p>
                            </div>
                            <div class="task-card__task-controls task-controls">
                                <img src="./assets/edit-icon.svg" alt="edit" class="task-controls__icon">
                                <img src="./assets/trash-icon.svg" alt="trash" class="task-controls__icon">
                            </div>
                        </li>
                        <div class="task-list__add-task add-task">
                            <button class="add-task__add-button add-button">
                                <img src="./assets/add-icon.svg" alt="add-project">
                            </button>
                        </div>
                    </ul>
                </li>


            </ul> */
}
