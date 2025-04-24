import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/public/icons/Twitter.png", "Twitter")}
${Button("/public/icons/GitHub.png", "GitHub")}
${Button("/public/icons/linkein.png", "LinkedIn")}
${Button("/public/icons/telegram.png", "Telegram")}
</div>
`;