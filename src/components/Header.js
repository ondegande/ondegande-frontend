import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header width-100 row j-space-between a-center bg-ffffffd6">
      <Link to="/">
        <img className="header__img cursor" src={logo} alt="logo" />
      </Link>

      <div className="row gap-40">
        <Link to="/makecourse" className="header__tap f-18 cursor">
          코스 짜보이소
        </Link>
        <Link to="donow" className="header__tap f-18 cursor">
          인자 머하노?
        </Link>
        <button className="header__tap f-18 cursor">이래 가보이소</button>
        <button className="header__tap f-18 cursor">유튜바 코스</button>
      </div>
    </div>
  );
}
