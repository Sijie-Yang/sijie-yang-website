---
layout: page
title: gallery
title_zh: 相册
permalink: /gallery/
description: Photos from conferences, meetings, and personal moments.
description_zh: 会议、交流与生活的影像记录。
bilingual: true
default_lang: en
nav: true
nav_order: 4
---

<!-- pages/gallery.md -->
<div class="gallery-page">
  <div class="gallery-grid">
    {%- assign sorted_events = site.data.gallery.events | sort: "date" | reverse -%}
    {%- for event in sorted_events -%}
    {%- assign first_photo = event.images[0] -%}
    {%- assign image_path = first_photo.image | prepend: 'assets/img/gallery/' -%}
    <div class="gallery-event-card" data-event-index="{{ forloop.index0 }}" onclick="openEventGallery({{ forloop.index0 }})" data-category="{{ event.category | default: 'general' }}">
      <div class="gallery-item">
        <img
          src="{{ image_path | relative_url | bust_file_cache }}"
          alt="{{ first_photo.caption | default: event.title | escape }}"
          class="gallery-thumb"
          {% if forloop.index <= 9 %}loading="eager" fetchpriority="high"{% else %}loading="lazy"{% endif %}
          decoding="async"
        >
        <div class="event-card-overlay">
          <div class="event-card-info">
            <h4 class="event-card-title">{% if event.title_zh %}<span class="lang-content lang-inline" data-lang="en">{{ event.title }}</span><span class="lang-content lang-inline" data-lang="zh">{{ event.title_zh }}</span>{% else %}{{ event.title }}{% endif %}</h4>
            <div class="event-card-date">
              <span><i class="fas fa-calendar-alt"></i> {{ event.date | date: "%b %d, %Y" }}</span>
              {% if event.images.size > 1 %}
              <span class="event-card-photo-count">
                <i class="fas fa-images"></i>
                <span class="lang-content lang-inline" data-lang="en">{{ event.images.size }} photos</span><span class="lang-content lang-inline" data-lang="zh">{{ event.images.size }} 张照片</span>
              </span>
              {% endif %}
            </div>
          </div>
        </div>
      </div>
    </div>
    {%- endfor -%}
  </div>
</div>

<style>
  .gallery-page {
    margin-top: 2rem;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .gallery-event-card {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .gallery-event-card:hover {
    transform: translateY(-5px);
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    height: 300px;
    background: var(--global-divider-color);
  }

  .gallery-item img,
  .gallery-item .gallery-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  
  .event-card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), transparent);
    color: white;
    padding: 1.5rem 1rem 1rem;
    transition: opacity 0.3s ease;
  }
  
  .event-card-info {
    position: relative;
  }
  
  .event-card-title {
    font-size: 1.1em;
    margin: 0 0 0.5rem 0;
    color: white;
    font-weight: 600;
    line-height: 1.3;
  }
  
  .event-card-date {
    font-size: 0.85em;
    color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem 0.75rem;
    margin-bottom: 0;
  }
  
  .event-card-date i {
    font-size: 0.9em;
    opacity: 0.8;
  }

  .event-card-photo-count {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }
  
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    .gallery-item {
      height: 250px;
    }
    
    .gallery-item img {
      height: 100%;
    }
    
    .event-card-title {
      font-size: 1em;
    }
    
    .event-card-overlay {
      padding: 1rem 0.75rem 0.75rem;
    }
  }
</style>

<!-- Event Gallery Modal -->
<div class="modal fade" id="eventGalleryModal" tabindex="-1" role="dialog" aria-labelledby="eventGalleryModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="eventGalleryModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="event-gallery-carousel">
          <button class="carousel-btn prev-btn" onclick="changePhoto(-1)">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="carousel-container">
            <div class="carousel-image-wrapper">
              <img id="eventGalleryImage" src="" alt="" class="img-fluid">
            </div>
            <div class="photo-info">
              <span id="photoCounter"></span>
              <p id="photoCaption"></p>
            </div>
          </div>
          <button class="carousel-btn next-btn" onclick="changePhoto(1)">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .event-gallery-carousel {
    position: relative;
    width: 100%;
  }
  
  .carousel-container {
    position: relative;
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-image-wrapper {
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--global-divider-color);
    border-radius: 0.5rem;
  }
  
  .carousel-container img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 0.5rem;
    transition: opacity 0.2s ease;
  }

  .carousel-container img.is-loading {
    opacity: 0.4;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: background 0.3s ease;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-btn:hover {
    background: rgba(0, 0, 0, 0.9);
  }
  
  .carousel-btn.prev-btn {
    left: 10px;
  }
  
  .carousel-btn.next-btn {
    right: 10px;
  }
  
  .carousel-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  .photo-info {
    margin-top: 1rem;
    text-align: center;
  }
  
  .photo-info #photoCounter {
    font-size: 0.9em;
    color: var(--global-text-color-light);
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .photo-info #photoCaption {
    font-size: 1em;
    color: var(--global-text-color);
    margin: 0;
  }
</style>

<script>
  let currentEventIndex = -1;
  let currentPhotoIndex = 0;
  let eventsData = [
    {%- for event in sorted_events -%}
    {
      title_en: {{ event.title | jsonify }},
      title_zh: {{ event.title_zh | default: event.title | jsonify }},
      date: "{{ event.date }}",
      images: [
        {%- for photo in event.images -%}
        {
          image: "{{ photo.image | prepend: 'assets/img/gallery/' | relative_url }}",
          caption_en: {{ photo.caption | default: '' | jsonify }},
          caption_zh: {{ photo.caption_zh | default: photo.caption | default: '' | jsonify }}
        }{% unless forloop.last %},{% endunless %}
        {%- endfor -%}
      ]
    }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ];

  function getGalleryLang() {
    try {
      var saved = localStorage.getItem('site-lang');
      if (saved === 'zh' || saved === 'en') return saved;
    } catch (e) {}
    return document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  }

  function eventTitle(event) {
    return getGalleryLang() === 'zh' ? event.title_zh : event.title_en;
  }

  function photoCaption(photo) {
    return getGalleryLang() === 'zh' ? (photo.caption_zh || photo.caption_en) : photo.caption_en;
  }
  
  function openEventGallery(eventIndex) {
    currentEventIndex = eventIndex;
    currentPhotoIndex = 0;
    const event = eventsData[eventIndex];
    document.getElementById('eventGalleryModalLabel').textContent = eventTitle(event);
    updatePhoto();
    $('#eventGalleryModal').modal('show');
  }
  
  function changePhoto(direction) {
    if (currentEventIndex === -1) return;
    const event = eventsData[currentEventIndex];
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) currentPhotoIndex = event.images.length - 1;
    if (currentPhotoIndex >= event.images.length) currentPhotoIndex = 0;
    updatePhoto();
  }
  
  function updatePhoto() {
    if (currentEventIndex === -1) return;
    const event = eventsData[currentEventIndex];
    const photo = event.images[currentPhotoIndex];
    const img = document.getElementById('eventGalleryImage');
    img.classList.add('is-loading');
    img.onload = function() {
      img.classList.remove('is-loading');
    };
    img.src = photo.image;
    if (img.complete) {
      img.classList.remove('is-loading');
    }
    img.alt = photoCaption(photo) || eventTitle(event);
    document.getElementById('photoCounter').textContent = `${currentPhotoIndex + 1} / ${event.images.length}`;
    document.getElementById('photoCaption').textContent = photoCaption(photo) || '';
  }

  document.addEventListener('site-lang-change', function() {
    if (currentEventIndex === -1) return;
    const event = eventsData[currentEventIndex];
    document.getElementById('eventGalleryModalLabel').textContent = eventTitle(event);
    updatePhoto();
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if ($('#eventGalleryModal').hasClass('show')) {
      if (e.key === 'ArrowLeft') changePhoto(-1);
      if (e.key === 'ArrowRight') changePhoto(1);
      if (e.key === 'Escape') $('#eventGalleryModal').modal('hide');
    }
  });
</script>
