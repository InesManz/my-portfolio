import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="about">
      <h1 class="gradient-title">About me</h1>
      <p>
        I'm Inés Manzano, a 43-year-old woman who has dedicated much of her professional life to interior design.
        For many years, I've worked helping shape spaces and transform ideas into visual and functional realities.
      </p>
      <p>
        As time went by, I felt the need to reinvent myself and seek new personal and professional challenges.
        That's why I decided to delve into the world of web development, a universe full of creative and technical possibilities.
        I'm currently enthusiastically training to turn this new passion into my second career.
      </p>
    </section>
  `;
};
