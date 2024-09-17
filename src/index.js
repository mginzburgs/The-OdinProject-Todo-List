import printPage from "./modules/dom";
import createProject from "./modules/project";

const app = () => {
  const projects = [];

  return {
    getProjects() {
      return projects;
    },

    getProject(id) {
      let project = projects.find((e) => e.getId() == id);
      return project;
    },

    getProjectByName(projectName) {
      let project = projects.find(
        (e) => e.project.toLowerCase() == projectName.toLowerCase()
      );
      return project;
    },

    addProject(project) {
      projects.push(createProject(project));
    },
  };
};

const TaskIt = app();

TaskIt.addProject("Test");
TaskIt.addProject("Test2");
TaskIt.getProjectByName("test2").addTask("buy milk", "tomorrow", "high");
TaskIt.getProjectByName("test2").getTasks();

console.log(TaskIt.getProjects());
