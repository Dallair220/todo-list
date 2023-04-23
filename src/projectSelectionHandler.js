import projectSidebarLoader from './projectLoader';
import contentTaskLoader from './taskLoader';

function displayTasksOfSelectedProject(pElement, projectList) {
  pElement.addEventListener('click', (e) => {
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
