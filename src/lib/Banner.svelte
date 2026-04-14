<script>
  let visible = true;
  function dismiss() { visible = false; }
</script>

{#if visible}
  <div
    class="sticky top-0 z-[1001] bg-[#0d2b24] flex items-center justify-center py-[0.625rem] px-12 gap-[0.75rem]"
    role="banner"
  >
    <div class="flex items-center justify-center gap-2 flex-wrap">
      <span class="text-[0.8125rem] font-normal text-white/80 tracking-[0.01em]">
        It's free to use — no setup fees, no catch.
      </span>
      <a
        href="https://app.generasoftware.com/admin"
        class="text-[0.8125rem] font-semibold text-white no-underline whitespace-nowrap transition-opacity duration-150 ease-in-out hover:opacity-75"
        target="_blank"
        rel="noopener noreferrer"
      >Sign up today ›</a>
    </div>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-transparent border-none cursor-pointer text-white/50 rounded-full transition-[color,background] duration-150 ease-in-out hover:text-white hover:bg-white/10"
      on:click={dismiss}
      aria-label="Dismiss banner"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
{/if}
