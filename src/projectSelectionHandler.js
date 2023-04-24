import projectSidebarLoader from './projectLoader';
import contentTaskLoader from './taskLoader';
import { projectList } from './project';

let currentSelectedProject;

function makeSelectedProjectBold(project) {
  if (currentSelectedProject)
    currentSelectedProject.srcElement.classList.remove('projectIsSelected');

  project.srcElement.classList.add('projectIsSelected');
  currentSelectedProject = project;
}

function display(e) {
  makeSelectedProjectBold(e);

  // display the tasks of the selected project
  const selectedProject = projectList.array.find(
    (p) => p.title === e.srcElement.textContent
  );
  contentTaskLoader(selectedProject);
}

// after a project is selected in the UI, its tasklist should be displayed
function displayTasksOfSelectedProject(pElement) {
  pElement.addEventListener('click', display);
}

export default function projectSelectionHandler() {
  const listOfAllProjectUIElements = projectSidebarLoader(projectList.array);

  listOfAllProjectUIElements.forEach((pElement) => {
    displayTasksOfSelectedProject(pElement);
  });
}
