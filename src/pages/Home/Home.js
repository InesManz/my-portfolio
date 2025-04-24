import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Ines Manzano</h1>
    <p>I'm a web development student, passionate about technology, and proof that it's never too late to start a new path.  
    At 43, I decided to make a career change and dive into the world of programming.  
    I enjoy building things for the web—whether it's websites, apps, or any idea that can come to life through code.  
   This portfolio is a reflection of my journey, my projects, and my dedication to continuous growth and learning.</p>
    <a href="inesmanz@gmail.com">Let´s talk →</a>
    </section>`;
};