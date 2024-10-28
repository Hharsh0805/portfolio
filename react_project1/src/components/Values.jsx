import React from 'react';
import './Values.css';

const Values = () => {
  const blogs = [
    {
      title: "SpaceX’s Latest Achievements in Rocket Reusability",
      image: "https://pbs.twimg.com/media/GZ33UROXAAAxwe6?format=jpg&name=360x360",
      link: "/blog/spacex-achievements"
    },
    {
      title: "Climate Change: Catastrophic Impact & Challenges",
      image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg",
      link: "/blog/climate-change"
    },
    {
      title: "Clean and Sustainable Energy Generation in India",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      link: "/blog/sustainable-energy-india"
    },
  ];

  return (
    <>
      <section className="values">
        <div className="value-heading"> 
          <h1>Recent Posts</h1>
        </div>
   
        <div className="values-container">
          {blogs.map((blog, index) => (
            <div className="value" key={index}>
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <a href={blog.link} className="read-more-link">Read More</a>
            </div>
          ))}
          
          {/* New "Explore More" Container */}
          <div className="explore-more-container">
            <h3>Explore More</h3>
            <a href="/blogs" className="explore-more-button">
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
