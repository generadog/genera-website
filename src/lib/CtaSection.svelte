<script>
  const R = 3.8;
  const paws = [
    { x: 8,  y: 30, rot: 80,  delay: 0       },
    { x: 5,  y: 55, rot: 100, delay: 0.15    },
    { x: 20, y: 50, rot: 100, delay: 0.5     },
    { x: 17, y: 25, rot: 80,  delay: 0.65    },
    { x: 32, y: 20, rot: 80,  delay: 1.0     },
    { x: 29, y: 45, rot: 100, delay: 1.15    },
    { x: 44, y: 40, rot: 100, delay: 1.5     },
    { x: 41, y: 15, rot: 80,  delay: 1.65    },
    { x: 56, y: 10, rot: 80,  delay: 2.0     },
    { x: 53, y: 35, rot: 100, delay: 2.15    },
    { x: 68, y: 30, rot: 100, delay: 2.5     },
    { x: 65, y: 5,  rot: 80,  delay: 2.65    },
    { x: 64, y: 6,  rot: 260, delay: R       },
    { x: 67, y: 31, rot: 280, delay: R + 0.15},
    { x: 52, y: 36, rot: 280, delay: R + 0.5 },
    { x: 55, y: 11, rot: 260, delay: R + 0.65},
    { x: 40, y: 16, rot: 260, delay: R + 1.0 },
    { x: 43, y: 41, rot: 280, delay: R + 1.15},
    { x: 28, y: 46, rot: 280, delay: R + 1.5 },
    { x: 31, y: 21, rot: 260, delay: R + 1.65},
    { x: 16, y: 26, rot: 260, delay: R + 2.0 },
    { x: 19, y: 51, rot: 280, delay: R + 2.15},
    { x: 4,  y: 56, rot: 280, delay: R + 2.5 },
    { x: 7,  y: 31, rot: 260, delay: R + 2.65},
  ];
</script>

<section data-wf--pre-cta--variant="home" class="section_startflowing">
  <img src="/dogs/623426368_18056750699355570_8463801854914326260_n.webp" alt="" class="cta_bg" />

  <!-- Small paw print trail -->
  <div class="paw-trail" aria-hidden="true">
    {#each paws as paw}
      <div
        class="paw-wrapper"
        style="--rot: {paw.rot}deg; left: {paw.x}%; top: {paw.y}%; animation-delay: {paw.delay}s;"
      >
        <img src="/genera-logo.svg" alt="" />
      </div>
    {/each}
  </div>

  <div class="padding-global padding-section-large">
    <div class="cta_content-wrap">
      <div class="cta_content">
        <div class="text-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 524 615" fill="none" preserveAspectRatio="none" class="cta_svg">
            <path d="M0.391602 319.953C359.892 319.953 412.294 -6.54721 244.392 1.45428C95.409 8.55414 -47.1084 513.452 522.892 612.952C646.17 634.931 943.303 651.895 1145.61 543.915" id="curve-cta"></path>
          </svg>
          <h2 class="heading-style-h1">Let us handle the rest</h2>
        </div>
        <div class="spacer-xlarge"></div>
        <div class="spacer-xlarge"></div>
        <div class="cta_content-wrap-inside">
          <p class="text-size-large text-weight-semibold text-wrap-balance">
            Effortless Daycare Management in every application: Running a daycare is harder than it looks., auto-billing and reminders.
          </p>
          <div class="spacer-medium"></div>
          <div class="button-group">
            <a web-demo-open="" cta="" cta_location="bottom_cta_section" cta_type="try_flow" href="/demo" class="button is-icon is-secondary w-inline-block">
              <img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68335d5ca4a30e3a678bf92d_mic-icon.svg" loading="lazy" alt="" class="icon-1x1-small" />
              <div web-demo-text="">Book a Demo</div>
            </a>
            <a app-download="" cta="" cta_location="bottom_cta_section" cta_type="download" href="/get-started" class="button w-button">Start Free Trial</a>
          </div>
          <div>
            <div class="spacer-medium"></div>
            <div class="text-size-small">Available on Mac, Windows, iOS, and Android</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section_startflowing {
    position: relative;
    overflow: hidden;
  }

  .paw-trail {
    position: absolute;
    inset: 0;
    pointer-events: none;
    user-select: none;
    overflow: hidden;
    z-index: 1;
  }

  .paw-wrapper {
    position: absolute;
    width: 20px;
    transform: rotate(var(--rot));
    opacity: 0;
    animation: paw-appear 10s infinite;
    will-change: opacity, transform;
  }

  .paw-wrapper img {
    width: 100%;
    height: auto;
    display: block;
  }

  @keyframes paw-appear {
    0%   { opacity: 0;    transform: rotate(var(--rot)) scale(0.5); }
    4%   { opacity: 0.2;  transform: rotate(var(--rot)) scale(1.1); }
    8%   { opacity: 0.18; transform: rotate(var(--rot)) scale(1);   }
    14%  { opacity: 0.15; transform: rotate(var(--rot)) scale(1);   }
    22%  { opacity: 0;    transform: rotate(var(--rot)) scale(1);   }
    100% { opacity: 0;    transform: rotate(var(--rot)) scale(1);   }
  }
</style>
