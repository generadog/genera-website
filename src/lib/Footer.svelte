<script>
  // Arrow SVG path reused across all footer links
  const arrowPath = "M7.30209 4.39387C5.58154 4.37997 3.86103 4.36522 2.14057 4.34963C1.79759 4.34582 1.45417 4.31894 1.11266 4.28535C1.05617 4.27926 1.00284 4.25627 0.959627 4.21939C0.916414 4.18251 0.88533 4.13345 0.870437 4.07863C0.842351 3.99082 0.939919 3.86619 1.05679 3.84791C1.16971 3.83011 1.2821 3.80265 1.39573 3.79577C2.12069 3.75198 2.84552 3.68968 3.57115 3.67664C5.06198 3.65002 6.55317 3.64309 8.04409 3.64158C9.45874 3.63994 10.8733 3.65774 12.2882 3.66093C12.5152 3.66146 12.7424 3.63267 12.9693 3.61257C12.9844 3.60886 12.9982 3.60144 13.0097 3.59097C13.0211 3.5805 13.0297 3.56733 13.0347 3.55267C13.0388 3.51762 13.0288 3.45878 13.0052 3.44595C12.5704 3.2096 12.1412 2.96113 11.694 2.75006C10.6541 2.2595 9.67872 1.65767 8.70364 1.05423C8.54347 0.955023 8.37557 0.854219 8.31084 0.65726C8.29908 0.621454 8.28076 0.560097 8.29575 0.548117C8.34922 0.498263 8.4142 0.462417 8.4849 0.443795C8.5602 0.434903 8.6365 0.447087 8.70529 0.478984C8.94883 0.589421 9.19069 0.70447 9.42749 0.828484C11.1214 1.71282 12.8125 2.60248 14.5075 3.48451C15.147 3.8172 15.4508 4.13955 14.6833 4.87064C14.4621 5.08139 14.2384 5.29192 13.998 5.47948C12.8828 6.34954 11.7636 7.21439 10.6403 8.07401C10.4859 8.18478 10.323 8.28331 10.1532 8.36871C10.0424 8.42883 9.93159 8.39317 9.83597 8.32107C9.73072 8.24173 9.66536 8.01096 9.7017 7.90948C9.78232 7.68422 9.94289 7.51894 10.1154 7.36928C10.7796 6.79313 11.449 6.22298 12.1186 5.65327C12.555 5.28207 12.9957 4.91656 13.4313 4.54474C13.4528 4.52633 13.4537 4.46908 13.4451 4.43514C13.4393 4.42033 13.4301 4.40713 13.4181 4.39669C13.4061 4.38625 13.3918 4.37888 13.3763 4.3752C13.1485 4.36038 12.9206 4.34125 12.6927 4.34245C10.8957 4.35189 9.09869 4.36372 7.30168 4.37795L7.30209 4.39387Z";

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Trust Center', href: 'https://trust.wispr.ai/', external: true },
    { label: 'Become an Affiliate', href: 'https://partners.dub.co/flow', external: true },
    { label: 'Media Kit', href: '/media-kit' },
  ];

  const productLinks = [
    { label: "What's New", href: '/whats-new' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Veterinarians', href: '/students' },
    { label: 'Genera for Non-Profits', href: '/for-non-profits' },
    { label: 'Genera for Android', href: '/android' },
  ];

  const resourceLinks = [
    { label: 'WorkGeneras', href: '/workflows' },
    { label: 'Vibe Coding', href: '/vibe-coding' },
    { label: 'Talk to Support', href: '/support' },
    { label: 'Talk to Sales', href: '/talk-to-sales', typeform: true },
    { label: 'Help Center', href: 'https://docs.wisprflow.ai/', external: true },
  ];

  const currentYear = new Date().getFullYear();
</script>

<div data-wf--footer-combined--variant="base" class="section_footer-wrapper">
  <footer class="section_footer">
    <div class="padding-global">
      <div class="container-large">
        <div class="footer_flex-links">

          <!-- Company -->
          <div class="footer_flex_inner">
            <h3 class="heading-style-h4 text-color-black50">Company</h3>
            <div class="footer_nav-links-wrap">
              {#each companyLinks as link}
                <a
                  href={link.href}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  target={link.external ? '_blank' : undefined}
                  class="footer_link-block w-inline-block"
                >
                  <div>{link.label}</div>
                  <div class="icon-embed-xxsmall w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 9" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <path d={arrowPath} fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
              {/each}
            </div>
          </div>

          <!-- Product -->
          <div class="footer_flex_inner">
            <h3 class="heading-style-h4 text-color-black50">Product</h3>
            <div class="footer_nav-links-wrap">
              {#each productLinks as link}
                <a href={link.href} class="footer_link-block w-inline-block">
                  <div>{link.label}</div>
                  <div class="icon-embed-xxsmall w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 9" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <path d={arrowPath} fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
              {/each}
            </div>
          </div>

          <!-- Resources -->
          <div class="footer_flex_inner">
            <h3 class="heading-style-h4 text-color-black50">Resources</h3>
            <div class="footer_nav-links-wrap">
              {#each resourceLinks as link}
                <a
                  href={link.href}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  target={link.external ? '_blank' : undefined}
                  typeform-open={link.typeform ? '' : undefined}
                  class="footer_link-block w-inline-block"
                >
                  <div>{link.label}</div>
                  <div class="icon-embed-xxsmall w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 9" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <path d={arrowPath} fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
              {/each}
            </div>
          </div>

        </div>

        <!-- Footer logo & copyright -->
        <div class="footer_logo">
          <div>
            <div
              id="footer-lottie"
              data-is-ix2-target="1"
              class="footer_lottie"
              data-animation-type="lottie"
              data-src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/683a875030ccb710048ea251_Flow%20-%20Footer%20icon.lottie"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-duration="0"
              data-ix2-initial-state="0"
            ></div>
          </div>
          <img src="https://placehold.co/120x32/eee/888?text=Genera" alt="" class="footer_logo-text" />
        </div>

        <div class="footer_copyright-div">
          <div footer-legal-links="">
            <div class="footer_copyright-content">
              <div class="text-block">© Genera {currentYear}</div>
              <div class="footer_copyright-links-wrap">
                <a href="/terms-of-service" class="footer_link-block is-legal w-inline-block"><div>Terms</div></a>
                <a href="/privacy-policy" class="footer_link-block is-legal w-inline-block"><div>Privacy</div></a>
                <a href="/data-controls" class="footer_link-block is-legal w-inline-block"><div>Data Controls</div></a>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="footer_socials-content">
            <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzaXlOt3J2_rYQT1aEJMMFQ/videos?sub_confirmation=1" target="_blank" class="footer_social-link w-inline-block">
              <div class="footer_social-icons w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0657 4.77345C22.0134 5.02692 22.7526 5.76903 23.0089 6.71673C23.6792 9.42042 23.6356 14.5321 23.023 17.278C22.7695 18.2257 22.0274 18.965 21.0797 19.2213C18.4042 19.8831 6.42063 19.8015 3.90001 19.2213C2.95231 18.9678 2.21302 18.2257 1.95673 17.278C1.32446 14.7011 1.36811 9.25144 1.94265 6.73081C2.19612 5.78311 2.93823 5.04382 3.88593 4.78753C7.46268 4.0412 19.7927 4.282 21.0657 4.77345ZM10.3639 8.70227L16.1093 11.9974L10.3639 15.2925V8.70227Z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
            <a rel="noopener noreferrer" href="https://www.instagram.com/wisprflow/" target="_blank" class="footer_social-link w-inline-block">
              <div class="footer_social-icons w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4971 3H8.49707C5.73565 3 3.49707 5.23858 3.49707 8V16C3.49707 18.7614 5.73565 21 8.49707 21H16.4971C19.2585 21 21.4971 18.7614 21.4971 16V8C21.4971 5.23858 19.2585 3 16.4971 3ZM19.7471 16C19.7416 17.7926 18.2897 19.2445 16.4971 19.25H8.49707C6.70442 19.2445 5.25256 17.7926 5.24707 16V8C5.25256 6.20735 6.70442 4.75549 8.49707 4.75H16.4971C18.2897 4.75549 19.7416 6.20735 19.7471 8V16ZM17.2471 8.25C17.7994 8.25 18.2471 7.80228 18.2471 7.25C18.2471 6.69772 17.7994 6.25 17.2471 6.25C16.6948 6.25 16.2471 6.69772 16.2471 7.25C16.2471 7.80228 16.6948 8.25 17.2471 8.25ZM12.4971 7.5C10.0118 7.5 7.99707 9.51472 7.99707 12C7.99707 14.4853 10.0118 16.5 12.4971 16.5C14.9824 16.5 16.9971 14.4853 16.9971 12C16.9998 10.8057 16.5265 9.65957 15.682 8.81508C14.8375 7.97059 13.6914 7.49734 12.4971 7.5ZM9.74707 12C9.74707 13.5188 10.9783 14.75 12.4971 14.75C14.0159 14.75 15.2471 13.5188 15.2471 12C15.2471 10.4812 14.0159 9.25 12.4971 9.25C10.9783 9.25 9.74707 10.4812 9.74707 12Z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
            <a rel="noopener noreferrer" href="https://x.com/wisprflow" target="_blank" class="footer_social-link w-inline-block">
              <div class="footer_social-icons w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <path d="M17.6732 4H20.4333L14.4032 10.7774L21.4971 20H15.9427L11.5922 14.4066L6.6143 20H3.85251L10.3022 12.7508L3.49707 4H9.19252L13.125 9.11262L17.6732 4ZM16.7044 18.3754H18.2339L8.36148 5.53928H6.72027L16.7044 18.3754Z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/wisprflow" target="_blank" class="footer_social-link w-inline-block">
              <div class="footer_social-icons w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99707 3C4.16864 3 3.49707 3.67157 3.49707 4.5V19.5C3.49707 20.3284 4.16864 21 4.99707 21H19.9971C20.8255 21 21.4971 20.3284 21.4971 19.5V4.5C21.4971 3.67157 20.8255 3 19.9971 3H4.99707ZM9.01783 7.00272C9.02346 7.95897 8.30768 8.54819 7.4583 8.54397C6.65814 8.53975 5.96064 7.90272 5.96486 7.00413C5.96908 6.15897 6.63705 5.47975 7.50471 5.49944C8.38502 5.51913 9.02346 6.1646 9.01783 7.00272ZM12.7768 9.76176H10.2568H10.2554V18.3216H12.9188V18.1219C12.9188 17.742 12.9185 17.362 12.9182 16.9819C12.9174 15.9681 12.9165 14.9532 12.9217 13.9397C12.9231 13.6936 12.9343 13.4377 12.9976 13.2028C13.2352 12.3253 14.0242 11.7586 14.9045 11.8979C15.4698 11.9864 15.8438 12.3141 16.0013 12.8471C16.0984 13.1803 16.142 13.5389 16.1462 13.8863C16.1576 14.9339 16.156 15.9815 16.1544 17.0292C16.1538 17.399 16.1532 17.769 16.1532 18.1388V18.3202H18.8251V18.1149C18.8251 17.6629 18.8249 17.211 18.8246 16.7591C18.8241 15.6296 18.8235 14.5001 18.8265 13.3702C18.8279 12.8597 18.7731 12.3563 18.6479 11.8627C18.4609 11.1286 18.0742 10.5211 17.4456 10.0824C16.9998 9.77019 16.5104 9.5691 15.9634 9.5466C15.9011 9.54401 15.8383 9.54062 15.7752 9.53721C15.4955 9.52209 15.2112 9.50673 14.9438 9.56066C14.1788 9.71394 13.5067 10.0641 12.999 10.6814C12.94 10.7522 12.8823 10.8241 12.7962 10.9314L12.7768 10.9557V9.76176ZM6.17871 18.3244H8.82949V9.76733H6.17871V18.3244Z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>

  <!-- Bottom sticky nav pill -->
  <div class="nav_bottom">
    <a
      no-change=""
      cta=""
      cta_type="download_flow"
      cta_location="bottom_sticky_bar_pill"
      app-download=""
      href="/get-started"
      class="nav_bottom-content w-inline-block"
    >
      <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png" alt="" class="nav_bottom-icon" />
      <div class="nav_download-flow-pill">Download Genera</div>
    </a>
  </div>
</div>
