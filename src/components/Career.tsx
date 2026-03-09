import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fronted Developer</h4>
                <h5>Ikshan</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             Built 6+ responsive web applications using React.js. Developed modern UI with HTML, CSS, and Tailwind CSS. Integrated REST APIs and managed state using Redux. Designed user-friendly interfaces and wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fronted Developer</h4>
                <h5>Mak btye</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Frontend Developer with 1+ year of experience developing responsive and scalable web applications using React.js. Skilled in modern JavaScript, API integration, and UI development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fronted Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Worked as a Frontend Developer building responsive web applications using React.js, Redux, and Next.js. Developed reusable components and integrated APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
