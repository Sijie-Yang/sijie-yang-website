---
layout: page
title: publications
title_zh: 论文
permalink: /publications/
description: publications in reversed chronological order.
description_zh: 按时间倒序排列的发表论文。
bilingual: true
default_lang: en
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">
  <div class="pub-filter">
    <button class="filter-btn active" data-pub-filter="all">
      <span class="lang-content lang-inline" data-lang="en">All</span>
      <span class="lang-content lang-inline" data-lang="zh">全部</span>
    </button>
    <button class="filter-btn" data-pub-filter="selected">
      <span class="lang-content lang-inline" data-lang="en">Selected</span>
      <span class="lang-content lang-inline" data-lang="zh">精选</span>
    </button>
    <button class="filter-btn" data-pub-filter="collaboration">
      <span class="lang-content lang-inline" data-lang="en">Collaboration</span>
      <span class="lang-content lang-inline" data-lang="zh">合作</span>
    </button>
  </div>

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>

<style>
  /* Pull filter buttons closer to page description (this block is publications-only). */
  .post-header .post-description {
    margin-bottom: 0.5rem;
  }

  .publications {
    margin-top: 0;
  }

  .pub-filter {
    text-align: left;
    margin-bottom: 1.5rem;
    padding-left: 0;
  }

  .pub-filter::after {
    content: "";
    display: block;
    clear: both;
  }

  .publications .filter-btn {
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

  .publications .filter-btn:hover {
    background-color: rgba(38, 152, 186, 0.12);
  }

  .publications .filter-btn.active {
    background-color: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: var(--global-hover-text-color);
  }

  .publications .filter-btn.active:hover {
    background-color: var(--global-hover-color);
    border-color: var(--global-hover-color);
  }

  .publications h2.bibliography.pub-year-hidden {
    display: none;
  }

  .publications ol.bibliography > li.pub-hidden {
    display: none;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.pub-filter .filter-btn');
    var yearHeaders = document.querySelectorAll('.publications h2.bibliography');
    var pubItems = document.querySelectorAll('.publications ol.bibliography > li');

    function applyPublicationFilter(filter) {
      pubItems.forEach(function(li) {
        var row = li.querySelector('.row[data-pub-group]');
        var group = row ? row.getAttribute('data-pub-group') : 'collaboration';
        var show = filter === 'all' || group === filter;
        li.classList.toggle('pub-hidden', !show);
      });

      yearHeaders.forEach(function(h2) {
        var ol = h2.nextElementSibling;
        if (!ol || !ol.matches('ol.bibliography')) {
          return;
        }
        var hasVisible = Array.from(ol.querySelectorAll('li')).some(function(li) {
          return !li.classList.contains('pub-hidden');
        });
        h2.classList.toggle('pub-year-hidden', !hasVisible);
      });
    }

    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        applyPublicationFilter(this.getAttribute('data-pub-filter'));
      });
    });
  });
</script>
