import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      {/* About Me Section */}
      <div className="about-me">
        <h1 className="headings" align="left">About Me</h1>
        <p className="about-me-text">
          Hello👋, I’m Harsh Sehgal, a driven web developer and electrical engineering student at IET Lucknow, with a passion for building innovative web applications and solving complex problems. Over the years, I’ve honed my skills in full-stack development, AI prompting, and data structures and algorithms.
          I’m currently pursuing a bachelor’s degree in Electrical Engineering at IET Lucknow, where I’ve developed a strong foundation in both hardware and software technologies. Alongside my academic journey, I’ve actively immersed myself in web development and programming.
        </p>
      </div>

      {/* Skills & Interests Section */}
      <div className="skills-intersts">
        <h2 className="headings" align="left">Skills & Interests</h2>
        <p className="skills-text">
          I specialize in Web Development, with expertise in React, Node.js, and MongoDB, creating dynamic and responsive websites. I continuously update my skills to enhance AI-driven solutions through effective prompt engineering. With strong problem-solving capabilities, I excel in Data Structures and Algorithms, allowing me to develop efficient solutions. Additionally, I have extensive experience in WordPress development, particularly with the Astra and OceanWP themes, which enables me to build customizable, high-performing websites that cater to diverse user needs.
        </p>
        <p className="skills-text">
          I have a wide range of interests, including reading books and interacting with financial experts and advisors to broaden my knowledge. I enjoy listening to podcasts on business, nature, and wildlife. Traveling is something I love, and I engage in sports like cricket, table tennis, and chess. As a music listener, I find joy in discovering new tunes, and I also love spending time playing with dogs.
        </p>

        {/* Video Section */}
        <div className="video-container">
          <video
            className="video"
            width="600"
            height="400"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/images/your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h2 className="headings" align="left">Tech Stack</h2>
        <p className="tech-stack-icons" align="left">
          <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="40" height="40" />
          </a>
          <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40" />
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40" />
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" width="40" height="40" />
          </a>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40" />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React.js" width="40" height="40" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Skills;
