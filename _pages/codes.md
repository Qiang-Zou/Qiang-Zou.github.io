---
layout: page
title: "Code"
permalink: /codes/
description: "Code accompanying our research."
content_class: code-page
---
{% assign categories = 'AI for CAD/CAM,Surface and Solid Modeling,Microstructure Modeling' | split: ',' %}
{% assign ids = 'ai-cad,surfaces-solids,microstructures' | split: ',' %}
{% for category in categories %}
<section class="project-section" aria-labelledby="{{ ids[forloop.index0] }}">
  <h2 id="{{ ids[forloop.index0] }}">{{ category }}</h2>
  {% assign projects = site.data.projects | where: 'category', category %}
  {% for project in projects %}{% include project.html project=project %}{% endfor %}
</section>
{% endfor %}
