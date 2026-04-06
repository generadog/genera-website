<script>
  const testimonials = [
    {
      quote: "You're making texting actually delightful right now! Can see it becoming a can't live without product fast.",
      author: "Tara Tan, Founding Partner at Strange Ventures",
      img: "https://placehold.co/56x56/eee/888?text=TT",
    },
    {
      quote: "This is the best AI product I've used since ChatGPT.",
      author: "Rahul Vohra, CEO, Superhuman",
      img: "https://placehold.co/56x56/eee/888?text=RV",
    },
    {
      quote: "I've been using Genera almost every day since I downloaded it. It's probably my favorite part of the day, especially at the end when I go through my inbox with Genera.",
      author: "Suzanne Xie, Partner, Neo",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png",
    },
    {
      quote: "I can make quick edits while speaking to it because Genera really understands me perfectly and can make the necessary changes. Genera's accuracy and speed make it a real game changer.",
      author: "Shashank Vemuri, Scout at Soma Capital",
      img: "https://placehold.co/56x56/eee/888?text=SV",
    },
    {
      quote: "I have Parkinson's, and this app has just made my life so much easier using my Mac. I can't even explain the change that it has provided for me.",
      author: "Rich Pankey, Indirect Sourcing Manager",
      img: "https://placehold.co/56x56/eee/888?text=RP",
    },
    {
      quote: "Hey! Genera is currently blowing my mind with how fast and useful it is!",
      author: "Hargun Mujral, ML Platforms at X",
      img: "https://placehold.co/56x56/eee/888?text=HM",
    },
    {
      quote: "I was able to manage ~70% of our Q2 board doc with Genera, it was a massive time saver!",
      author: "Jeff Seibert, CEO, Digits AI",
      img: "https://placehold.co/56x56/eee/888?text=JS",
    },
    {
      quote: "Genera is that extra little part of your brain that helps you formulate full sentences when you might be stuck in thought.",
      author: "Jeannette Tan, Fiction Writer",
      img: "https://placehold.co/56x56/eee/888?text=JT",
    },
    {
      quote: "Stuttering and it still works really well. I think it's really quick, I love it.",
      author: "Agam Walia, Student, UC Berkeley",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png",
    },
    {
      quote: "I'm afraid I'm getting addicted to this great platform. It allows me to get into a Genera state and not have autocorrect or daycare software stop and interrupt me while I'm attempting to articulate my ideas.",
      author: "Greg Dickson, Bestselling Author and Business Coach",
      img: "https://placehold.co/56x56/eee/888?text=GD",
    },
  ];
</script>

<section class="section_testimonials">
  <div class="padding-global">
    <div class="padding-top padding-section-medium">
      <div class="container-small">
        <div class="testimonials_header">
          <h2 class="testimonials_heading hide-tablet">Love letters <br />to Genera</h2>
          <div class="show-tablet">
            <h2 class="testimonials_heading">Genera love</h2>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 785 525" fill="none" class="testimonials_svg">
            <path d="M383 2V102" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M546 101C546 75.8565 559.025 53.3813 563 29" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M634 138C644.156 128.056 655.728 119.802 666.185 110.183C669.924 106.743 675.729 103.675 678 99" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M706 253C716.647 253 728.358 246.026 737.807 242C748.683 237.366 759.454 233.08 770.029 227.877C773.23 226.301 781.482 222.987 783 220" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M722 381C742.831 381.982 794.123 420.282 779.376 405.688" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M583 401V458" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M411 418C411 449.023 410.603 479.983 410 511" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M250 438C229.974 458.141 212.54 480.596 192.138 500.5C186.12 506.371 173.245 523 163 523" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M77 386C52.0274 393.096 27.0333 400.106 2 407" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M113 273C88.7129 260.066 68.3931 241.333 45.9359 225.722C35.4663 218.445 24.885 211.318 14.2052 204.344C11.5236 202.594 8.69889 201.52 7 199" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
            <path d="M226 128C219.65 120.591 213.451 109.47 210.933 99.8586C210.17 96.9432 210.384 87.264 208 86" stroke="#034F46" stroke-width="4" stroke-linecap="round"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Scrolling testimonial cards -->
  <div class="testimonials_cards-wrap less-top-margin splide">
    <div class="testimonials_list-wrapper marquee-scroll splide__track w-dyn-list">
      <div role="list" class="testimonials_list marquee-track splide__list center-align-vertical w-dyn-items">
        {#each testimonials as t}
          <div role="listitem" class="testimonials_list-item marquee-item splide__slide w-dyn-item">
            <img src={t.img} loading="lazy" alt="" class="testimonials_dp" />
            <div class="text-size-large">{t.quote}</div>
            <div class="w-embed">
              <div class="text-size-small">{t.author}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="spacer-large"></div>

  <!-- Case study cards -->
  <div class="padding-global">
    <div class="container-large">
      <div class="use-cases_grid">
        <a cta_type="gaurav_cs" cta="" cta_location="homepage" href="/case-study/gaurav-vohra" class="use-cases_card v2 w-inline-block">
          <div class="use-cases_header-wrapper">
            <div class="use-cases_header">
              <div class="heading-style-h3 text-color-tertiary">Book in seconds</div>
              <img src="https://placehold.co/24x24/eee/888?text=→" loading="lazy" alt="" class="use-cases_arrow-icon" />
            </div>
            <div class="text-size-large">Routes planned in minutes, not hours.</div>
          </div>
          <div class="use-cases_author-wrap">
            <img src="https://placehold.co/48x48/eee/888?text=GV" alt="" class="use-cases_author-headshot" />
            <div>
              <div>Gaurav Vohra</div>
              <div class="spacer-xxsmall"></div>
              <div class="text-style-muted">Startup Advisor &amp; Growth Leader</div>
            </div>
          </div>
        </a>

        <a cta_type="greg_cs" cta="" cta_location="homepage" href="/case-study/tracking-a-book-with-flow" class="use-cases_card v2 w-inline-block">
          <div class="use-cases_header-wrapper">
            <div class="use-cases_header">
              <div class="heading-style-h3 text-color-tertiary">20+ hours saved every week</div>
              <img src="https://placehold.co/24x24/eee/888?text=→" loading="lazy" alt="" class="use-cases_arrow-icon" />
            </div>
            <div class="text-size-large">Drag-and-drop transport scheduling with optimised routes for your drivers. No more scrambling on collection day.</div>
          </div>
          <div class="use-cases_author-wrap">
            <img src="https://placehold.co/48x48/eee/888?text=GD" alt="" class="use-cases_author-headshot" />
            <div>
              <div>Greg Dickson</div>
              <div class="spacer-xxsmall"></div>
              <div class="text-style-muted">Author</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="padding-bottom padding-section-large"></div>
  </div>
</section>
