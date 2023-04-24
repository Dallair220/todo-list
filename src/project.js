export const projectList = (() => {
  const projectArrayList = [];

  const addNewProject = (newProject) => projectArrayList.push(newProject);

  const removeTask = (task) => {
    // projectArrayList.filter
    // console.log(projectArrayList);
    projectArrayList.forEach((prjct) => {
      if (prjct.isTaskAvailable(task)) prjct.removeTask(task);
    });
  };

  return { projectArrayList, addNewProject, removeTask };
})();

// Factory Function for new projects
export default function project(title) {
  const taskList = [];

  const addTask = (task) => {
    taskList.push(task);
  };

  function isTaskAvailable(taskToFind) {
    const availableTask = this.taskList.find((task) => task === taskToFind);
    return availableTask !== undefined;
  }

  function removeTask(taskToRemove) {
    taskList.forEach((task, index) => {
      if (task === taskToRemove) taskList.splice(index, 1);
    });
  }

  const newProject = { title, taskList, addTask, removeTask, isTaskAvailable };
  projectList.addNewProject(newProject);

  return newProject;
}
