---
layout: page
title: gallery
permalink: /gallery/
description: Photos from conferences, meetings, and personal moments.
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
        {% include figure.html path=image_path class="img-fluid z-depth-1 rounded" alt=first_photo.caption zoomable=false cache_bust=true %}
        <div class="event-card-overlay">
          <div class="event-card-info">
            <h4 class="event-card-title">{{ event.title }}</h4>
            <div class="event-card-date">
              {%- assign event_date = event.date | date: "%b %d, %Y" -%}
              <i class="fas fa-calendar-alt"></i> {{ event_date }}
            </div>
            {% if event.images.size > 1 %}
            <div class="photo-count-badge">
              <i class="fas fa-images"></i> {{ event.images.size }} photos
            </div>
            {% endif %}
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
    height: 100%;
  }
  
  .gallery-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
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
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .event-card-date i {
    font-size: 0.9em;
    opacity: 0.8;
  }
  
  .photo-count-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.4rem 0.6rem;
    border-radius: 0.5rem;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    z-index: 5;
  }
  
  .photo-count-badge i {
    font-size: 0.9em;
  }
  
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    .gallery-item img {
      height: 250px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-container img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 0.5rem;
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
      title: "{{ event.title }}",
      date: "{{ event.date }}",
      images: [
        {%- for photo in event.images -%}
        {
          image: "{{ photo.image | prepend: 'assets/img/gallery/' | relative_url }}",
          caption: "{{ photo.caption | default: '' }}"
        }{% unless forloop.last %},{% endunless %}
        {%- endfor -%}
      ]
    }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ];
  
  function openEventGallery(eventIndex) {
    currentEventIndex = eventIndex;
    currentPhotoIndex = 0;
    const event = eventsData[eventIndex];
    document.getElementById('eventGalleryModalLabel').textContent = event.title;
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
    document.getElementById('eventGalleryImage').src = photo.image;
    document.getElementById('eventGalleryImage').alt = photo.caption || event.title;
    document.getElementById('photoCounter').textContent = `${currentPhotoIndex + 1} / ${event.images.length}`;
    document.getElementById('photoCaption').textContent = photo.caption || '';
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if ($('#eventGalleryModal').hasClass('show')) {
      if (e.key === 'ArrowLeft') changePhoto(-1);
      if (e.key === 'ArrowRight') changePhoto(1);
      if (e.key === 'Escape') $('#eventGalleryModal').modal('hide');
    }
  });
</script>
