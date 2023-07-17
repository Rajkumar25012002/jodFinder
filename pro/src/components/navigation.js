import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/navigation.css";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
function NavBar() {
  const { searchJob, setSearchJob } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchJob(e.target.value);
  };
  return (
    <div>
      <nav className="navigation">
        <h4> Job Finder</h4>
        <div className="search">
          <input
            type="search"
            value={searchJob}
            onChange={handleChange}
            placeholder="Search here..."
          ></input>
          <FontAwesomeIcon
            id="searchIcon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </div>
        <div className="icon">
          <FontAwesomeIcon id="user" icon={faUser}></FontAwesomeIcon>
          <FontAwesomeIcon id="bell" icon={faBell}></FontAwesomeIcon>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
