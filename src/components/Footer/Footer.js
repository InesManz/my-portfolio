import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
  <div class="footer-left">
    <h2><a id="contactlink-footer" href="#">Contact</a></h2>
  </div>
  <div class="footer-socials">
    ${Button("/icons/Twitter.png", "Twitter")}
    ${Button("/icons/GitHub.png", "GitHub")}
    ${Button("/icons/linkein.png", "LinkedIn")}
    ${Button("/icons/telegram.png", "Telegram")}
  </div>
`;
