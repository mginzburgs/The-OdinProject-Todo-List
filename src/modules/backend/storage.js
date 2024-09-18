import render from "../frontend/render";

const storage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const getAllData = () => {
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      allData[key] = JSON.parse(value);
    }
    // console.log(allData);
    return allData;
    // return window.localStorage[key] ? JSON.parse(window.localStorage[key]) : [];
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    window.location.reload();
  };

  const saveTaskToStorage = (taskObject) => {
    let tasks = localStorage.getItem("tasks") || {};
    if (typeof tasks === "string") {
      tasks = JSON.parse(tasks);
    }

    tasks[taskObject.getID()] = taskObject;
    setItem(taskObject.getID(), taskObject);
    window.location.reload();
  };

  const saveProjectToStorage = (projectObject) => {
    let projects = localStorage.getItem("projects") || {};
    if (typeof projects === "string") {
      projects = JSON.parse(projects);
    }

    projects[projectObject.getID()] = projectObject;
    setItem(projectObject.getID(), projectObject);
    window.location.reload();
  };

  return {
    setItem,
    getItem,
    removeItem,
    getAllData,
    saveTaskToStorage,
    saveProjectToStorage,
  };
};

export default storage;
