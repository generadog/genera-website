<script>
  import { onMount } from "svelte";

  let mobileOpen = false;
  let scrolled = false;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Our Story", href: "/our-story" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/#contact" },
  ];

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 12;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<div class="fixed top-0 left-0 right-0 z-[999] flex flex-col items-center pointer-events-none">
  <div class="h-4 shrink-0"></div>

  <nav
    role="banner"
    class="pointer-events-auto relative overflow-visible
      w-[calc(100%-5rem)] max-[860px]:w-[calc(100%-2rem)] max-w-[58rem]
      backdrop-blur-[20px] backdrop-saturate-[1.6]
      border
      transition-[box-shadow,border-color,background,border-radius] duration-300 ease-in-out
      {scrolled
      ? 'bg-[#fdfde9] border-black/10'
      : 'bg-[#fdfde9] border-black/10'}
      {mobileOpen ? 'rounded-t-[999px] rounded-b-[1.5rem]' : 'rounded'}">
    <div class="flex items-center px-5 h-[3.75rem] gap-2">
      <!-- Brand -->
      <a href="/" id="w-node-nav-brand" class="flex items-center gap-2 no-underline shrink-0 mr-2" aria-label="Genera Home">
        <img src="/genera-logo.svg" loading="eager" alt="Genera Logo" class="w-[1.625rem] h-[1.625rem] object-contain" />
        <span class="text-[0.9375rem] font-extrabold tracking-[0.08em] text-[#1a1a1a]">GENERA</span>
      </a>

      <!-- Desktop links -->
      <ul class="flex items-center list-none m-0 p-0 flex-1 justify-center max-[860px]:hidden" role="list">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="block px-[0.7rem] py-[0.375rem] text-[0.8125rem] font-medium text-[#2d2d2d] no-underline rounded-full whitespace-nowrap transition-[color,background] duration-150 ease-in-out hover:text-black hover:bg-black/5"
              >{link.label}</a>
          </li>
        {/each}
      </ul>

      <!-- Right: CTAs + hamburger -->
      <div class="flex items-center gap-2 shrink-0 ml-2">
        <a
          id="nav-login-link"
          href="https://app.generasoftware.com/admin"
          class="inline-flex items-center px-[0.9rem] py-[0.4rem] border-[1.5px] border-black/20 rounded-full text-[0.8125rem] font-semibold text-[#1a1a1a] no-underline whitespace-nowrap bg-transparent transition-[border-color,background] duration-150 ease-in-out hover:border-black/40 hover:bg-black/[0.03] max-[860px]:hidden"
          target="_blank"
          rel="noopener noreferrer">Log in</a>
        <a
          id="nav-signup-cta"
          href="https://app.generasoftware.com/admin"
          class="inline-flex items-center px-4 py-[0.4rem] bg-[#003B46] border-[1.5px] border-[#003B46] rounded-full text-[0.8125rem] font-semibold text-white no-underline whitespace-nowrap transition-[background,transform,box-shadow] duration-150 ease-in-out hover:bg-[#025262] hover:border-[#025262] hover:-translate-y-px hover:shadow-[0_3px_10px_rgba(0,59,70,0.28)] max-[860px]:hidden"
          target="_blank"
          rel="noopener noreferrer">Sign Up Free</a>

        <button
          class="hidden max-[860px]:flex flex-col justify-center items-center gap-1 w-8 h-8 bg-transparent border-none cursor-pointer p-1 rounded-full transition-[background] duration-150 ease-in-out hover:bg-black/5"
          on:click={() => (mobileOpen = !mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}>
          <span class="block w-[1.125rem] h-[1.5px] bg-[#1a1a1a] rounded-[2px] origin-center transition-[transform,opacity] duration-[250ms] ease-in-out {mobileOpen ? 'translate-y-[5.5px] rotate-45' : ''}"></span>
          <span class="block w-[1.125rem] h-[1.5px] bg-[#1a1a1a] rounded-[2px] origin-center transition-[transform,opacity] duration-[250ms] ease-in-out {mobileOpen ? 'opacity-0 scale-x-0' : ''}"></span>
          <span class="block w-[1.125rem] h-[1.5px] bg-[#1a1a1a] rounded-[2px] origin-center transition-[transform,opacity] duration-[250ms] ease-in-out {mobileOpen ? '-translate-y-[5.5px] -rotate-45' : ''}"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    {#if mobileOpen}
      <div class="border-t border-black/[0.06] animate-[slideDown_0.18s_ease] min-[861px]:hidden" role="navigation" aria-label="Mobile navigation">
        <ul role="list" class="list-none m-0 px-4 pt-2 pb-[0.875rem] flex flex-col gap-[0.125rem]">
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                class="block px-3 py-[0.625rem] text-[0.9375rem] font-medium text-[#1a1a1a] no-underline rounded-lg transition-[background] duration-[120ms] ease-in-out hover:bg-black/5"
                on:click={() => (mobileOpen = false)}>{link.label}</a>
            </li>
          {/each}
          <li class="h-px bg-black/[0.06] my-[0.375rem] mx-3"></li>
          <li>
            <a
              href="https://app.generasoftware.com/admin"
              class="block p-3 text-center bg-[#003B46] text-white text-[0.9375rem] font-semibold no-underline rounded-xl transition-[background] duration-150 ease-in-out hover:bg-[#025262]"
              target="_blank"
              rel="noopener noreferrer"
              on:click={() => (mobileOpen = false)}>Sign Up Free</a>
          </li>
        </ul>
      </div>
    {/if}

    <!-- Decorative lines -->
    <div class="absolute top-1/2 -translate-y-1/2 right-[3.25rem] w-px h-[1.125rem] bg-black/10 pointer-events-none max-[860px]:hidden"></div>
  </nav>
</div>

<style>
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
