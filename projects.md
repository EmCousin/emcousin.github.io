---
layout: default
title: "Projects"
description: "Open source projects, gems, and contributions"
---

<section>
  {% include layouts/profile.html %}
</section>

<h2 class="mt-8 mb-4 text-2xl font-bold animate-fade-in animation-duration-500">Open Source</h2>

<p class="mb-8 animate-fade-in animation-duration-500">
  I build tools that solve real problems. Here are some of my open source projects and contributions.
</p>

<h3 class="mt-8 mb-4 text-xl font-semibold animate-scale-up animation-duration-500">Ruby Gems</h3>

<section class="space-y-6">
  <div class="animate-scale-up animation-duration-[0.6s]">
    {% include projects/gems/grape_jsonapi.html %}
  </div>

  <div class="animate-scale-up animation-duration-[0.8s]">
    {% include projects/gems/activerecord_deepstore.html %}
  </div>

  <div class="animate-scale-up animation-duration-[1s]">
    {% include projects/gems/activemodel_caching.html %}
  </div>

  <div class="animate-scale-up animation-duration-[1.2s]">
    {% include projects/gems/influxdb_query_builder.html %}
  </div>

  <div class="animate-scale-up animation-duration-[1.4s]">
    {% include projects/gems/provet_client.html %}
  </div>
</section>

<h3 class="mt-12 mb-4 text-xl font-semibold animate-scale-up animation-duration-[1.6s]">Applications</h3>

<section class="space-y-6">
  <div class="animate-scale-up animation-duration-[1.8s]">
    {% include projects/apps/pkp.html %}
  </div>

  <div class="animate-scale-up animation-duration-[2s]">
    {% include projects/apps/simple_social_network.html %}
  </div>
</section>

<h3 class="mt-12 mb-4 text-xl font-semibold animate-scale-up animation-duration-[2.2s]">Contributions</h3>

<section class="space-y-6">
  <div class="animate-scale-up animation-duration-[2.4s]">
    {% include projects/contributions/gumroad.html %}
  </div>
</section>
