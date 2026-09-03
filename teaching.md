---
layout: page
title: teaching
permalink: /teaching/
order: 1
---

<style>
  /* Styled Teaching List */
  .course-item {
    margin-bottom: 1rem;
  }

  .course-meta {
    font-family: monospace;
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  .course-meta::before {
    content: "✦ ";
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-right: 0.3rem;
  }

  .course-item h3 {
    margin: 0 0 0.5rem 0;
  }

  .course-item h3 a {
    color: var(--primary-color);
    text-decoration: none;
  }

  .course-item h3 a:hover {
    text-decoration: underline;
  }

  .card-tags {
    margin: 0.5rem 0;
  }
</style>


<div class="home">
  {% if site.courses.size > 0 %}
  {% for course in site.courses %}
  <div class="course-item">
    <span class="course-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3><a class="course-link" href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
</div>
