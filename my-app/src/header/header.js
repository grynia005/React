import rockKoza from "./imgHead/rock-koza.png";
import headfone from "./imgHead/headfone.png";
import starSky from "./imgHead/star-sky.png";
import "./header.css";

function Header() {
  return (
    <div className="head_wrapper">
      <LogoHeader />
      <TitleHeader/>
    </div>
  );
}
function LogoHeader() {
  return (
    <div className="logo">
      <a href="#">
        <img src={headfone} alt="LOGO" width="333" />
      </a>
    </div>
  );
}

function TitleHeader() {
  return (
    <div className="title_head">
      <h2>THE ROCK</h2>
    </div>
  );
}

export { Header };
