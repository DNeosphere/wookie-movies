import debounce from "lodash/debounce";

import "./Header.css";
import searchIcon from "./search-icon.png";
import { Link } from "react-router-dom";

type HeaderProps = {
  onInputChange: any;
};

export function Header({ onInputChange }: HeaderProps) {
  const onChangeHandler = debounce((event) => {
    onInputChange(event.target.value);
  }, 200);

  return (
    <div className="container header-container">
      <Link to="/">
        <h1 className="header__logo">Wookie Movies</h1>
      </Link>
      <div className="search-bar">
        <img src={searchIcon} alt="maginifying glass" className="search-logo" />
        <input type="text" onChange={onChangeHandler} />
      </div>
    </div>
  );
}
