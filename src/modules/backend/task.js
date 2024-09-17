import { v4 as uuidv4 } from "uuid";
import storage from "./storage";

const createTask = (
  task = "Task name",
  dueDate = `${Date.now().getTime()}`,
  priority = `Normal`,
  projectId = "No project assigned"
) => {
  const _id = `task-${uuidv4()}`;
  let isCompleted = false;
  const storageService = storage();

  const taskObject = {
    id: _id,
    task,
    dueDate,
    priority,
    projectId,
    isCompleted,

    getID() {
      return _id;
    },

    getIsCompleted() {
      return isCompleted;
    },

    toggleIsCompleted() {
      isCompleted = !isCompleted;
      this.isCompleted = isCompleted;
      this.saveTaskToStorage();
    },
  };
  const saveToStorage = () => {
    storageService.setItem(taskObject.getID(), taskObject);
  };
  storageService.saveTaskToStorage(taskObject);
  return taskObject;
};

export default createTask;
