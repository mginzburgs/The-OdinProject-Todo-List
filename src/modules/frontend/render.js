import sortData from "../backend/sortData";
import "../../styles/css-reset.css";
import "../../styles/styles.css";
import createDropDown from "./components/dropdown";
import createDialog from "./components/dialog";

const render = () => {
  const data = sortData();
  const dropDown = createDropDown(data);
  dropDown.init();

  const dialog = createDialog();
  dialog.render();
  dialog.handleSubmit();
};

export default render;
