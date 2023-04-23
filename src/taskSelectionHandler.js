// function deleteFunctionality(task, li, btn) {
//   btn.addEventListener('click', () => {
//     // btn.parentElement.remove();
//   });
// }

function expandTaskToSeeDescription(task, li) {
  const p = document.createElement('p');
  p.textContent = `Description: ${task.description}`;
  li.appendChild(p);
}

function addDeleteButton(li) {
  const btn = document.createElement('button');
  btn.textContent = 'Delete Task';
  li.appendChild(btn);
  // deleteFunctionality(task, li, btn);
}

export default function addTaskEventListener(task, li) {
  li.addEventListener('click', () => {
    expandTaskToSeeDescription(task, li);
    addDeleteButton(li);
  });
}
