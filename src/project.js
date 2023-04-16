export default function project(title) {
  let taskList = [];
  const addTask = (task) => {
    taskList.push(task);
  };
  const removeTask = (task) => {
    taskList = taskList.filter((t) => t !== task);
  };
  return { title, taskList, addTask, removeTask };
}
