import React from 'react';
import { Link } from 'react-router-dom';
import './RecentPosts.css';

const RecentPosts = () => {
  const blogs = [
    {
      title: "SpaceX's Latest Achievements in Rocket Reusability",
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
    <section className="recent-posts">
      <h2>Recent Posts</h2>
      <hr className="separator"/>
      <div className="posts-container">
        {blogs.map((blog, index) => (
          <div className="post-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <Link to={blog.link} className="read-more-link">Read More</Link>
          </div>
        ))}
      </div>
      
      <Link to="/blogs" className="explore-more-btn">
        Explore More <span>→</span>
      </Link>
    </section>
  );
};

export default RecentPosts;

