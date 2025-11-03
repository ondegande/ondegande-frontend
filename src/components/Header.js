import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="logo" />
      </Link>

      <div className="header__right">
        <button className="header__right__tap">코스 짜보이소</button>
        <button className="header__right__tap">인자 머하노?</button>
        <button className="header__right__tap">이래 가보이소</button>
        <button className="header__right__tap">유튜바 코스</button>
      </div>
    </div>
  );
}
