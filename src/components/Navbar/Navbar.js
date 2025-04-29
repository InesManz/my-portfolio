import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<h1 id="home-link" class="brand-name">Ines Manzano</h1>

<ul>
    <li>
        <a id="about-link" href="#">About</a>

    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
    <li>
        <a id="contactlink" href="#">Contact</a>
    </li>
</ul>
</nav>
`;

