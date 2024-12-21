import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blogs.css';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      title: "SpaceX's Latest Achievements in Rocket Reusability",
      description: "Discuss recent advancements and future prospects in reusable rocket technology.",
      image: "https://pbs.twimg.com/media/GZ33UROXAAAxwe6?format=jpg&name=360x360",
      link: "/blog/spacex-achievements",
      category: "Technology"
    },
    {
      title: "A Day in the Life of a Stray Animal",
      description: "Explore the challenges and realities faced by stray animals in urban environments.",
      image: "https://images.pexels.com/photos/6342157/pexels-photo-6342157.jpeg",
      link: "/blog/stray-animal-life",
      category: "Nature"
    },
    {
      title: "India as a One-Third Contributor to the World's GDP",
      description: "Analyze the historical context and implications of India's economic contributions.",
      image: "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg",
      link: "/blog/india-gdp",
      category: "Economy"
    },
    {
      title: "Climate Change: Catastrophic Impact & Challenges",
      description: "Discuss the impact of climate change and its significance for the planet.",
      image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg",
      link: "/blog/climate-change",
      category: "Environment"
    },
    {
      title: "Clean and Sustainable Energy Generation in India",
      description: "Highlight initiatives and technologies advancing sustainable energy in India.",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      link: "/blog/sustainable-energy-india",
      category: "Technology"
    },
    {
      title: "Student Life Unplugged: The Truth About College",
      description: "Reflect on the experiences, challenges, and joys of college life.",
      image: "https://images.pexels.com/photos/1181628/pexels-photo-1181628.jpeg",
      link: "/blog/college-life",
      category: "Education"
    },
  ];

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="blogs">
      <Header />
      <main className="blog-page">
        <h1>Welcome to Harsh Sehgal's Blog</h1>
        
        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href={blog.link} className="read-more-btn">Read More</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;

