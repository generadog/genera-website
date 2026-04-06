<script>
  let visible = true;
  function dismiss() { visible = false; }
</script>

{#if visible}
  <div class="genera-banner" role="banner">
    <div class="genera-banner__content">
      <span class="genera-banner__text">
        It's free to use — no setup fees, no catch.
      </span>
      <a
        href="https://app.generasoftware.com/admin"
        class="genera-banner__link"
        target="_blank"
        rel="noopener noreferrer"
      >Sign up today ›</a>
    </div>
    <button class="genera-banner__close" on:click={dismiss} aria-label="Dismiss banner">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
{/if}

<style>
  .genera-banner {
    position: sticky;
    top: 0;
    z-index: 1001;
    background: #0d2b24;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 3rem;
    gap: 0.75rem;
  }

  .genera-banner__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .genera-banner__text {
    font-size: 0.8125rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.01em;
  }

  .genera-banner__link {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 0.15s ease;
  }

  .genera-banner__link:hover { opacity: 0.75; }

  .genera-banner__close {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transition: color 0.15s ease, background 0.15s ease;
  }

  .genera-banner__close:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
</style>
