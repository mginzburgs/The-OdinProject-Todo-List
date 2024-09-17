import createToDo, { consoleLogPrintTask } from "./todo";

const createProject = (project) => {
  const id = crypto.randomUUID();
  const tasks = [];

  return {
    id,
    project,
    tasks,

    getTasks() {
      return this.tasks;
    },

    getId() {
      return this.id;
    },

    addTask(task, deadline, priority) {
      const ProjectTask = createToDo(task, deadline, priority);
      return this.tasks.push(ProjectTask);
    },

    deleteTask(taskId) {
      this.tasks.filter((e) => e.id == taskId);
    },

    consoleLogPrint() {
      console.log("Project Name: " + this.name);
      console.log("Project ID: " + this.id);
      console.log("Task Count: " + this.tasks.length);
      this.tasks.forEach((task) => consoleLogPrintTask(task));
    },
  };
};

export default createProject;
