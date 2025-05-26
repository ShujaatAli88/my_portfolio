import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">Shujaat Ali</div>
        <ul className="navLinks">
          <li><a href="#about" className="navLink">About</a></li>
          <li><a href="#projects" className="navLink">Projects</a></li>
          <li><a href="#contact" className="navLink">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
      <div className="heroContent">
        <img src="/profile_pic.jpeg" alt="Shujaat Ali" className="profileImage" />
        <div>
          <h1 className="title">
            Hi, I'm <span className="accent">Shujaat Ali</span>
          </h1>
          <p className="subtitle">
            Software Engineer | Problem Solver | Data Enthusiast
          </p>
          <a href="#projects" className="ctaButton">See My Work</a>
        </div>
      </div>
    </header>
      <section id="about" className="section">
        <h2 className="sectionTitle">About Me</h2>
        <p className="text">
          I have hands-on experience working with large-scale data extraction and automation, leveraging powerful libraries and tools such as Python (BeautifulSoup, Scrapy, Selenium), JavaScript (Node.js, Puppeteer), React, and cloud platforms (AWS, GCP).
          With a strong background in frontend development using React and backend development with Node.js, I have successfully built full-stack applications using the MERN stack. I specialize in designing efficient, scalable solutions that streamline workflows and unlock valuable insights from complex datasets.
          Passionate about writing clean, elegant code and tackling challenging problems with innovative approaches.
        </p>
      </section>

      <section id="projects" className="section" style={{ backgroundColor: "#f0f0f5" }}>
        <h2 className="sectionTitle">Projects</h2>
        <div className="projectsGrid">
          <ProjectCard
            title="Awesome Web App"
            description="A React-based platform that streamlines workflows and boosts productivity."
            url="https://github.com/yourusername/awesome-web-app"
          />
          <ProjectCard
            title="Amazon Product Scraper Using Selenium"
            description="A powerful tool for extracting product data from Amazon using Selenium.Selenium navigates through Amazon's pages, extracts product details, and saves them in Airtable."
            url="https://github.com/ShujaatAli88/Selenium-Based-Amazon-product-Extration.git"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio built with React and deployed on GitHub Pages."
            url="https://github.com/yourusername/portfolio"
          />
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="sectionTitle">Get In Touch</h2>
        <p className="text">I'm open to new opportunities, collaborations, or just a friendly hello!</p>
        <a href="mailto:shujaatalee888@gmail.com" className="ctaButton">Say Hello</a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Shujaat Ali. All rights reserved.</p>
        <div>
          <a href="https://github.com/ShujaatAli88" className="socialLink">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/shujaat-ali-824253155/" className="socialLink">LinkedIn</a> |{" "}
        </div>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, description, url }) => (
  <a href={url} target="_blank" rel="noreferrer" className="projectCard">
    <h3>{title}</h3>
    <p>{description}</p>
  </a>
);

export default HomePage;
