import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);


  main.innerHTML = `
    <div class="page">

      <!-- HERO -->
      <section class="hero" id="home">
        <div class="hero__content">
          <span class="pill">FULL-FEATURED WEB PROJECTS</span>

          <p class="hero__text">
            Web development student focused on building modern interfaces and real projects.
            I love turning ideas into clean, usable web experiences.
          </p>

          <div class="hero__actions">
            <a class="btn primary" href="mailto:inesmanz@gmail.com">Contact</a>
            <a class="btn js-go-projects" href="#projects">Projects</a>
          </div>
        </div>

        <div class="hero__art" aria-hidden="true">
          <div class="orb orb--violet"></div>
          <div class="orb orb--cyan"></div>
          <div class="ring"></div>
          <div class="curve"></div>
        </div>
      </section>

      <!-- PROJECTS -->
      <section class="projects" id="projects">
        <header class="sectionHead">
          <h2 class="sectionTitle">Projects</h2>
          <p class="sectionSub">
            Hover/active en cards y botones, focus-visible en links, nth-child en el grid,
            y mix-blend-mode en miniaturas.
          </p>
        </header>

        <div class="projects__grid">
          ${projects
      .map(
        (p) => `
                <article class="projectCard" tabindex="0">
                  <div class="thumb"
                    style="background-image:url('${p.image}');
                           background-size:cover;
                           background-position:center;">
                    <div class="thumb__overlay" aria-hidden="true"></div>
                  </div>

                  <div class="projectCard__body">
                    <h3>${p.title}</h3>
                    <p class="muted">${p.description}</p>

                    <ul class="tags">
                      ${p.tech.map((t) => `<li>${t}</li>`).join("")}
                    </ul>

                    <div class="projectCard__actions">
                      <a class="btn" href="${p.github}" target="_blank" rel="noreferrer">GitHub</a>
                      <a class="btn primary" href="${p.link}" target="_blank" rel="noreferrer">Live</a>
                    </div>
                  </div>
                </article>
              `
      )
      .join("")}
        </div>
      </section>

      <!-- MINI EXPLICACIÓN (para el profe) -->
      <section class="cssNotes" id="css-notes">
        <header class="sectionHead">
          <h2 class="sectionTitle">CSS techniques used (required)</h2>
          <p class="sectionSub">
            Para cumplir el enunciado, estas técnicas se aplican dentro de la sección Projects.
          </p>
        </header>

        <div class="cssNotes__box">
          <ul class="cssNotes__list">
            <li><strong>:hover</strong> — feedback visual al pasar el ratón sobre cards/botones.</li>
            <li><strong>:active</strong> — estado al hacer click (botón “se hunde”).</li>
            <li><strong>:focus-visible</strong> — accesibilidad: foco visible al navegar con teclado.</li>
            <li><strong>:nth-child</strong> — estilos alternos en el grid sin añadir clases extra.</li>
            <li><strong>mix-blend-mode</strong> — overlay que se mezcla con miniaturas (thumb).</li>
            <li><strong>Responsive</strong> — el grid cambia de columnas según pantalla.</li>
          </ul>

          <p class="muted cssNotes__hint">
            Tip: usa TAB para comprobar <code>focus-visible</code> en los links de cada proyecto.
          </p>
        </div>
      </section>

    </div>
  `;


  const goProjects = document.querySelector(".js-go-projects");
  if (goProjects) {
    goProjects.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    });
  }


  const btn = document.querySelector(".themeToggle");
  const savedTheme = localStorage.getItem("theme") || "dark";

  document.body.classList.remove("light", "dark");
  document.body.classList.add(savedTheme);

  if (btn) {
    btn.textContent = savedTheme === "dark" ? "🌙" : "☀️";


    btn.onclick = () => {
      const current = document.body.classList.contains("light") ? "light" : "dark";
      const next = current === "dark" ? "light" : "dark";

      document.body.classList.remove(current);
      document.body.classList.add(next);

      localStorage.setItem("theme", next);
      btn.textContent = next === "dark" ? "🌙" : "☀️";
    };
  }
};
