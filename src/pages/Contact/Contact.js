import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="contact">
      <h1 class="gradient-title">Contact me</h1>
      <form class="contact-form">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `;
};
