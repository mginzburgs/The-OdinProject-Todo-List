import storage from "./storage";

const sortData = () => {
  const storageService = storage();
  const allData = storageService.getAllData();
  const projects = {};

  for (const [key, value] of Object.entries(allData)) {
    if (key.includes("project-")) {
      const project = value;

      projects[key] = { ...value, tasks: [] };
    }
  }

  for (const [key, value] of Object.entries(allData)) {
    if (key.includes("task-")) {
      const task = value;
      const projectId = task.projectId;

      if (projects[projectId]) {
        projects[projectId].tasks.push(task);
      }
    }
  }
  return projects;
};

export default sortData;
