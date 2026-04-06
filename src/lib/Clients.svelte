<script>
  const logos = [
    { alt: 'Lovable' },
    { alt: 'Menlo' },
    { alt: 'Clay' },
    { alt: 'Mercury' },
    { alt: 'Groupon' },
    { alt: 'Vercel', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png' },
    { alt: 'Replit' },
    { alt: 'Nuuly' },
    { alt: 'Warp' },
    { alt: 'Rivian' },
    { alt: 'Notion' },
    { alt: 'Substack' },
    { alt: 'Amazon', src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png' },
    { alt: 'Strava' },
    { alt: 'Nvidia' },
  ];
</script>

<section class="section_home-clients">
  <div class="padding-global">
    <div class="spacer-huge"></div>
    <div class="container-large">
      <h3 class="heading-style-h4 text-color-secondary">
        You got into this for the dogs — not the admin. Genera handles the rest.<br />
      </h3>
    </div>
  </div>
  <div class="spacer-large"></div>

  <!-- Marquee strip (repeated 4 times for seamless loop) -->
  <div class="marquee_wrapper">
    {#each [0, 1, 2, 3] as _}
      <div class="clients_cms-wrapper marquee-scroll w-dyn-list">
        <div role="list" class="clients_cms-list w-dyn-items">
          {#each logos as logo}
            <div role="listitem" class="clients_cms-item w-dyn-item">
              <img
                src={logo.src ?? 'https://placehold.co/120x40/eee/888?text=' + encodeURIComponent(logo.alt)}
                alt={logo.alt}
                class="clients_logo-image"
              />
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <div class="code-embed w-embed">
      <style>
        .clients_cms-wrapper {
          animation: logoTicker1 60s linear infinite;
        }
        @keyframes logoTicker1 {
          from { transform: translateX(0%); }
          to   { transform: translateX(-100%); }
        }
        @media (min-width:992px) {
          .clients_logo-image[alt="Clay"]  { max-width: 5rem; }
          .clients_logo-image[alt="Nuuly"] { max-width: 7rem; }
        }
        @media (max-width:991px) {
          .clients_logo-image[alt="Clay"]  { max-width: 4rem; }
          .clients_logo-image[alt="Nuuly"] { max-width: 6rem; }
        }
      </style>
    </div>
  </div>

  <div class="padding-global text-align-left">
    <div class="container-large">
      <div class="spacer-xxlarge"></div>
    </div>
  </div>
</section>
