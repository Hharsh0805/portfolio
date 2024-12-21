import React from 'react'; 
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Dal-ivery',
      description: 'A full-stack MERN food delivery platform with user authentication, product management, and order tracking.',
      image: '/images/food-delivery.jpg',
      github: 'https://github.com/Hharsh0805/food-delivery-app', // Your GitHub link for Dal-ivery
      demo: 'https://food-delivery-demo.com' // Replace with your actual live demo link
    },
    {
      title: 'Task Management App',
      description: 'A React-based task manager with drag-and-drop functionality and real-time updates.',
      image: '/images/task-manager.png',
      github: 'https://github.com/Hharsh0805/task-manager', // Your GitHub link for Task Management App
      demo: 'https://task-manager-demo.com' // Replace with your actual live demo link
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience.',
      image: '/images/portfolio.png', // Add image path for the portfolio site
      github: 'https://github.com/Hharsh0805/portfolio/', // Your GitHub link for Personal Portfolio Website
      demo: 'https://portfolio-six-inky-47.vercel.app/' // Replace with your actual live demo link
    },
    {
      title: 'Ashria-voice bot',
      description: 'A web application built for managing Ashria-related tasks and projects.',
      image: '/images/ironman.jpeg',
      github: 'https://github.com/Hharsh0805/Ashria', // Your GitHub link for Ashria-voice bot
      demo: 'https://github.com/Hharsh0805/Ashria/blob/main/testing.py' // Replace with your actual live demo link
    },
    {
      title: 'Authentication App',
      description: 'A MERN-based authentication app featuring user registration, login, and session management.',
      image: '/images/authentication.png',
      github: 'https://github.com/Hharsh0805/authentication-app', // Your GitHub link for Authentication App
      demo: 'https://authentication-app-ui-theta.vercel.app/signup' // Replace with your actual live demo link
    }
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
