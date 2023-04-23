function addProjectToSidebar(project) {
  const ul = document.querySelector('.projects');
  const li = document.createElement('li');
  li.textContent = project.title;
  ul.appendChild(li);
}

// To show all projects in the sidebar
export default function projectSidebarLoader(projects) {
  projects.forEach((project) => {
    addProjectToSidebar(project);
  });
}
