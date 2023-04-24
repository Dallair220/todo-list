import project from './project';
import { currentSelectedProject } from './projectSelectionHandler';
import task from './task';

// NOT FINISHED
function eventCallProject() {
  const projectName = prompt('Please enter the project name');
  const p = project(projectName);
  console.log(p);
}

// NOT FINISHED
function eventCallTask() {
  const taskName = prompt('Please enter the task name');
  const t = task(taskName);
  console.log(t, currentSelectedProject);
}

function projectButton() {
  document
    .querySelector('div.sidebar > button')
    .addEventListener('click', eventCallProject);
}

function taskButton() {
  document
    .querySelector('div.content > button')
    .addEventListener('click', eventCallTask);
}

export default function loadEventListeners() {
  projectButton();
  taskButton();
}
