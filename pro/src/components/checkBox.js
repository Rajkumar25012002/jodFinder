import { useState } from "react";
import { Data } from "../data/jobData";
import "../styles/checkbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function CheckBox({ select, setSelect, value }) {
  const [show, setShow] = useState(true);
  const data = Object.values(Data.jobs.filters[value]);
  const res = data.map((value) => {
    return value.key;
  });
  const handleCheck = (e) => {
    let exist = select.find((filter) => filter === e.target.value);

    if (exist) {
      const update = select.filter((filter) => filter !== e.target.value);
      setSelect(update);
    } else {
      setSelect([...select, e.target.value]);
    }
  };
  const showOptions = () => {
    setShow(!show);
  };
  return (
    <div className="main">
      <div className="parent">
        <span>
          <p>{value}</p>
          <FontAwesomeIcon
            onClick={showOptions}
            className="icon"
            icon={show ? faAngleDown : faAngleRight}
          ></FontAwesomeIcon>
        </span>
        {show &&
          res.map((value, index) => {
            return (
              <div className="checkvalue" key={index}>
                <input
                  id="focus "
                  type="checkbox"
                  checked={select.find((item) => item === value)}
                  value={value}
                  onChange={handleCheck}
                ></input>
                <label>{value}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
}
