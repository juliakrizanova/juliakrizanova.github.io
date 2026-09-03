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
  {% if site.teaching.size > 0 %}
  {% assign courses = site.teaching | sort: "order" %}
  {% for course in courses %}
  <div class="course-item">
    {% if course.semester %}
    <span class="course-meta">{{ course.semester }}</span>
    {% endif %}
    <h3><a class="course-link" href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
    </div>
    {% endfor %}
    {% else %}
    <p>No courses are listed yet.</p>
    {% endif %}
</div>
