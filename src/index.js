import createProject from "./modules/backend/project";
import storage from "./modules/backend/storage";
import createTask from "./modules/backend/task";
import sortData from "./modules/backend/sortData";
import render from "./modules/frontend/render";
import { createProjectAddButton } from "./modules/frontend/components/addButton";

const app = () => {
  const storageService = storage();
  render();
  createProjectAddButton();

  return {
    createProject,
    storageService,
    createTask,
    sortData,
    render,
  };
};

const TaskIt = app();
let data = TaskIt.storageService.getAllData();
