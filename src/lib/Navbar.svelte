<script>
  import { onMount } from 'svelte';

  let mobileOpen = false;
  let scrolled = false;

  const navLinks = [
    { label: 'Home',         href: '/' },
    { label: 'Features',     href: '/#features' },
    { label: 'Contact',      href: '/#contact' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Sign Up FAQs', href: '/sign-up-faqs' },
    { label: 'About Us',     href: '/aboutus' },
  ];

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 12; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<div class="nav_fixed">
  <div class="nav_spacer"></div>

  <nav
    role="banner"
    class="nav_component"
    class:is-scrolled={scrolled}
    class:mobile-open={mobileOpen}
  >
    <div class="nav_container">

      <!-- Brand -->
      <a href="/" id="w-node-nav-brand" class="nav_brand" aria-label="Genera Home">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png"
          loading="eager"
          alt="Genera Logo"
          class="nav_logo"
        />
        <span class="nav_brand-name">GENERA</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav_links" role="list">
        {#each navLinks as link}
          <li>
            <a href={link.href} class="nav_link">{link.label}</a>
          </li>
        {/each}
      </ul>

      <!-- Right: CTAs + hamburger -->
      <div class="nav_right">
        <a
          id="nav-login-link"
          href="https://app.generasoftware.com/admin"
          class="nav_cta-outline"
          target="_blank"
          rel="noopener noreferrer"
        >Log in</a>
        <a
          id="nav-signup-cta"
          href="https://app.generasoftware.com/admin"
          class="nav_cta-filled"
          target="_blank"
          rel="noopener noreferrer"
        >Sign Up Free</a>

        <button
          class="nav_hamburger"
          class:is-open={mobileOpen}
          on:click={() => mobileOpen = !mobileOpen}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
        >
          <span class="nav_ham-line"></span>
          <span class="nav_ham-line"></span>
          <span class="nav_ham-line"></span>
        </button>
      </div>

    </div>

    <!-- Mobile menu -->
    {#if mobileOpen}
      <div class="nav_mobile-menu" role="navigation" aria-label="Mobile navigation">
        <ul role="list">
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                class="nav_mobile-link"
                on:click={() => mobileOpen = false}
              >{link.label}</a>
            </li>
          {/each}
          <li class="nav_mobile-divider"></li>
          <li>
            <a
              href="https://app.generasoftware.com/admin"
              class="nav_mobile-cta"
              target="_blank"
              rel="noopener noreferrer"
              on:click={() => mobileOpen = false}
            >Sign Up Free</a>
          </li>
        </ul>
      </div>
    {/if}

    <div class="nav_left-line"></div>
    <div class="nav_right-line"></div>
  </nav>
</div>

<style>
  /* ─── Fixed shell ────────────────────────────────────────────────────────── */
  .nav_fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
  }

  .nav_spacer {
    height: 1rem;
    flex-shrink: 0;
  }

  /* ─── Floating pill ──────────────────────────────────────────────────────── */
  .nav_component {
    pointer-events: all;
    width: calc(100% - 5rem);
    max-width: 58rem;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 999px;
    box-shadow:
      0 1px 3px rgba(0,0,0,0.06),
      0 4px 16px rgba(0,0,0,0.06),
      inset 0 1px 0 rgba(255,255,255,0.8);
    transition:
      box-shadow 0.3s ease,
      border-color 0.3s ease,
      background 0.3s ease,
      border-radius 0.25s ease;
    position: relative;
    overflow: visible;
  }

  .nav_component.is-scrolled {
    background: rgba(255, 255, 255, 0.97);
    box-shadow:
      0 2px 6px rgba(0,0,0,0.06),
      0 8px 32px rgba(0,0,0,0.09),
      inset 0 1px 0 rgba(255,255,255,1);
    border-color: rgba(0,0,0,0.1);
  }

  .nav_component.mobile-open {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }

  /* ─── Container ──────────────────────────────────────────────────────────── */
  .nav_container {
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    height: 3.75rem;
    gap: 0.5rem;
  }

  /* ─── Brand ──────────────────────────────────────────────────────────────── */
  .nav_brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    flex-shrink: 0;
    margin-right: 0.5rem;
  }

  .nav_logo {
    width: 1.625rem;
    height: 1.625rem;
    object-fit: contain;
  }

  .nav_brand-name {
    font-size: 0.9375rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #1a1a1a;
  }

  /* ─── Links ──────────────────────────────────────────────────────────────── */
  .nav_links {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    justify-content: center;
    gap: 0;
  }

  .nav_link {
    display: block;
    padding: 0.375rem 0.7rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #2d2d2d;
    text-decoration: none;
    border-radius: 999px;
    white-space: nowrap;
    transition: color 0.15s ease, background 0.15s ease;
  }

  .nav_link:hover {
    color: #000;
    background: rgba(0, 0, 0, 0.05);
  }

  /* ─── Right CTAs ─────────────────────────────────────────────────────────── */
  .nav_right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    margin-left: 0.5rem;
  }

  /* Outlined "Log in" like wisprflow.ai's "Flow for Android" */
  .nav_cta-outline {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.9rem;
    border: 1.5px solid rgba(0,0,0,0.2);
    border-radius: 999px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
    white-space: nowrap;
    background: transparent;
    transition: border-color 0.15s ease, background 0.15s ease;
  }

  .nav_cta-outline:hover {
    border-color: rgba(0,0,0,0.4);
    background: rgba(0,0,0,0.03);
  }

  /* Filled "Sign Up Free" — teal, like wisprflow's macOS button in brand color */
  .nav_cta-filled {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 1rem;
    background: #003B46;
    border: 1.5px solid #003B46;
    border-radius: 999px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
  }

  .nav_cta-filled:hover {
    background: #025262;
    border-color: #025262;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0, 59, 70, 0.28);
  }

  /* ─── Decorative lines ───────────────────────────────────────────────────── */
  .nav_left-line,
  .nav_right-line {
    position: absolute;
    top: 50%;
    width: 1px;
    height: 1.125rem;
    background: rgba(0, 0, 0, 0.1);
    transform: translateY(-50%);
    pointer-events: none;
  }
  .nav_left-line  { left:  3.25rem; }
  .nav_right-line { right: 3.25rem; }

  /* ─── Hamburger ──────────────────────────────────────────────────────────── */
  .nav_hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 999px;
    transition: background 0.15s ease;
  }

  .nav_hamburger:hover { background: rgba(0,0,0,0.05); }

  .nav_ham-line {
    display: block;
    width: 1.125rem;
    height: 1.5px;
    background: #1a1a1a;
    border-radius: 2px;
    transform-origin: center;
    transition: transform 0.25s ease, opacity 0.18s ease;
  }

  .nav_hamburger.is-open .nav_ham-line:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
  .nav_hamburger.is-open .nav_ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nav_hamburger.is-open .nav_ham-line:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

  /* ─── Mobile menu ────────────────────────────────────────────────────────── */
  .nav_mobile-menu {
    border-top: 1px solid rgba(0,0,0,0.06);
    animation: slideDown 0.18s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .nav_mobile-menu ul {
    list-style: none;
    margin: 0;
    padding: 0.5rem 1rem 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .nav_mobile-link {
    display: block;
    padding: 0.625rem 0.75rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #1a1a1a;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: background 0.12s ease;
  }

  .nav_mobile-link:hover { background: rgba(0,0,0,0.05); }

  .nav_mobile-divider {
    height: 1px;
    background: rgba(0,0,0,0.06);
    margin: 0.375rem 0.75rem;
  }

  .nav_mobile-cta {
    display: block;
    padding: 0.75rem;
    text-align: center;
    background: #003B46;
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.75rem;
    transition: background 0.15s ease;
  }

  .nav_mobile-cta:hover { background: #025262; }

  /* ─── Responsive ─────────────────────────────────────────────────────────── */
  @media (max-width: 860px) {
    .nav_links { display: none; }
    .nav_cta-outline { display: none; }
    .nav_cta-filled { display: none; }
    .nav_hamburger { display: flex; }
    .nav_left-line,
    .nav_right-line { display: none; }
    .nav_component {
      width: calc(100% - 2rem);
    }
  }

  @media (min-width: 861px) {
    .nav_mobile-menu { display: none; }
  }
</style>
