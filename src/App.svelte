<script>
  import { onMount } from 'svelte';
  import Banner from './lib/Banner.svelte';
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import Integrations from './lib/Integrations.svelte';
  import Clients from './lib/Clients.svelte';
  import FasterSection from './lib/FasterSection.svelte';
  import UseCases from './lib/UseCases.svelte';
  import Features from './lib/Features.svelte';
  import Testimonials from './lib/Testimonials.svelte';
  import CtaSection from './lib/CtaSection.svelte';
  import AskAI from './lib/AskAI.svelte';
  import Footer from './lib/Footer.svelte';

  onMount(() => {

    // Mobile marquee: shorten duration on small screens
    if (window.matchMedia('(max-width: 767px)').matches) {
      const anim = document.querySelector('.faster_flow-marquee animate');
      if (anim) anim.setAttribute('dur', '10s');
    }

    // Redirect to sales page if ?talk-to-sales param present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('talk-to-sales')) {
      window.location.href = '/talk-to-sales';
    }

    // Windows flag font polyfill
    if (navigator.userAgent.includes('Windows')) {
      document.documentElement.classList.add('is-windows');
    }

    // Save referral & promo codes to cookies
    const referral = urlParams.get('referral');
    const promoCode = urlParams.get('promo_code');
    const { hostname } = window.location;
    const domain = hostname.includes('generasoftware.com') ? '.generasoftware.com' : hostname;
    const expiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();

    if (referral) {
      document.cookie = `referral=${encodeURIComponent(referral)};expires=${expiry};path=/;domain=${domain};Secure;`;
    }
    if (promoCode) {
      document.cookie = `promo_code=${encodeURIComponent(promoCode)};expires=${expiry};path=/;domain=${domain};Secure;`;
    }

    // OS-aware download button text
    const applyDownloadText = () => {
      if (!window.userPlatform) {
        setTimeout(applyDownloadText, 50);
        return;
      }
      const buttons = document.querySelectorAll('[app-download]:not([no-change])');
      if (!buttons.length) { setTimeout(applyDownloadText, 50); return; }

      const platform = window.userPlatform;
      const osTextMap = {
        mac_m1: 'Download for macOS',
        mac_intel: 'Download for macOS',
        mac_unknown: 'Download for macOS',
        Windows: 'Download for Windows',
        win_unknown: 'Download for Windows',
        iOS: 'Download for iPhone',
        Android: 'Download for Android',
      };
      const osText = osTextMap[platform];
      if (!osText) return;

      const appleIcon = document.querySelector('[apple-icon]');
      const windowsIcon = document.querySelector('[windows-icon]');
      const androidIcon = document.querySelector('[android-icon]');

      buttons.forEach(btn => {
        btn.textContent = osText;
        if ((platform.startsWith('mac') || platform === 'iOS') && appleIcon) {
          btn.prepend(appleIcon.cloneNode(true));
        } else if ((platform === 'Windows' || platform === 'win_unknown') && windowsIcon) {
          btn.prepend(windowsIcon.cloneNode(true));
        } else if (platform === 'Android' && androidIcon) {
          btn.prepend(androidIcon.cloneNode(true));
        }
      });
    };
    applyDownloadText();
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <title>Genera | A Better Breed of Software for Pet Businesses</title>
  <meta name="description" content="Genera is the all-in-one software designed to help pet businesses save time, increase efficiency, and focus on what they do best: caring for pets. Free to use. No setup fees." />
  <meta property="og:title" content="Genera | A Better Breed of Software for Pet Businesses" />
  <meta property="og:description" content="Genera is the all-in-one software designed to help pet businesses save time, increase efficiency, and focus on what they do best: caring for pets. Free to use. No setup fees." />
  <meta property="og:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Genera | A Better Breed of Software for Pet Businesses" />
  <meta name="twitter:description" content="Genera is the all-in-one software designed to help pet businesses save time, increase efficiency, and focus on what they do best: caring for pets. Free to use. No setup fees." />
  <meta name="twitter:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="shortcut icon" href="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png" type="image/png" />
  <link rel="canonical" href="https://www.generasoftware.com" />

  <!-- Webflow shared CSS -->
  <link
    href="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/css/flowsite-dev.webflow.shared.90180b654.min.css"
    rel="stylesheet"
    type="text/css"
    integrity="sha384-kBgLZUazhgX7iHJwwQwRlQ2oU7AcTOvY7k9/65Y8rKpXm5mNIaqgGxSMTV0HApD9"
    crossorigin="anonymous"
  />

  <!-- Font preloads -->
  <link rel="preload" href="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/682fbe57a719a4ebf1fb56d5_EBGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin="" />
  <link rel="preload" href="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68d3db1d34da60ddf73ff544_683b1349ca0a0ddd3d6a7cd3_EBGaramond-Italic.woff2" as="font" type="font/woff2" crossorigin="" />
  <link rel="preload" href="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/682fbd6763ee33a2be0ffd05_Figtree-Medium.woff2" as="font" type="font/woff2" crossorigin="" />
  <link rel="preload" href="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/682fbd676708c4fa3708edc8_Figtree-SemiBold.woff2" as="font" type="font/woff2" crossorigin="" />

  <!-- External scripts -->
  <script async type="module" src="https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js" fs-list=""></script>
  <script async src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tanay-wispr/webflow-package@6.5.12/dist/global.js"></script>

  <!-- GTM -->
  <script>{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('consent', 'default', {
      ad_storage: 'denied', ad_user_data: 'denied',
      ad_personalization: 'denied', analytics_storage: 'denied',
      wait_for_update: 500
    });
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N8JTW8TQ');
  `}</script>

  <!-- Global styles -->
  <style>
    .nav_bottom { transform: translateY(100%); }
    .fs-rangeslider_handle:focus-visible { outline: 0rem solid transparent !important; }
    .splide__sr { display: none !important; }
    [promo-wrap] { display: none; }

    /* Heading underline breakpoints */
    #heading-underline { stroke-width: 8 !important; }
    @media (max-width: 1024px) { #heading-underline { stroke-width: 12 !important; } }
    @media (max-width: 768px)  { #heading-underline { stroke-width: 12 !important; } }

    /* Flag emoji font stack */
    .flag {
      font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
    }
    @font-face {
      font-family: "Twemoji Country Flags";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2') format('woff2');
    }
    .is-windows .flag {
      font-family: "Twemoji Country Flags", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    /* Rich text helpers */
    body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
    .hide { display: none !important; }
    @media screen and (max-width: 991px) { .hide, .hide-tablet { display: none !important; } }
    @media screen and (max-width: 767px) { .hide-mobile-landscape { display: none !important; } }
    @media screen and (max-width: 479px) { .hide-mobile { display: none !important; } }

    /* Footer link hover arrow */
    .footer_link-block .icon-embed-xxsmall { opacity: 0; transform: translateX(-10px); transition: all 300ms; }
    .footer_link-block:hover .icon-embed-xxsmall { opacity: 1; transform: translateX(0); }

    /* Nav */
    .w-nav-overlay { margin-top: -10px !important; z-index: 1; }
    .dropdown1_border-radius-wrap, .dropdown-border-right-overlay { opacity: 0; }
    .dropdown-link:hover .dropdown-link-text { color: #034f46; }
    .text-link:hover .text-link-arrow { transform: translateX(100%); }

    /* Floating nav tweak */
    @media (min-width:992px) and (max-width:1281px) {
      .nav_spacer { height: 0.5rem; }
    }
    .use-cases_card:hover .use-cases_arrow-icon { transform: translate(10px, -10px); }
  </style>
</svelte:head>

<div class="page-wrapper">
  <Banner />
  <Navbar />

  <main class="main-wrapper">
    <div class="hero-wrapper">
      <Hero />
    </div>

    <div data-w-id="integrations-section" class="section_integrations-clients">
      <Integrations />
      <Clients />
    </div>

    <div class="ribbon_wrapper">
      <FasterSection />
      <div class="spacer-huge"></div>
      <UseCases />
      <Features />
    </div>

    <Testimonials />
    <CtaSection />
    <AskAI />
  </main>

  <!-- OAuth error overlay -->
  <div oauth-error="" class="oauth-error-wrapper">
    <div class="oauth-error-div">
      <p class="text-wrap-balance">Something went wrong during sign-in. Please try again.</p>
      <div class="w-embed">
        <a href="/login" class="button w-button" cta="" cta_location="homepage_oauth_error" cta_type="try_again" open-button="">Try again</a>
      </div>
    </div>
    <div class="oauth-error-overlay"></div>
  </div>

  <Footer />
</div>
