// import printPage from "./modules/dom";
// import createProject from "./modules/projects-old";
// import localStorageService from "./modules/localstorage";
// import createTask from "./modules/task";
// import storage from "./modules/storage";
// import createProjects from "./modules/project";

// const app = () => {
//   const storage = localStorageService();
//   const projects = [];
//   console.log(projects);
//   return {
//     getProjects() {
//       return projects;
//     },

//     getProject(id) {
//       let project = projects.find((e) => e.id == id);
//       return project;
//     },

//     getProjectByName(searchName) {
//       let project = projects.find(
//         (e) => e.projectName.toLowerCase() == searchName.toLowerCase()
//       );
//       return project;
//     },

//     addProject(project) {
//       if (!this.getProjectByName(project)) {
//         projects.push(createProject(project));
//         this.saveProjects();
//       }
//       console.log("Project name already exists");
//     },

//     saveProjects() {
//       storage.setItem("projects", projects);
//     },

//     updateProjects() {
//       projects = storage.getAllData("projects");
//     },

//     deleteProject(id) {
//       let searchProject = this.getProject(id);

//       let index = projects.indexOf(searchProject);

//       if (index !== -1) {
//         projects.splice(index, 1);
//         this.saveProjects();
//       }
//       console.log("No items found to delete");
//     },
//   };
// };

// const TaskIt = app();

// // console.log(window.localStorage);

// // TaskIt.addProject("test");
// // console.log(TaskIt.getProject("1726580085122"));
// // const task = createTask("Test task1", "24-1-09", "low");
// // const task1 = createTask("Test task2", "24-2-09", "medium");
// // const task2 = createTask("Test task3", "24-3-09", "high");
// // const task3 = createTask("Test task4", "24-4-09", "ultra");
// // const project1 = createProjects("project test1");
// // const project2 = createProjects("project test2");
// const storageTest = storage();
// const taskData = storageTest.getAllData();
// storageTest.removeItem("task-2afbe750-820c-46f1-a2a5-40ae5bde5174");
// console.log(taskData);

// // console.log(window.localStorage);
// // TaskIt.deleteProject("1726579934276");

// // TaskIt.addProject("Test");
// // TaskIt.addProject("Test2");
// // TaskIt.addProject("6dcd3ed5-1205-4df6-b7aa-fe814d391154");
// // console
// //   .log(TaskIt.getProjectByName("Test2"))
// //   .addTask("buy milk", "2025-02-08", "high");
// // TaskIt.getProjectByName("test").addTask("buy water", "2026-03-09", "low");
// // storage.setItem("projects", TaskIt.getProjects());

// // console.log(storage.getItem("projects)"));
// // console.log(JSON.parse(localStorage.getItem("projects")));

// // const tasks = TaskIt.getProjectByName("test2").getTasks();
// // console.log(tasks[0].getTimeLeft());
