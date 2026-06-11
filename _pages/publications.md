---
layout: page
permalink: /publications/
title: Research
nav_title: research
description: My research explores how <strong>memristive devices</strong> can power a new generation of computing for the edge. I build <strong>physics-based models</strong> that capture how these devices really behave, including their noise and variability, and I study how <strong>stochastic effects in resistive switching</strong> can be turned into a computational advantage. Much of my work centers on <strong>Cellular Nonlinear Networks</strong> and <strong>neuromorphic circuits</strong>, where I look for ways to compute that are inspired by physics and biology rather than by conventional digital logic.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<h2 class="section-heading">Research Highlights</h2>
{% include highlights.liquid %}

<p class="pub-section-label">Publications</p>
<div class="pub-count-row">
  <h2 class="pub-count-heading">Papers <span id="pub-count">{{ site.pub_stats.total }}</span></h2>
  <div class="pub-sort" id="pub-sort">
    <span class="pub-sort-label">Sort:</span>
    <button class="pub-sort-btn active" data-sort="newest">Newest</button>
    <button class="pub-sort-btn" data-sort="citations">Citations</button>
  </div>
</div>

{% include pub_filters.liquid %}

<div class="publications">

{% bibliography %}

</div>
