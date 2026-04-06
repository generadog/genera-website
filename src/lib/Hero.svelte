<script>
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="hero" class="genera-hero">
  <!-- Background decorative element -->
  <div class="genera-hero__bg-mark" aria-hidden="true">
    <img
      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png"
      alt=""
      class="genera-hero__bg-paw"
    />
    <span class="genera-hero__bg-wordmark">GENERA</span>
  </div>

  <div class="genera-hero__inner" class:mounted>

    <!-- CTA block -->
    <div class="genera-hero__cta-block">
      <a
        id="hero-signup-btn"
        href="https://app.generasoftware.com/admin"
        class="genera-hero__cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign Up For free
      </a>
      <a href="#features" class="genera-hero__learn-link">
        Learn more before you join
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </div>

    <!-- Dashboard illustration card -->
    <div class="genera-hero__visual">
      <div class="genera-hero__dashboard-card">
        <div class="genera-hero__dashboard-header">
          <div class="genera-hero__dashboard-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="genera-hero__dashboard-title">Genera Dashboard</div>
        </div>
        <div class="genera-hero__dashboard-body">

          <!-- Stats row -->
          <div class="genera-hero__stats-row">
            <div class="genera-hero__stat">
              <div class="genera-hero__stat-value">48</div>
              <div class="genera-hero__stat-label">Active Bookings</div>
            </div>
            <div class="genera-hero__stat">
              <div class="genera-hero__stat-value">£2,840</div>
              <div class="genera-hero__stat-label">Monthly Revenue</div>
            </div>
            <div class="genera-hero__stat">
              <div class="genera-hero__stat-value">7</div>
              <div class="genera-hero__stat-label">Staff Members</div>
            </div>
          </div>

          <!-- Dog avatars (simulated) -->
          <div class="genera-hero__pets-row">
            <div class="genera-hero__pet-card">
              <div class="genera-hero__pet-avatar">🐕</div>
              <div class="genera-hero__pet-name">Buddy</div>
              <div class="genera-hero__pet-status active">Today</div>
            </div>
            <div class="genera-hero__pet-card">
              <div class="genera-hero__pet-avatar">🐩</div>
              <div class="genera-hero__pet-name">Luna</div>
              <div class="genera-hero__pet-status active">Today</div>
            </div>
            <div class="genera-hero__pet-card">
              <div class="genera-hero__pet-avatar">🐶</div>
              <div class="genera-hero__pet-name">Max</div>
              <div class="genera-hero__pet-status upcoming">Tomorrow</div>
            </div>
            <div class="genera-hero__pet-card">
              <div class="genera-hero__pet-avatar">🦴</div>
              <div class="genera-hero__pet-name">Rex</div>
              <div class="genera-hero__pet-status upcoming">Tomorrow</div>
            </div>
          </div>

          <!-- Mini route bar -->
          <div class="genera-hero__route-bar">
            <span class="genera-hero__route-label">Today's Route</span>
            <div class="genera-hero__route-stops">
              <span class="genera-hero__route-stop">Home</span>
              <span class="genera-hero__route-arrow">→</span>
              <span class="genera-hero__route-stop">Park A</span>
              <span class="genera-hero__route-arrow">→</span>
              <span class="genera-hero__route-stop">Park B</span>
              <span class="genera-hero__route-arrow">→</span>
              <span class="genera-hero__route-stop">Drop off</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

<style>
  /* ─── Section ─────────────────────────────────── */
  .genera-hero {
    position: relative;
    background: #f0f6f7;
    overflow: hidden;
    padding: 3rem 1.5rem 5rem;
    min-height: 90vh;
    display: flex;
    align-items: center;
  }

  /* ─── Background brand mark ───────────────────── */
  .genera-hero__bg-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    pointer-events: none;
    user-select: none;
    opacity: 0.07;
  }

  .genera-hero__bg-paw {
    width: 200px;
    height: auto;
    filter: grayscale(1);
  }

  .genera-hero__bg-wordmark {
    font-size: clamp(5rem, 14vw, 13rem);
    font-weight: 900;
    letter-spacing: 0.05em;
    color: #003B46;
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
  }

  /* ─── Inner layout ────────────────────────────── */
  .genera-hero__inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .genera-hero__inner.mounted {
    opacity: 1;
    transform: translateY(0);
  }


  /* ─── CTA block ───────────────────────────────── */
  .genera-hero__cta-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .genera-hero__cta-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.875rem 2.5rem;
    background: #003B46;
    color: #fff;
    font-size: 1.0625rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  }

  .genera-hero__cta-btn:hover {
    background: #025262;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 59, 70, 0.3);
  }

  .genera-hero__learn-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
    color: #003B46;
    text-decoration: none;
    font-weight: 500;
    opacity: 0.7;
    transition: opacity 0.2s ease, gap 0.2s ease;
  }

  .genera-hero__learn-link:hover {
    opacity: 1;
    gap: 0.6rem;
  }

  /* ─── Dashboard visual ────────────────────────── */
  .genera-hero__visual {
    width: 100%;
    max-width: 48rem;
  }

  .genera-hero__dashboard-card {
    background: #fff;
    border-radius: 16px;
    box-shadow:
      0 4px 6px rgba(0, 59, 70, 0.05),
      0 20px 60px rgba(0, 59, 70, 0.12);
    overflow: hidden;
    border: 1px solid rgba(0, 59, 70, 0.08);
  }

  .genera-hero__dashboard-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.25rem;
    background: #003B46;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .genera-hero__dashboard-dots {
    display: flex;
    gap: 0.375rem;
  }

  .genera-hero__dashboard-dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
  }

  .genera-hero__dashboard-dots span:nth-child(1) { background: #FF5F57; }
  .genera-hero__dashboard-dots span:nth-child(2) { background: #FEBC2E; }
  .genera-hero__dashboard-dots span:nth-child(3) { background: #28C840; }

  .genera-hero__dashboard-title {
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.03em;
  }

  .genera-hero__dashboard-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background: #f8fbfc;
  }

  /* Stats */
  .genera-hero__stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .genera-hero__stat {
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid rgba(0, 59, 70, 0.08);
    text-align: center;
  }

  .genera-hero__stat-value {
    font-size: 1.5rem;
    font-weight: 800;
    color: #003B46;
    line-height: 1;
    margin-bottom: 0.375rem;
  }

  .genera-hero__stat-label {
    font-size: 0.75rem;
    color: #6b8a91;
    font-weight: 500;
  }

  /* Pet cards */
  .genera-hero__pets-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
  }

  .genera-hero__pet-card {
    background: #fff;
    border-radius: 10px;
    padding: 0.875rem 0.5rem;
    border: 1px solid rgba(0, 59, 70, 0.08);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .genera-hero__pet-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 59, 70, 0.1);
  }

  .genera-hero__pet-avatar {
    font-size: 2rem;
    margin-bottom: 0.375rem;
    line-height: 1;
  }

  .genera-hero__pet-name {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #1a2e35;
    margin-bottom: 0.375rem;
  }

  .genera-hero__pet-status {
    font-size: 0.6875rem;
    font-weight: 600;
    padding: 0.2rem 0.5rem;
    border-radius: 999px;
    display: inline-block;
  }

  .genera-hero__pet-status.active {
    background: rgba(0, 59, 70, 0.1);
    color: #003B46;
  }

  .genera-hero__pet-status.upcoming {
    background: rgba(194, 159, 85, 0.15);
    color: #8a6e2e;
  }

  /* Route bar */
  .genera-hero__route-bar {
    background: #fff;
    border-radius: 10px;
    padding: 0.875rem 1rem;
    border: 1px solid rgba(0, 59, 70, 0.08);
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .genera-hero__route-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #003B46;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .genera-hero__route-stops {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .genera-hero__route-stop {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #1a2e35;
    background: rgba(0, 59, 70, 0.06);
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
  }

  .genera-hero__route-arrow {
    color: #C29F55;
    font-weight: 700;
    font-size: 0.875rem;
  }

  /* ─── Responsive ──────────────────────────────── */
  @media (max-width: 640px) {
    .genera-hero {
      padding: 2rem 1rem 4rem;
      min-height: auto;
    }

    .genera-hero__bg-paw {
      width: 100px;
    }

    .genera-hero__stats-row {
      grid-template-columns: repeat(3, 1fr);
    }


    .genera-hero__pets-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
