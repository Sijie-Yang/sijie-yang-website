---
layout: page
title: projects
permalink: /projects/
description: A showcase of my research and design work across various domains.
nav: true
nav_order: 3
display_categories: [research, design]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  <!-- Category filter buttons -->
  <div class="category-filter">
    <button class="filter-btn active" data-category="all">All</button>
    {%- for category in page.display_categories %}
    <button class="filter-btn" data-category="{{ category }}">{{ category | capitalize }}</button>
    {%- endfor %}
  </div>

  {%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <div class="category-section" data-category="{{ category }}">
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_projects = site.projects | where: "category", category -%}
    {%- assign sorted_projects = categorized_projects | sort: "year" | reverse %}
    <!-- Generate cards for each project -->
    {% if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.html %}
      {%- endfor %}
      </div>
    </div>
    {%- else -%}
    <div class="grid">
      {%- for project in sorted_projects -%}
        {% include projects.html %}
      {%- endfor %}
    </div>
    {%- endif -%}
  </div>
  {% endfor %}

  {%- else -%}
  <!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "year" | reverse -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {%- endif -%}
</div>

<style>
  .category-filter {
    text-align: left;
    margin-bottom: 1rem;
    padding-left: 0;
  }
  
  .filter-btn {
    margin: 0 0.25rem 0.25rem 0;
    text-transform: lowercase;
    float: left;
    padding: 0.25rem 0.75rem;
    font-size: 0.65rem;
    line-height: 1.2;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: #2798BA;
    border-color: #2798BA;
    color: #ffffff;
  }
  
  .filter-btn.active {
    background-color: #000000;
    border-color: #000000;
    color: #ffffff;
  }
  
  .category-section {
    margin-bottom: 3rem;
    clear: both;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const selectedCategory = this.dataset.category;
        
        if (selectedCategory === 'all') {
          // Show all category sections
          categorySections.forEach(section => {
            section.style.display = 'block';
          });
        } else {
          // Hide all sections first
          categorySections.forEach(section => {
            section.style.display = 'none';
          });
          // Show only the selected category
          const selectedSection = document.querySelector(`.category-section[data-category="${selectedCategory}"]`);
          if (selectedSection) {
            selectedSection.style.display = 'block';
          }
        }
      });
    });
  });
</script>
