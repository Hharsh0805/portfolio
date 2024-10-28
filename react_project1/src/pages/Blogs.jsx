import React from 'react';
import './Blogs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Blogs = () => {
    const blogs = [
        {
          title: "SpaceX’s Latest Achievements in Rocket Reusability",
          description: "Discuss recent advancements and future prospects in reusable rocket technology.",
          additionalDescription: "SpaceX has revolutionized space travel with its reusable rocket technology. Recent successes have showcased the effectiveness of this approach, significantly reducing costs and increasing the frequency of space missions.",
          image: "https://pbs.twimg.com/media/GZ33UROXAAAxwe6?format=jpg&name=360x360",
          link: "/blog/spacex-achievements",
        },
        {
          title: "A Day in the Life of a Stray Animal",
          description: "Explore the challenges and realities faced by stray animals in urban environments.",
          image: "  https://images.pexels.com/photos/6342157/pexels-photo-6342157.jpeg",
          link: "/blog/stray-animal-life",
          additionalDescription: "Stray animals face numerous obstacles, from finding food and shelter to avoiding dangers on the streets. This blog sheds light on their daily struggles and the compassion needed to help them.",
        },
        {
            title: "India as a One-Third Contributor to the World's GDP",
            description: "Analyze the historical context and implications of India's economic contributions.",
            image: "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg",
          link: "/blog/india-gdp",
          additionalDescription: "Once a major economic force, India contributed significantly to global GDP. This post delves into the factors that shaped India's economic landscape and its current position in the world economy.",
        },
        {
          title: "Climate Change: Catastrophic Impact & Challenges",
          description: "Discuss the impact of climate change and its significance for the planet.",
          image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg",
          link: "/blog/climate-change",
          additionalDescription: "Climate change poses one of the greatest threats to our planet. This blog discusses its causes, effects, and the urgent need for action to mitigate its impact on ecosystems and human life.",
        },
        {
          title: "Clean and Sustainable Energy Generation in India",
          description: "Highlight initiatives and technologies advancing sustainable energy in India.",
          image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
          link: "/blog/sustainable-energy-india",
          additionalDescription: "India is making strides in clean energy technologies. This post explores various initiatives aimed at promoting renewable energy sources and reducing dependence on fossil fuels.",
        },
        {
          title: "Student Life Unplugged: The Truth About College",
          description: "Reflect on the experiences, challenges, and joys of college life.",
          image: "https://images.pexels.com/photos/1181628/pexels-photo-1181628.jpeg",
          link: "/blog/college-life",
          additionalDescription: "College life is a unique journey filled with learning, friendships, and personal growth. This blog captures the essence of what it means to be a college student today.",
        },
      ];
      
  const bookSuggestions = [
    "The Future of Humanity by Michio Kaku",
    "The Omnivore's Dilemma by Michael Pollan",
    "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
    "The Sixth Extinction: An Unnatural History by Elizabeth Kolbert",
    "Educated by Tara Westover",
    "The Lean Startup by Eric Ries",
    "Animal Liberation by Peter Singer",
    "The Hidden Life of Trees by Peter Wohlleben",
    "The Power of Now by Eckhart Tolle",
  ];

  return (<>
  <Header/>
  <div className="blog-page-heading">
  <h1 className='blog-main-heading'>Welcome to Harsh Sehgal Blogs</h1>
  </div>
  
<div className="blog-page">

      <div className="content-container">
        {blogs.map((blog, index) => (
          <div className="blog-container" key={index}>
            <h2 className="blog-heading">{blog.title}</h2>
            <img src={blog.image} alt={blog.title} className="featured-image" />
            <p className="blog-description">{blog.description}</p>
            <p className="additional-description">{blog.additionalDescription}</p>
           
            <hr className="separator" />
            <a href={blog.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>

      <aside className="sidebar">
        <div className="known-facts">
          <h3>Did You Know?</h3>
          <p>SpaceX has successfully landed 90% of its rockets back to the launch pad.</p>
        </div>
        <div className="book-suggestions">
          <h3>Recommended Reads</h3>
          <ul>
            {bookSuggestions.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>

    <Footer/>
  </>
  
  );
};

export default Blogs;
