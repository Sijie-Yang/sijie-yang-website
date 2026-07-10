---
layout: page
title: press
title_zh: 媒体报道
permalink: /press/
description: News and media coverage of research and academic work.
description_zh: 研究与学术工作的媒体报道与新闻转载。
bilingual: true
default_lang: en
nav: true
nav_order: 6
press_platforms:
  - id: news
    label: News
    label_zh: 新闻
  - id: linkedin
    label: LinkedIn
    label_zh: LinkedIn
  - id: rednote
    label: RedNote
    label_zh: 小红书
  - id: wechat
    label: WeChat
    label_zh: 微信公众号
---

<!-- _pages/press.md -->
<div class="press-page-wrap">
  <div class="press-filter">
    <button class="filter-btn active" data-press-filter="all">
      <span class="lang-content lang-inline" data-lang="en">All</span>
      <span class="lang-content lang-inline" data-lang="zh">全部</span>
    </button>
    {%- for platform in page.press_platforms -%}
    <button class="filter-btn" data-press-filter="{{ platform.id }}">
      <span class="lang-content lang-inline" data-lang="en">{{ platform.label }}</span>
      <span class="lang-content lang-inline" data-lang="zh">{{ platform.label_zh }}</span>
    </button>
    {%- endfor -%}
  </div>

<div class="press-list">
  {%- assign press_items = site.data.press | sort: "date" | reverse -%}
  {%- for item in press_items -%}
  {%- assign cover_file = item.cover | default: item.screenshot -%}
  <article class="press-item" id="{{ item.id }}" data-platform="{{ item.platform | default: 'news' }}" data-language="{{ item.language | default: 'all' }}">
    <button
      type="button"
      class="press-cover-btn"
      onclick="openPressScreenshot('{{ item.id }}')"
      aria-label="View full-page archive"
    >
      <img
        src="{{ '/assets/img/press/' | append: cover_file | relative_url | bust_file_cache }}"
        alt="{% if item.title_zh %}{{ item.title_zh | escape }}{% else %}{{ item.title | escape }}{% endif %} — cover"
        class="press-cover"
        width="184"
        height="184"
        loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
        decoding="async"
      >
      <span class="press-cover-overlay" aria-hidden="true">
        <i class="fas fa-search-plus"></i>
      </span>
    </button>

    <div class="press-item-body">
      <div class="press-item-meta">
        <span class="press-outlet">
          {% if item.outlet_zh %}
          <span class="lang-content lang-inline" data-lang="en">{{ item.outlet }}</span>
          <span class="lang-content lang-inline" data-lang="zh">{{ item.outlet_zh }}</span>
          {% else %}
          {{ item.outlet }}
          {% endif %}
        </span>
        <span class="press-date"><i class="far fa-calendar-alt"></i> {{ item.date | date: "%b %-d, %Y" }}</span>
      </div>

      <h2 class="press-item-title">
        <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
          {% if item.title_zh %}
          <span class="lang-content lang-inline" data-lang="en">{{ item.title | default: item.title_zh }}</span>
          <span class="lang-content lang-inline" data-lang="zh">{{ item.title_zh }}</span>
          {% else %}
          {{ item.title }}
          {% endif %}
          <i class="fas fa-external-link-alt press-external-icon" aria-hidden="true"></i>
        </a>
      </h2>

      {% if item.source_note or item.source_note_zh %}
      <p class="press-source-note">
        {% if item.source_note_zh %}
        <span class="lang-content lang-inline" data-lang="en">{{ item.source_note }}</span>
        <span class="lang-content lang-inline" data-lang="zh">{{ item.source_note_zh }}</span>
        {% else %}
        {{ item.source_note }}
        {% endif %}
      </p>
      {% endif %}

      {% if item.excerpt or item.excerpt_zh %}
      <p class="press-excerpt">
        {% if item.excerpt_zh %}
        <span class="lang-content" data-lang="en">{{ item.excerpt | default: item.excerpt_zh }}</span>
        <span class="lang-content" data-lang="zh">{{ item.excerpt_zh }}</span>
        {% else %}
        {{ item.excerpt }}
        {% endif %}
      </p>
      {% endif %}

      <div class="press-item-actions">
        <button type="button" class="press-archive-link" onclick="openPressScreenshot('{{ item.id }}')">
          <i class="far fa-image"></i>
          <span class="lang-content lang-inline" data-lang="en">Full-page archive</span>
          <span class="lang-content lang-inline" data-lang="zh">全景截图</span>
        </button>
        {% if item.related %}
        {%- for link in item.related -%}
        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="press-related-link">
          {% if link.label_zh %}
          <span class="lang-content lang-inline" data-lang="en">{{ link.label }}</span>
          <span class="lang-content lang-inline" data-lang="zh">{{ link.label_zh }}</span>
          {% else %}
          {{ link.label }}
          {% endif %}
        </a>
        {%- endfor -%}
        {% endif %}
      </div>
    </div>
  </article>
  {%- endfor -%}
</div>
</div>

<!-- Screenshot archive modal -->
<div class="modal fade" id="pressScreenshotModal" tabindex="-1" role="dialog" aria-labelledby="pressScreenshotModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="pressScreenshotModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body press-modal-body">
        <img id="pressScreenshotImage" src="" alt="" class="press-modal-image">
        <p class="press-modal-caption">
          <span class="lang-content lang-inline" data-lang="en">Archived screenshot for reference. <a id="pressScreenshotOriginal" href="#" target="_blank" rel="noopener noreferrer">View original article</a></span>
          <span class="lang-content lang-inline" data-lang="zh">页面截图存档，供参考。<a id="pressScreenshotOriginalZh" href="#" target="_blank" rel="noopener noreferrer">查看原文</a></span>
        </p>
      </div>
    </div>
  </div>
</div>

<script type="application/json" id="press-screenshot-data">
{{ site.data.press | jsonify }}
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.press-filter .filter-btn');
    var pressItems = document.querySelectorAll('.press-item');

    function applyPressFilter(filter) {
      pressItems.forEach(function(item) {
        var platform = item.getAttribute('data-platform') || 'news';
        var show = filter === 'all' || platform === filter;
        item.classList.toggle('press-hidden', !show);
      });
    }

    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        applyPressFilter(this.getAttribute('data-press-filter'));
      });
    });

    var pressData = JSON.parse(document.getElementById('press-screenshot-data').textContent || '[]');
    var pressById = {};
    pressData.forEach(function(item) {
      pressById[item.id] = item;
    });

    window.openPressScreenshot = function(id) {
      var item = pressById[id];
      if (!item) return;

      var fullFile = item.screenshot_full || item.screenshot;
      var imgPath = '{{ "/assets/img/press/" | relative_url }}' + fullFile;
      var title = item.title_zh || item.title || item.outlet;

      document.getElementById('pressScreenshotModalLabel').textContent = title;
      document.getElementById('pressScreenshotImage').src = imgPath;
      document.getElementById('pressScreenshotImage').alt = title + ' — archived screenshot';
      document.getElementById('pressScreenshotOriginal').href = item.url;
      document.getElementById('pressScreenshotOriginalZh').href = item.url;

      if (window.jQuery) {
        jQuery('#pressScreenshotModal').modal('show');
      }
    };
  });
</script>
