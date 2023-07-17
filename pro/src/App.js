import "./App.css";
import Jobs from "./components/filter";
import JobCard from "./components/jobCard";
import NavBar from "./components/navigation";
import { SearchContext } from "./context/SearchContext";
import { FilterContext } from "./context/FilterContext";
import { useEffect, useState } from "react";
import { Data } from "./data/jobData";
import { DateFilter } from "./calculations/calculateDate";
function App() {
  const [location, setLocation] = useState([]);
  const [company, setCompany] = useState([]);
  const [jobSource, setJobSource] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);
  const [skills, setSkills] = useState([]);
  const [datePosted, setDatePosted] = useState([]);
  const [searchJob, setSearchJob] = useState();
  const [filterd, setFilterd] = useState([]);
  const arr = [];
  const main = Data.jobs.items;
  const datas = Object.values(main);
  datas.forEach((value) => {
    arr.push(value._source);
  });
  useEffect(() => {
    let res = arr;
    if (searchJob) {
      res = res.filter((value) => value.job_role.includes(searchJob));
    }
    if (location.length > 0) {
      res = res.filter((value) => location.includes(value.location));
    }
    if (company.length > 0) {
      res = res.filter((value) => company.includes(value.company_name));
    }
    if (jobSource.length > 0) {
      res = res.filter((value) => jobSource.includes(value.source));
    }
    if (experience.length > 0) {
      res = res.filter((value) =>
        experience.includes(value.Transform_Experience_Bin)
      );
    }
    if (education.length > 0) {
      res = res.filter((value) => education.includes(value.education));
    }
    if (salaryRange.length > 0) {
      res = res.filter((value) =>
        salaryRange.includes(value.Transform_Salary_Bin)
      );
    }
    if (datePosted.length > 0) {
      res = res.filter((value) => {
        return datePosted.some((x) => {
          return DateFilter(value.date_string, x);
        });
      });
    }
    if (skills.length > 0) {
      res = res.filter((value1) => {
        return skills.some((value2) => {
          return value1.tech_skills.includes(value2);
        });
      });
    }

    setFilterd(res);
  }, [
    experience,
    salaryRange,
    searchJob,
    location,
    company,
    jobSource,
    education,
    datePosted,
    skills
  ]);
  let filtersNum = [
    company,
    skills,
    datePosted,
    experience,
    location,
    salaryRange,
    jobSource,
    education,
  ];
  let n = filtersNum.reduce((x, y) => {
    return y.length > 0 ? x + 1 : x;
  }, 0);
  console.log(filterd);
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchJob, setSearchJob }}>
        <NavBar></NavBar>
      </SearchContext.Provider>
      <div className="containers">
        <FilterContext.Provider
          value={{
            n,
            location,
            company,
            jobSource,
            education,
            experience,
            salaryRange,
            skills,
            datePosted,
            setCompany,
            setDatePosted,
            setEducation,
            setExperience,
            setJobSource,
            setLocation,
            setSalaryRange,
            setSkills,
          }}
        >
          <Jobs></Jobs>
        </FilterContext.Provider>
        <div className="resultCard">
          <div className="searchFilter">
            <div className="searchtext">
              <p className="search">Search Results </p>
              <p> {` > JOBS - ${filterd.length} results`}</p>
            </div>
            <div className="filter">
              <p>Sort By </p>

              <select name="sort" id="jobdata">
                <option value="latest">Latest</option>
                <option value="closing">Closing Date</option>
              </select>
            </div>
          </div>
          {filterd.length > 0 ? (
            <JobCard jobDetails={filterd} skills={skills}></JobCard>
          ) : searchJob || n > 0 ? (
            <div className="nojobs">No jobs found here</div>
          ) : (
            <JobCard jobDetails={arr}></JobCard>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
