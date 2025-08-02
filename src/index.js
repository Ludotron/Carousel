import "./styles.css";
import { createCarousel } from "./carousel.js";
import imageCity from "./images/city.jpg";
import imageMountain from "./images/mountain.jpg";
import imageSand from "./images/sand.jpg";
import imageWoman from "./images/woman.jpg";

const images = [imageCity, imageMountain, imageSand, imageWoman];
const c = createCarousel(images, { width: 500, height: 400 });
const main = document.querySelector("#main");
main.appendChild(c);
