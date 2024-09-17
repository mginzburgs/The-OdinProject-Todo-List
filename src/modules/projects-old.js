// import createToDo, { consoleLogPrintTask } from "./todo";

// const createProject = (projectName) => {
//   const id = Date.now();
//   const tasks = [];

//   return {
//     id,
//     projectName,
//     tasks,

//     getTasks() {
//       return this.tasks;
//     },

//     getId() {
//       return this.id;
//     },

//     addTask(task, deadline, priority) {
//       const ProjectTask = createToDo(task, deadline, priority);

//       return this.tasks.push(ProjectTask);
//     },

//     deleteTask(taskId) {
//       this.tasks.filter((e) => e.id == taskId);
//     },

//     consoleLogPrint() {
//       console.log("Project Name: " + this.projectName);
//       console.log("Project ID: " + this.id);
//       console.log("Task Count: " + this.tasks.length);
//       this.tasks.forEach((task) => consoleLogPrintTask(task));
//     },
//   };
// };

// export default createProject;
