function addTaskToContentArea(task) {
  const ul = document.querySelector('.tasks');
  const li = document.createElement('li');
  li.textContent = task.title;
  if (task.isPriority) li.classList.add('isPriority');
  if (task.isFinished) li.classList.add('isFinished');
  ul.appendChild(li);
}

export default function contentTaskLoader(project) {
  project.taskList.forEach((task) => {
    addTaskToContentArea(task);
  });
}
