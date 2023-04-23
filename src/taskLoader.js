function addTaskToContentArea(task) {
  const ul = document.querySelector('.tasks');

  const li = document.createElement('li');
  li.textContent = task.title;
  if (task.isPriority) li.classList.add('isPriority');
  if (task.isFinished) li.classList.add('isFinished');
  ul.appendChild(li);
}

function removeTasklistInDOM() {
  document.querySelector('.tasks').innerHTML = '';
}

// Show all tasks of a project in the content area
export default function contentTaskLoader(project) {
  removeTasklistInDOM();

  project.taskList.forEach((task) => {
    addTaskToContentArea(task);
  });
}
