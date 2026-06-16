---
layout: page
title: projects
title_zh: 项目
permalink: /projects/
description: A showcase of my research and design work across various domains.
description_zh: 涵盖研究与设计领域的项目展示。
bilingual: true
default_lang: en
nav: true
nav_order: 3
display_categories: [research, design]
category_labels_zh:
  research: 研究
  design: 设计
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  <div class="category-filter">
    <button class="filter-btn active" data-category="all">
      <span class="lang-content lang-inline" data-lang="en">All</span>
      <span class="lang-content lang-inline" data-lang="zh">全部</span>
    </button>
    {%- for category in page.display_categories %}
    <button class="filter-btn" data-category="{{ category }}">
      <span class="lang-content lang-inline" data-lang="en">{{ category | capitalize }}</span>
      <span class="lang-content lang-inline" data-lang="zh">{{ page.category_labels_zh[category] }}</span>
    </button>
    {%- endfor %}
  </div>

  {%- if site.enable_project_categories and page.display_categories %}
  {%- for category in page.display_categories %}
  <div class="category-section" data-category="{{ category }}">
    <h2 class="category">
      <span class="lang-content lang-inline" data-lang="en">{{ category }}</span>
      <span class="lang-content lang-inline" data-lang="zh">{{ page.category_labels_zh[category] }}</span>
    </h2>
    {%- assign categorized_projects = site.projects | where: "category", category -%}
    {%- assign sorted_projects = categorized_projects | sort: "year" | reverse %}
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
  {%- assign sorted_projects = site.projects | sort: "year" | reverse -%}
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
  
  .projects .filter-btn {
    margin: 0 0.25rem 0.25rem 0;
    text-transform: lowercase;
    float: left;
    padding: 0.25rem 0.75rem;
    font-size: 0.65rem;
    line-height: 1.2;
    border-radius: 0.2rem;
    border: 1px solid var(--global-theme-color);
    cursor: pointer;
    background-color: transparent;
    color: var(--global-theme-color);
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .projects .filter-btn:hover {
    background-color: rgba(38, 152, 186, 0.12);
  }

  .projects .filter-btn.active {
    background-color: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: var(--global-hover-text-color);
  }

  .projects .filter-btn.active:hover {
    background-color: var(--global-hover-color);
    border-color: var(--global-hover-color);
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
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const selectedCategory = this.dataset.category;
        
        if (selectedCategory === 'all') {
          categorySections.forEach(section => {
            section.style.display = 'block';
          });
        } else {
          categorySections.forEach(section => {
            section.style.display = 'none';
          });
          const selectedSection = document.querySelector(`.category-section[data-category="${selectedCategory}"]`);
          if (selectedSection) {
            selectedSection.style.display = 'block';
          }
        }
      });
    });
  });
</script>
