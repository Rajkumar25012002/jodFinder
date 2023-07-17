import { useContext } from "react";
import "../styles/filter.css";
import CheckBox from "./checkBox";
import { FilterContext } from "../context/FilterContext";
const Jobs = () => {
  const {
    location,
    setLocation,
    company,
    setCompany,
    jobSource,
    setJobSource,
    experience,
    setExperience,
    education,
    setEducation,
    salaryRange,
    setSalaryRange,
    skills,
    setSkills,
    datePosted,
    setDatePosted,
    n,
  } = useContext(FilterContext);
  const clearFilter = () => {
    setCompany([]);
    setLocation([]);
    setEducation([]);
    setExperience([]);
    setJobSource([]);
    setSalaryRange([]);
    setDatePosted([]);
    setSkills([]);
  };
  return (
    <div className="checkBox">
      <span>
        <p>Filter by </p>
        <p>{` ${n} filters applied. `}</p>
        <p className="clear" onClick={clearFilter}>
          Clear all
        </p>
      </span>
      <div className="line"></div>
      <CheckBox
        select={location}
        setSelect={setLocation}
        value={"Location"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={jobSource}
        setSelect={setJobSource}
        value={"Job Source"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={experience}
        setSelect={setExperience}
        value={"Experience"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={education}
        setSelect={setEducation}
        value={"Education"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={salaryRange}
        setSelect={setSalaryRange}
        value={"Salary Range"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={skills}
        setSelect={setSkills}
        value={"Skills"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={company}
        setSelect={setCompany}
        value={"Company"}
      ></CheckBox>
      <div className="line"></div>
      <CheckBox
        select={datePosted}
        setSelect={setDatePosted}
        value={"Date Posted"}
      ></CheckBox>
    </div>
  );
};
export default Jobs;
