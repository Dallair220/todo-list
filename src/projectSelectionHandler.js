import projectSidebarLoader from './projectLoader';
import contentTaskLoader from './taskLoader';

let currentSelectedProject;

function makeSelectedProjectBold(project) {
  if (currentSelectedProject)
    currentSelectedProject.srcElement.classList.remove('projectIsSelected');

  project.srcElement.classList.add('projectIsSelected');
  currentSelectedProject = project;
}

// after a project is selected in the UI, its tasklist should be displayed
function displayTasksOfSelectedProject(pElement, projectList) {
  pElement.addEventListener('click', (e) => {
    makeSelectedProjectBold(e);

    // display the tasks of the selected project
    const selectedProject = projectList.find(
      (p) => p.title === e.srcElement.textContent
    );
    contentTaskLoader(selectedProject);
  });
}

export default function projectSelectionHandler(projectList) {
  const listOfAllProjectUIElements = projectSidebarLoader(projectList);

  listOfAllProjectUIElements.forEach((pElement) => {
    displayTasksOfSelectedProject(pElement, projectList);
  });
}
