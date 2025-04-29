import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";
import {Contact} from "./pages/Contact/Contact";
import {About} from "./pages/About/About";



const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#home-link", Home);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
linkPage("#contactlink-footer", Contact);
linkPage("#about-link", About);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());