import reactImg from "../assets/react-core-concepts.png";
import { reactDescrioptions, getRandDescription } from "../App";
import "./Header.css";

export function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescrioptions[getRandDescription(3)]} Fundamental React concepts
        you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
