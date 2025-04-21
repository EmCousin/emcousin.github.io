---
layout: default
title: "Resume"
description: "You'll find detailed information about my experience here"
---

<section>
  {% include layouts/profile.html %}
</section>

<h2 class="my-8 text-2xl font-bold animate-slide-in-from-left animation-duration-[0.4s]">Experience</h2>

<section class="my-8 animate-slide-in-from-left animation-duration-500">
  <div class="flex space-x-2">
    <a href="https://spring.net" class="w-16 h-16">
      <img src="/assets/images/resume/spring_logo.jpg" alt="Spring Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Senior Software Engineer - Spring.net</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">June 2024 - April 2025</span>
    </div>
  </div>

  <p class="mt-2">Spring creates equal investment opportunities for everyday investors through a single, user-friendly platform. By handling everything from opportunity discovery to trading in one system, Spring simplifies complex processes so regular people can access markets previously reserved for financial professionals.</p>

  <div>
    <details class="mt-2 peer" aria-describedby="spring-key-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <ul id="spring-key-contributions" class="min-h-0">
        <li>
          Overhauled the investors' allocation management system, for pre-<span class="border-b border-dotted cursor-help" title="Token Generation Event">TGE</span> and post-TGE deals
        </li>
        <li>Developed a new modal navigation system using Turbo Frames</li>
        <li>Implemented new price history data source, allowing users to see the price changes of the tokens in real time, leveraging InfluxDB and the Coingecko API</li>
        <li>Massive architecture improvements to the codebase</li>
      </ul>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="spring-technical-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="spring-technical-skills" class="min-h-0">
        <p>Software Infrastructure · Ruby on Rails · Postgres · InfluxDB · Hotwire · Heroku · Web3 · Blockchain</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="spring-recommendations">
      <summary role="button">Recommendations</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-4 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="spring-recommendations" class="min-h-0 w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {% include recommendations/spring/sebastian.html %}
        {% include recommendations/spring/tomas.html %}
        {% include recommendations/spring/glen.html %}
        {% include recommendations/spring/katie.html %}
      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[0.6s]">
  <div class="flex space-x-2">
    <a href="https://reprtoir.com" class="w-16 h-16">
      <img src="/assets/images/resume/reprtoir_logo.webp" alt="Reprtoir Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Senior Software Engineer - Rendez-Vous Digital</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">July 2021 - April 2024</span>
    </div>
  </div>

  <p class="mt-2">At Reprtoir, a software-as-a-service platform driving innovation in the music industry, I collaborated with a team of skilled Ruby on Rails experts. Together, we contributed to significant business initiatives for the company.</p>

  <div>
    <details class="mt-2 peer" aria-describedby="reprtoir-key-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <ul id="reprtoir-key-contributions" class="min-h-0">
        <li>Improved the existing ElasticSearch infrastructure, creating user-friendly and responsive portals for clients' Right-Holders.</li>
        <li>Integrated the ElasticSearch-powered filtering system with RedShift databases, resulting in an advanced analytics suite developed with React.</li>
        <li>Introduced Artificial Intelligence (AI) capabilities to enhance track searches, allowing users to find similar compositions across various sources.</li>
        <li>Implemented AI-driven search functionality, enabling users to explore tracks using free-form descriptions.</li>
        <li>Leveraged these technological advancements to empower clients in curating engaging content libraries.</li>
      </ul>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="reprtoir-technical-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="reprtoir-technical-skills" class="min-h-0">
        <p>Software Infrastructure · Ruby on Rails · Postgres · React.js · Elasticsearch · Amazon Redshift · Hotwire · Artificial Intelligence (AI)</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="reprtoir-recommendations">
      <summary role="button">Recommendations</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-4 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="reprtoir-recommendations" class="min-h-0 w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {% include recommendations/reprtoir/dominique.html %}
        {% include recommendations/reprtoir/steve.html %}
        {% include recommendations/reprtoir/aurelien.html %}
        {% include recommendations/reprtoir/nathan.html %}
      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-700">
  <div class="flex space-x-2">
    <a href="https://firstrubyfriend.org" class="w-16 h-16">
      <img src="/assets/images/resume/first_ruby_friend_logo.svg" alt="First Ruby Friend Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Volunteer Programming Mentor - First Ruby Friend</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">Mars 2023 - Present</span>
    </div>
  </div>

  <p class="mt-2">Delivering impactful mentorship to individuals, including students and professionals transitioning into programming.</p>

  <div>
    <details class="mt-2 peer" aria-describedby="first-ruby-friend-key-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <ul id="first-ruby-friend-key-contributions" class="min-h-0">
        <li>
          Tailored Guidance:
          <ul>
            <li>Customize my mentorship to align with the unique needs and aspirations of each mentee.</li>
            <li>Perform initial assessments to gauge their existing skill levels, strengths, and areas for growth.</li>
          </ul>
        </li>
        <li>
          Development of Technical Skills:
          <ul>
            <li>Furnish practical guidance on programming languages, frameworks, and tools pertinent to their selected career paths.</li>
            <li>Present coding exercises, projects, and real-world instances to enhance hands-on skills.</li>
            <li>Share industry best practices and uphold coding standards..</li>
          </ul>
        </li>
        <li>
          Collaboration on Projects:
          <ul>
            <li>Foster teamwork on real-world projects to replicate professional experiences.</li>
            <li>Provide constructive feedback aimed at refining code quality and problem-solving abilities.</li>
          </ul>
        </li>
        <li>
          Guidance for Career Advancement:
          <ul>
            <li>Aid in the creation of resumes, portfolios, and optimization of LinkedIn profiles.</li>
            <li>Provide insights into the job market, industry trends, and sought-after skills.</li>
            <li>Conduct mock interviews and furnish feedback to enhance interview performance.</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="first-ruby-friend-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="first-ruby-friend-skills" class="min-h-0">
        <p>Ruby · Ruby on Rails · Javascript · SQL</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="first-ruby-friend-recommendations">
      <summary role="button">Recommendations</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-4 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="first-ruby-friend-recommendations" class="min-h-0 w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {% include recommendations/first_ruby_friend/nikolaz.html %}
      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[0.8s]">
  <div class="flex space-x-2">
    <a href="https://www.smalldoorvet.com/" class="w-16 h-16">
      <img src="/assets/images/resume/smalldoor_logo.webp" alt="Small Door Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Lead Developer - Small Door Veterinary</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">January 2021 - July 2021</span>
    </div>
  </div>

  <p class="mt-2">As part of my role overseeing the maintenance and feature development of web and mobile apps, I facilitated the shift in the company's product development strategy. We transitioned from relying on external consultants for a single veterinary practice to establishing an internal team of diverse specialists, serving multiple practices across various regions.</p>

  <div>
    <details class="block mt-2 peer" aria-describedby="small-door-key-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="small-door-key-contributions" class="min-h-0">
        <p>Noteworthy contributions include my involvement in recruiting the Head of Product and Technology, along with two seasoned software developers.</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="small-door-technical-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="small-door-technical-skills" class="min-h-0">
        <p>Leading Development Teams · Ruby on Rails · Postgres · React.js · React Native · Amazon Web Services</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="small-door-recommendations">
      <summary role="button">Recommendations</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-4 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="small-door-recommendations" class="flex min-h-0">
        {% include recommendations/small_door/edward.html %}
      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[0.9s]">
  <div class="flex space-x-2">
    <a href="https://www.braidio.com" class="w-16 h-16">
      <img src="/assets/images/resume/braidio_logo.webp" alt="Braidio Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Senior Developer - Braidio</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">February 2019 - January 2021</span>
    </div>
  </div>

  <p class="mt-2">I had the opportunity to work with ShaShee Interactive Networks, an American company that created Braidio, a project management software.</p>

  <div>
    <details class="block mt-2 peer" aria-describedby="braidio-key-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="braidio-key-contributions" class="min-h-0">
        <p>During my tenure at Braidio, I worked as a contractor, collaborating with a distributed team of exceptionally skilled developers. Our primary focus encompassed the integration of third-party apps, development of innovative features, reinforcement of data protection measures, and overall improvement of the code base.</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="braidio-technical-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="braidio-technical-skills" class="min-h-0">
        <p>Ruby on Rails · React.js · Postgres · React Native · Live Video Streaming</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="braidio-recommendations">
      <summary role="button">Recommendations</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-4 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="braidio-recommendations" class="min-h-0 w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {% include recommendations/braidio/trip.html %}
        {% include recommendations/braidio/elliott.html %}
      </div>
    </div>
  </div>

</section>

<section class="my-8 animate-slide-in-from-left animation-duration-1000">
  <div class="flex space-x-2">
    <a href="https://www.myjobglasses.com" class="w-16 h-16">
      <img src="/assets/images/resume/my_job_glasses_logo.webp" alt="My Job Glasses Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Web Developer - My Job Glasses</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">July 2017 - December 2017</span>
    </div>
  </div>

  <p class="mt-2">My Job Glasses, founded in November 2015, aims to redefine networking between students and professionals in Europe. The goal is to assist students in finding their dream job while helping professionals save time and money by connecting with the right profiles. This is facilitated through a user-friendly web platform that empowers everyone to build their professional network.</p>

  <div>
    <details class="block mt-2 peer" aria-describedby="my-job-glasses-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="my-job-glasses-contributions" class="min-h-0 space-y-2">
        <p>During my tenure as a full-stack web developer, predominantly utilizing Ruby-on-Rails and React, I played a pivotal role in several key initiatives:</p>
        <ul>
          <li>Successfully launched V2, encompassing both back and front ends.</li>
          <li>Introduced a KANBAN workflow within the tech team.</li>
          <li>Implemented effective inter-team processes within the company.</li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="my-job-glasses-technical-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="my-job-glasses-technical-skills" class="min-h-0 space-y-2">
        <p>Ruby on Rails · React.js · MongoDB · Amazon Web Services</p>
      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[1.1s]">
  <div class="flex space-x-2">
    <a href="https://www.captaincontrat.com" class="w-16 h-16">
      <img src="/assets/images/resume/captain_contrat_logo.webp" alt="Captain Contrat Logo" class="w-full aspect-square rounded object-cover" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Web Developer - Captain Contrat</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">January 2015 - July 2017</span>
    </div>
  </div>

  <p class="mt-2">Captain Contrat, a transformative startup, is committed to empowering entrepreneurs with an economical web solution, facilitating the creation of robust and legally sound documents for establishing companies and job positions. Simultaneously, it serves as a valuable tool for lawyers, offering an integrated web app to enhance their efficiency and connectivity with entrepreneurs.</p>

  <div>
    <details class="block mt-2 peer" aria-describedby="captain-contrat-contributions">
      <summary role="button">Key Contributions</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="captain-contrat-contributions" class="min-h-0 space-y-2">
        <p>Joining this dynamic startup in January 2015, I witnessed significant growth over my two and a half years tenure. The team expanded from three co-founders and a handful of interns to a thriving unit of 34 employees, securing 1 million euros in fundraising.</p>
        <p>During my tenure at Captain Contrat, I played a major role in the following initiatives:</p>

        <ul>
          <li>Implemented and maintained various features, enriching the main app with functionalities such as appointment scheduling and customized dashboards for customers and lawyer partners.</li>
          <li>Developed an automated invoicing service seamlessly integrated into the main business workflow.</li>
          <li>Established and maintained a customer service dashboard for the Customer Success Team.</li>
          <li>Nurtured the company's internal culture and values, drawing inspiration from the principles of Tony Hsieh.</li>
          <li>Enhanced the Technical team's workflow by implementing a methodology inspired by both Agile and Lean philosophies.</li>
          <li>Conducted numerous training workshops on internal tool best practices and technical skills.</li>
          <li>Successfully recruited and mentored a student who has since flourished in a rewarding career as a Rails developer.</li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="captain-contrat-technical-skills">
      <summary role="button">Technical Skills</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-2 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="captain-contrat-technical-skills" class="min-h-0 space-y-2">
        <p>Ruby on Rails · Javascript · MySQL · Postgres · Amazon Web Services</p>
      </div>
    </div>
  </div>

  <div>
    <details class="block mt-2 peer" aria-describedby="captain-contrat-recommendations">
      <summary role="button">Recommendations</summary>
    </details>
    <div class="grid grid-rows-[0fr] peer-open:mt-4 peer-open:grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-200">
      <div id="captain-contrat-recommendations" class="min-h-0 w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {% include recommendations/captain_contrat/pierre.html %}
        {% include recommendations/captain_contrat/manon.html %}
        {% include recommendations/captain_contrat/yannick.html %}
      </div>
    </div>
  </div>
</section>
