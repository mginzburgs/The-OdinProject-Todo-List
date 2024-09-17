import createProject from "./modules/backend/project";
import storage from "./modules/backend/storage";
import createTask from "./modules/backend/task";
import sortData from "./modules/backend/sortData";
import render from "./modules/frontend/render";

const app = () => {
  return {
    createProject,
    storage,
    createTask,
    sortData,
    render,
  };
};

const TaskIt = app();

// TaskIt.createProject("Project name 1");
// TaskIt.createProject("Project name 2");
// TaskIt.createProject("Project name 3");
// TaskIt.createProject("Project name 4");
// TaskIt.createProject("Project name 5");
// TaskIt.createTask("Task 1", "24-07-2024", "high");
// TaskIt.createTask("Task 2", "24-07-2024", "high");
// TaskIt.createTask("Task 3", "24-07-2024", "high");
// TaskIt.createTask("Task 4", "24-07-2024", "high");
// TaskIt.storageService.setItem("task-b57b4c5c-189f-48c0-b18d-622546425c5d", {
//   id: "task-b57b4c5c-189f-48c0-b18d-622546425c5d",
//   task: "Task 2",
//   dueDate: "24-07-2024",
//   priority: "high",
//   projectId: "project-8a998a70-d3b7-41e6-9fe1-e1fac08a4240",
//   isCompleted: false,
// });
let data = TaskIt.render();

// console.log(data);
