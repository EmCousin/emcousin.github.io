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
    <a href="https://reprtoir.com" class="w-16 h-16">
      <img src="/assets/images/resume/reprtoir_logo.webp" alt="Reprtoir Logo" class="w-full aspect-square rounded" />
    </a>
    <div>
      <h3 class="md:text-lg font-bold">Senior Software Engineer - Rendez-Vous Digital</h3>
      <span class="text-sm text-gray-600 dark:text-gray-300">July 2021 - Present</span>
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
        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/dominiquerottet/">
              <img src="/assets/images/recommendations/dominique.webp" alt="Dominique's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/dominiquerottet/">Dominique Rottet</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">CEO at Reprtoir</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                As CEO of Reprtoir, I worked daily with Emmanuel, who excels as a full-stack developer. His problem solving, commitment to quality and hard work on Reprtoir have been crucial to us. Emmanuel stands out for his seriousness, intelligence and listening ability, making him a trusted collaborator and an invaluable asset for our team. I highly recommend Emmanuel to any company looking for a competent and reliable developer.
              </em></p>
            </div>
          </blockquote>
        </div>

        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/verlindensteve/">
              <img src="/assets/images/recommendations/steve.webp" alt="Steve's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/verlindensteve/">Steve Verlinden</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">CTO at Reprtoir</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                I highly recommend Emmanuel as a skilled Ruby on Rails developer. During our time working together, I was continually impressed by his deep understanding of both the Ruby language and the Rails framework. His ability to tackle complex problems and deliver high-quality solutions made him a valuable asset to our team. Emmanuel's dedication to continuous learning and his strong work ethic make him an excellent choice for any Ruby on Rails project.
              </em></p>
            </div>
          </blockquote>
        </div>

        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/malisart/">
              <img src="/assets/images/recommendations/aurelien.webp" alt="Aurelien's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/malisart/">Aurélien Malisart</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Fullstack Rubyist at Phonoid</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel was able to find his way into our large Ruby/Rails/React codebase quite smoothly.
                He has a solid knowledge of web technologies and was therefore able to contribute to existing and new projects of ours. He managed to adapt to new elements of our stack that he wasn’t using before and suggest relevant technologies when needed.
              </em></p>
            </div>
          </blockquote>
        </div>

        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/nathanpolachini/">
              <img src="/assets/images/recommendations/nathan.webp" alt="Nathan's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/nathanpolachini/">Nathan Polachini</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Sales Representative & Support at Reprtoir</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                I had the pleasure of working with Emmanuel at Reprtoir, and it was an excellent experience. Even though being in different teams, our relationship was always spot-on, thanks to Emmanuel's professionalism. He was always available, attentive, efficient, and clear with the resolutions. Made sure we were always in the loop with updates. Emmanuel's reliability and professionalism made him a great colleague to work with.
              </em></p>
            </div>
          </blockquote>
        </div>

      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[0.6s]">
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
        <div class="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/nikolaz-s/">
              <img src="/assets/images/recommendations/nikolaz.webp" alt="Nikolaz's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/nikolaz-s/">Nikolaz S.</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Web developer</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel is an exceptional mentor. He is an expert in web development and has a keen ability to breakdown complex concepts, whether that is in Ruby, JavaScript, a framework or in a broader sense, as a business minded developer.
                <br />
                Over the past year we have worked on a variety of topics, and Emmanuel has been a dedicated and empathetic teacher, always making time even with a busy workload.
                <br />
                He is particularly good at assessing priorities within any given context whilst keeping a cool head at all times. It's a pleasure to recommend him!
              </em></p>
            </div>
          </blockquote>
        </div>

      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-700">
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
        <div class="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/edelangen/">
              <img src="/assets/images/recommendations/edward.webp" alt="Edward's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/edelangen/">Edward De Langen</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Vice President, Product and Technology</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel is a talented developer with a sharp and rapid analytical mind. He is solution-oriented and will quickly find a solution to whichever technical predicament you find yourself in. Emmanuel can deliver quality output in a short amount of time while still considering broader implications such as maintainability and architecture. He's not the type of developer to fall for the technological fad of the week. He stays current and understands the advantages and disadvantages of recent frameworks and how they can help but more importantly sometimes hinder a company's objectives. His input is always well thought out and insightful. I truly respect his work ethic and capabilities and would gladly work with him again.
              </em></p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[0.8s]">
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
        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/trip-shanti-b38ba257/">
              <img src="/assets/images/recommendations/trip.webp" alt="Trip's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/trip-shanti-b38ba257/">Trip Shanti</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Head of Product and Technology at Braidio</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel is an all inclusive think tank. Not only is his code acumen above and beyond my expectations of a senior developer, but his velocity is unparalleled to anyone I have ever worked with before. Whether it is a remedial task, or one of utmost importance, Emmanuel brings to the table a seasoned and professional attitude constantly nurturing welfare of stakeholder’s vision against the reality of code. There are very few people I can hold to such a standard.
              </em></p>
            </div>
          </blockquote>
        </div>

        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/edraper/">
              <img src="/assets/images/recommendations/elliott.webp" alt="Elliott's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/edraper/">Elliott Draper</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Senior Software Engineer at Braidio</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel is a smart, pleasant, and self-motivated developer, who is a brilliant addition to any team. He combines experience with outside-the-box thinking to approach both business and technical problems with workable solutions. Letting him loose on a task is as good as knowing it's done already - and that the end result is going to be efficient, maintainable and scalable. A pleasure to work with.
              </em></p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

</section>

<section class="my-8 animate-slide-in-from-left animation-duration-[0.9s]">
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

<section class="my-8 animate-slide-in-from-left animation-duration-1000">
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
        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/pierregielen/">
              <img src="/assets/images/recommendations/pierre.webp" alt="Pierre's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/pierregielen/">Pierre Gielen</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Former CTO at Captain Contrat</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel is dedicated and passionate! As the company's first salaried developer, his energy has propelled us far and improved various business processes. He is interested in the business aspect of the project and effortlessly communicates about the product in addition to the technical details. From the beginning, we entrusted him with the development of a complete product, from conception to launch. He knows how to allocate resources effectively to achieve the goal and ensure successful results. He will be the Swiss army knife for your projects, capable of intervening throughout the entire production chain, from conception to the launch of your services.
              </em></p>
            </div>
          </blockquote>
        </div>

        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/mbudin/">
              <img src="/assets/images/recommendations/manon.webp" alt="Manon's Avatar" class="w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/mbudin/">Manon Budin</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Former Software Engineer at Captain Contrat</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel was my internship supervisor during my first web experience in a company.
                He was attentive and instructive throughout my time at Captain Contrat, allowing me to make significant progress and become independent quickly.
                Emmanuel is curious, always seeking better solutions and exploring new technologies, and his expertise continually evolves. His curiosity extends to other aspects of the project, and he has consistently been a great help during non-technical meetings.
                I highly recommend Emmanuel; he is a passionate mentor and colleague who is always eager to advance the projects he works on.
              </em></p>
            </div>
          </blockquote>
        </div>

        <div class="w-full snap-center shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow rounded-lg p-4">
          <div class="flex space-x-2 mb-4">
            <a href="https://www.linkedin.com/in/yannickfonjallaz/">
              <img src="/assets/images/recommendations/avatar-placeholder.svg" alt="Yannick's Avatar" class="bg-white w-12 h-12 rounded-full object-cover" />
            </a>
            <div>
              <h3 class="font-medium"><a class="visited:text-current" href="https://www.linkedin.com/in/yannickfonjallaz/">Yannick Fonjallaz</a></h3>
              <span class="text-sm text-gray-600 dark:text-gray-300">Lead Software Engineer at Captain Contrat</span>
            </div>
          </div>

          <blockquote class="relative mt-6">
            <div class="absolute -top-6 -start-2 text-gray-100 dark:text-gray-700">
              {% include icons/quote.html %}
            </div>

            <div class="relative z-10 px-2">
              <p class="text-gray-800 dark:text-slate-50 indent-4"><em>
                Emmanuel is someone passionate, honest, with a great deal of empathy, and a good sense of humor. He impresses with his speed of execution and deduction. Thanks to his solid knowledge of various agile methodologies and best practices, he will not only advise you but also implement processes tailored to your needs. I highly recommend him for your projects!
              </em></p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
