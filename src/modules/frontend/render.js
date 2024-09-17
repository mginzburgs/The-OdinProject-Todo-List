import sortData from "../backend/sortData";
import "../../styles/css-reset.css";
import "../../styles/styles.css";
import createDropDown from "./components/dropdown";

const render = () => {
  const data = sortData();
  const dropDown = createDropDown(data);
  dropDown.init();
};

export default render;
