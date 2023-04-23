function editTaskTitleAndDesign(task, li2) {
  const li = li2;
  if (task.isPriority) {
    li.classList.add('isPriority');
    li.textContent += '[ ❗ ] ';
  }
  if (task.isFinished) {
    li.classList.add('isFinished');
    console.log('finsiehd');
  }
  li.textContent += task.title;
}

function addTaskToContentArea(task) {
  const ul = document.querySelector('.tasks');
  const li = document.createElement('li');
  editTaskTitleAndDesign(task, li);
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
