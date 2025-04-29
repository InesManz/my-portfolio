import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
  <div class="footer-left">
    <h2><a id="contactlink-footer" href="#">Contact</a></h2>
  </div>
  <div class="footer-socials">
    ${Button("/public/icons/Twitter.png", "Twitter")}
    ${Button("/public/icons/GitHub.png", "GitHub")}
    ${Button("/public/icons/linkein.png", "LinkedIn")}
    ${Button("/public/icons/telegram.png", "Telegram")}
  </div>
`;
