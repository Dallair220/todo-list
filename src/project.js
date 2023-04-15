export default function project() {
  let taskList = [];
  const addTask = (task) => {
    taskList.push(task);
  };
  const removeTask = (task) => {
    taskList = taskList.filter((t) => t !== task);
  };
  return { taskList, addTask, removeTask };
}
