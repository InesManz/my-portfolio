import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
  <div class="footer-left">
    <h2><a id="contactlink-footer" href="#">Contact</a></h2>
  </div>
  <div class="footer-socials">
    ${Button("fa-brands fa-x-twitter", "Twitter")}
    ${Button("fa-brands fa-github", "GitHub")}
    ${Button("fa-brands fa-linkedin", "LinkedIn")}
    ${Button("fa-brands fa-telegram", "Telegram")}
  </div>
`;
