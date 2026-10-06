---
layout: default
title: "Projects"
description: "Glint G2 for Even G2 glasses, payments and AI work at Circle, Gumroad contributions, and Ruby tools."
---

<section>
  {% include layouts/profile.html %}
</section>

<h2 class="mt-8 mb-4 text-2xl font-bold animate-fade-in animation-duration-500">Projects</h2>

<p class="mb-8 animate-fade-in animation-duration-500">
  I build tools for Even G2 glasses and Ruby applications, alongside my payments and AI work at Circle and earlier contributions to Gumroad.
</p>

<h3 class="mt-8 mb-4 text-xl font-semibold animate-scale-up animation-duration-500">Even G2 glasses</h3>

<section class="space-y-6">
  {% include projects/apps/glint_g2.html %}
</section>

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
    {% include projects/contributions/circle.html %}
  </div>

  <div class="animate-scale-up animation-duration-[2.4s]">
    {% include projects/contributions/gumroad.html %}
  </div>
</section>
