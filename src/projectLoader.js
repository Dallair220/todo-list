function addProjectToSidebar(project) {
  const ul = document.querySelector('.projects');
  const li = document.createElement('li');
  li.textContent = project.title;
  ul.appendChild(li);
}

export default function projectSidebarLoader(projects) {
  projects.forEach((project) => {
    addProjectToSidebar(project);
  });
}
