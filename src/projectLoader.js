function addProjectToSidebar(project) {
  const ul = document.querySelector('.projects');

  const li = document.createElement('li');
  li.textContent = project.title;
  ul.appendChild(li);

  return li;
}

// Show all projects in the sidebar
export default function projectSidebarLoader(projects) {
  const liList = [];

  projects.forEach((project) => {
    const li = addProjectToSidebar(project);
    liList.push(li);
  });

  return liList;
}
