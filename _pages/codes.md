---
layout: page
title: "Code & software"
permalink: /codes/
eyebrow: Research in practice
description: "Code and implementations from our work in intelligent CAD, geometric computing, and microstructure modeling."
content_class: code-page
section_nav:
  - title: AI for CAD/CAM
    id: ai-cad
  - title: Surfaces & solids
    id: surfaces-solids
  - title: Microstructures
    id: microstructures
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
