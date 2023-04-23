// Factory Function for new projects
export default function project(title) {
  let taskList = [];

  const addTask = (task) => {
    taskList.push(task);
  };

  const removeTask = (taskToRemove) => {
    taskList = taskList.forEach((task, index) => {
      if (task === taskToRemove) taskList.splice(index, 1);
    });
  };

  return { title, taskList, addTask, removeTask };
}
