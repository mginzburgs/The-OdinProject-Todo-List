import { v4 as uuidv4 } from "uuid";
import storage from "./storage";

const createProject = (projectName) => {
  const _id = `project-${uuidv4()}`;
  let storageService = storage();
  const tasks = [];
  const projectObject = {
    id: _id,
    projectName,
    tasks,

    getID() {
      return _id;
    },

    getProjectName() {
      return projectName;
    },
  };

  storageService.saveProjectToStorage(projectObject);
  return projectObject;
};

export default createProject;
