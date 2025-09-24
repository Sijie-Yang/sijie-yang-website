---
layout: page
title: partnership
permalink: /partnership/
description: Entrepreneurial ventures and strategic collaborations that bridge technology and innovation.
nav: true
nav_order: 4
---

<div class="partnerships">
  <div class="intro-section">
    <p class="lead">Beyond academic research, I am passionate about translating innovative ideas into real-world impact through entrepreneurship and strategic partnerships. Here are some of the ventures and collaborations I've been involved in.</p>
  </div>

  <div class="partnership-grid">
    <!-- CityExperienceAI -->
    <div class="partnership-item">
      <div class="logo-container">
        <img src="/assets/img/partnerships/CityExperienceAI.png" alt="CityExperienceAI Logo" class="partnership-logo">
      </div>
      <h3 class="partnership-title">CityExperienceAI</h3>
      <p class="partnership-description">A spatial intelligence analytics company serving government (G), business (B), and consumer (C) sectors.</p>
    </div>

    <!-- reArch Lab -->
    <div class="partnership-item">
      <div class="logo-container">
        <img src="/assets/img/partnerships/reArch Lab.png" alt="reArch Lab Logo" class="partnership-logo">
      </div>
      <h3 class="partnership-title">reArch Lab</h3>
      <p class="partnership-description">An educational consulting agency focused on helping architecture and planning students transition into AI-assisted data analysis.</p>
    </div>

    <!-- reUrban Community -->
    <div class="partnership-item">
      <div class="logo-container">
        <img src="/assets/img/partnerships/reUrban Community.png" alt="reUrban Community Logo" class="partnership-logo">
      </div>
      <h3 class="partnership-title">reUrban Community</h3>
      <p class="partnership-description">A research community focused on urban transformations in the digital age.</p>
      <p class="partnership-link">
        <a href="https://www.notion.so/reUrban-Community-25e2f119ce3d80388d05f88f9daca148?source=copy_link" target="_blank" rel="noopener noreferrer">Join Notion Community</a>
      </p>
    </div>

    <!-- JIEnv Studio -->
    <div class="partnership-item">
      <div class="logo-container">
        <img src="/assets/img/partnerships/JIEnv Studio.png" alt="JIEnv Studio Logo" class="partnership-logo">
      </div>
      <h3 class="partnership-title">JIEnv Studio</h3>
      <p class="partnership-description">Environmental design studio specializing in sustainable architecture and urban planning solutions.</p>
    </div>
  </div>

  <div class="collaboration-section">
    <h2>Open to Collaboration</h2>
    <p>I'm always interested in exploring new partnerships and collaborative opportunities, especially in:</p>
    <ul>
      <li><strong>Urban Technology:</strong> Smart city solutions and urban analytics platforms</li>
      <li><strong>PropTech:</strong> Real estate technology and spatial intelligence applications</li>
      <li><strong>AI/ML:</strong> Machine learning applications in built environment analysis</li>
      <li><strong>Research Translation:</strong> Bridging academic research with industry applications</li>
    </ul>
    <p>Feel free to <a href="mailto:sijie.yang@u.nus.edu">reach out</a> if you're interested in collaborating!</p>
  </div>
</div>

<style>
  .partnerships {
    max-width: 1000px;
    margin: 0 auto;
  }

  .intro-section {
    margin-bottom: 3rem;
  }

  .lead {
    font-size: 1.1rem;
    color: var(--global-text-color-light);
    line-height: 1.6;
  }

  .partnership-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .partnership-item {
    text-align: center;
    transition: transform 0.2s ease;
  }

  .partnership-item:hover {
    transform: translateY(-5px);
  }

  .logo-container {
    margin-bottom: 0.75rem;
  }

  .partnership-logo {
    max-height: 80px;
    max-width: 100%;
    object-fit: contain;
    filter: grayscale(10%);
    transition: filter 0.2s ease, transform 0.2s ease;
  }

  .partnership-item:hover .partnership-logo {
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  .partnership-title {
    font-size: 1.1rem;
    font-weight: normal;
    color: var(--global-text-color);
    margin: 0.75rem 0 0.5rem 0;
  }

  .partnership-description {
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--global-text-color-light);
    margin: 0;
  }

  .partnership-link {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  .partnership-link a {
    font-size: 0.85rem;
    color: var(--global-theme-color);
    text-decoration: none;
    border: 1px solid var(--global-theme-color);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    transition: all 0.2s ease;
    display: inline-block;
  }

  .partnership-link a:hover {
    background-color: var(--global-theme-color);
    color: white;
    transform: translateY(-1px);
  }

  .collaboration-section {
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 2rem;
    margin-top: 3rem;
  }

  .collaboration-section h2 {
    color: var(--global-theme-color);
    margin-bottom: 1rem;
  }

  .collaboration-section ul {
    margin: 1rem 0;
  }

  .collaboration-section li {
    margin-bottom: 0.5rem;
  }

  /* Responsive design */
  @media (max-width: 1400px) {
    .partnership-grid {
      max-width: 1000px;
      gap: 2rem;
    }
  }

  @media (max-width: 1000px) {
    .partnership-grid {
      grid-template-columns: repeat(3, 1fr);
      max-width: 800px;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .partnership-grid {
      grid-template-columns: repeat(2, 1fr);
      max-width: 500px;
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .partnership-grid {
      grid-template-columns: 1fr;
      max-width: 280px;
      gap: 1.5rem;
    }
  }

  /* Dark mode support */
  html[data-theme="dark"] .collaboration-section {
    background: var(--global-card-bg-color);
    border-color: var(--global-divider-color);
  }
</style>
