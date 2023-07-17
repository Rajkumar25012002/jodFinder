import "../styles/jobCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { calculateYearsMonthsDays } from "../calculations/calculateDate";
import "../styles/percentage.css";
function Card({ data, skills }) {
  return (
    <div className="main">
      <div className="separation">
        <div className="imagewithdetail">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/221/775/original/apple-logo-free-png.png"
            alt="logo"
          ></img>
          <span>
            <p>{data.job_role}</p>
            <p>{data.company_name}</p>
            <p>{data.location}</p>
          </span>
        </div>
        <div className="matchside">
          <div>Skill match</div>
          <div className="circlesize">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill"></div>
                </div>

                <div className="mask half">
                  <div className="fill"></div>
                </div>

                <div className="inside-circle">{`65 %`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="applysection">
        <div>{`Posted ${calculateYearsMonthsDays(
          new Date(data.date_string + " ")
        )} . ${data.count_applied} applicants`}</div>
        <button>Apply</button>
        <FontAwesomeIcon
          size="lg"
          className="saveicon"
          icon={faBookmark}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
const JobCard = ({ jobDetails, skills }) => {
  return (
    <div className="parentshow">
      <div className="jobtitle"></div>
      <div className="jobs">JOBS</div>
      {jobDetails.map((data, index) => {
        return (
          <div key={index}>
            <Card data={data} skills={skills}></Card>
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
