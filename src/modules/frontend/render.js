import sortData from "../backend/sortData";
import "../../styles/css-reset.css";
import "../../styles/styles.css";
import createDropDown from "./components/dropdown";
import {
  addProjectDialog,
  addTaskDialog,
  editTaskDialog,
  removeTaskDialog,
} from "./components/dialog";
import createProjects from "./components/projects";

const render = () => {
  // dropdown render
  const data = sortData();
  console.log(data);
  const dropDown = createDropDown(data);
  dropDown.init();

  //Project dialog render
  const dialog = addProjectDialog();
  dialog.init();

  //Task dialog render
  const taskDialog = addTaskDialog();
  taskDialog.init();

  const editDialog = editTaskDialog();
  editDialog.init();

  const removeDialog = removeTaskDialog();
  removeDialog.init();

  // projects render
  const projects = createProjects(data);
  projects.init();
};

export default render;
