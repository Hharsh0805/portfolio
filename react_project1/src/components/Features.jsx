import React from 'react';
import './Features.css';
const Features = () => {
  return (
    <section className="features">
      <div className="features-section">
        <div className="features-image">
          <img src="/images/profile.png" alt="profile" />
        </div>
        <div className="features-content">
          <h2>Who am I?</h2>
          <p>
            I’m Harsh Sehgal, a final-year Electrical Engineering student at IET Lucknow, passionate about web development, software engineering, and AI prompting. With strong skills in the MERN stack, Python, and DSA, I’m working towards becoming a millionaire by 24 through innovative tech solutions...
            <a href="https://your-link.com"> read more</a>
          </p>
        </div>
      </div>
      <h1>Activities</h1>
      <hr className="separator"/>
      <div className="features-section">
    <div className="features-image">
      <img src="/images/blogs.jpg" alt="blogs" />
    </div>
    <div className="features-content">
      <h2>Blogs</h2>
      <p>Promoting animal welfare is not just an act of kindness; it is a moral obligation we hold toward our fellow creatures. Each day, countless animals suffer due to neglect, abuse, and exploitation. By fostering a culture of compassion, we can change the narrative and create a world where animals are treated with dignity...
      <a href="https://your-link.com"> read more</a></p>
    </div>
  </div>

  <div className="features-section third">
    <div className="features-image">
      <img src="/images/github-logo.png" alt="Birds" />
    </div>
    <div className="features-content">
      <h2>Projects</h2>
      <p>I specialize in both front-end and back-end development using the MERN stack, enabling me to create dynamic and responsive web applications. My strong problem-solving skills in data structures and algorithms (DSA) allow me to tackle complex challenges efficiently. Additionally, I have a proven track record of delivering high-quality websites in minimal time, ensuring a seamless user experience while maintaining performance and scalability...<a href="https://your-link.com"> read more</a>
</p>
      
    </div>
  </div>


    </section>
  );
};

export default Features;