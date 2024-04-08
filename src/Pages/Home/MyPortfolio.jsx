import data from "../../data/index.json";

const MyPortfolio = () => {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <p className="sub-title">Recent Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">
            <a href="https://github.com/heehong01/" className="btn-github-a">
              Visit My GitHub
            </a>
          </button>
        </div>
      </div>
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img
                src={item.src}
                alt="Placeholder"
                className="portfolio-section-img-val"
              />
            </div>
            <div className="portfolio-section-card-content">
              <div>
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio-link">
                <a href={item.link}>View in Github</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
