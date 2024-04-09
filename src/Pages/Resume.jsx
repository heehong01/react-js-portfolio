import data from "../data/resume.json";
import Skills from "./Skills";
const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container-box">
        <div className="resume-container">
          <p className="sub-title">Skills & Experiences</p>
          <h2 className="section-heading">Resume</h2>
        </div>
      </div>
      <div className="resume-container-information-box">
        <div className="resume-container-information-left">
          <div className="resume-education-information">
            {data?.educational?.map((item, index) => (
              <div key={index} className="resume-education-content">
                <div className="resume-education-content-info">
                  <h3>{item["university-name"]}</h3>
                  <h4>{item.degree}</h4>
                  <i>{item.major}</i>
                  <br />
                  <i>Minor: {item.minor}</i>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="resume-skills-programming-language">
            <h4>Programming Languages</h4>
            <div className="resume-skills-programming-level">
              {data?.["skills-programming-language"]?.map((item, index) => (
                <ul key={index} className="resume-skills-content">
                  <li className="resume-skills-content-programming-language">
                    {item.name}:{" "}
                    {Array.from({ length: item.level }, (reviews, index) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        key={index}
                      >
                        <path
                          d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                          fill="#006B6A"
                        />
                      </svg>
                    ))}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="resume-skills-software-concept">
            <h4>Software Concepts</h4>
            <div className="resume-skills-software-concepts">
              {data?.["skills-software-concepts"]?.map((item, index) => (
                <ul key={index} className="resume-skills-content">
                  <li>{item.name}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="resume-skills-software-skill" >
            <h4>Software Skills</h4>
            <div className="resume-skills-software-skills">
              {data?.["skills-software-skills"]?.map((item, index) => (
                <ul key={index} className="resume-skills-content">
                  <li>{item.name}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="resume-skills-language">
            <h4>Foreign Languages</h4>
            <div className="resume-skills-foreign-language">
              {data?.["skills-foreign-language"]?.map((item, index) => (
                <ul key={index} className="resume-skills-content">
                  <li>{item.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="resume-container-information-right">
          <div className="resume-experience-information">
            <div className="resume-experience-job">
              {data?.jobs?.map((item, index) => (
                <div key={index} className="resume-job-content">
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.company} | {item.location}
                    </p>
                    <p>
                      {item["date-start"]} - {item["date-end"]}
                    </p>
                    <ul>
                      {item.description.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
