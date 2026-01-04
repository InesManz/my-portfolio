import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div class="project-links">
  <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código en GitHub">
    <i class="fa-brands fa-github" aria-hidden="true"></i>
  </a>
  <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Ver demo / enlace del proyecto">
    <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
  </a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;