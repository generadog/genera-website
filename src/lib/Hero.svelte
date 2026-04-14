<script>
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  /*
   * 4-legged dog walking gait: diagonal pairs
   *   — Left Front (LF) + Right Rear (RR) land together (0.15 s apart)
   *   — Right Front (RF) + Left Rear (LR) land together (0.15 s apart)
   *
   * Two parallel tracks (upper = left side of body, lower = right side).
   * The dog walks LEFT→RIGHT over 6 strides, turns at the right, then walks
   * RIGHT→LEFT over 6 strides before the 10 s cycle loops.
   *
   * rot: SVG paw points "up" at 0°.
   *   Walking RIGHT: upper track 80°, lower track 100°
   *   Walking LEFT:  upper track 260° (80°+180°), lower track 280° (100°+180°)
   *
   * RTL rear feet are to the RIGHT of their front foot (behind = back along direction of travel).
   * Timing: LTR delays 0–2.65 s · RTL delays 3.8–6.45 s · cycle 10 s (1.35 s pause before loop).
   */
  const R = 3.8; // RTL delay offset (seconds)

  const paws = [
    // ── Left → Right ──────────────────────────────────────────────────────
    // Stride 1: LF + RR
    { x: 12, y: 69.9, rot: 80,  delay: 0    },  // LF
    { x:  8, y: 77.5, rot: 100, delay: 0.15 },  // RR
    // Stride 2: RF + LR
    { x: 26, y: 75.1, rot: 100, delay: 0.5  },  // RF
    { x: 22, y: 68.6, rot: 80,  delay: 0.65 },  // LR
    // Stride 3: LF + RR
    { x: 40, y: 66.3, rot: 80,  delay: 1.0  },  // LF
    { x: 36, y: 73.8, rot: 100, delay: 1.15 },  // RR
    // Stride 4: RF + LR
    { x: 54, y: 71.5, rot: 100, delay: 1.5  },  // RF
    { x: 50, y: 65.0, rot: 80,  delay: 1.65 },  // LR
    // Stride 5: LF + RR
    { x: 68, y: 62.7, rot: 80,  delay: 2.0  },  // LF
    { x: 64, y: 70.2, rot: 100, delay: 2.15 },  // RR
    // Stride 6: RF + LR
    { x: 82, y: 67.9, rot: 100, delay: 2.5  },  // RF
    { x: 78, y: 61.4, rot: 80,  delay: 2.65 },  // LR

    // ── Right → Left (turn at right edge) ─────────────────────────────────
    // Stride 1: upper-front + lower-rear (dog now faces left)
    { x: 80, y: 61.5, rot: 260, delay: R        },  // upper front
    { x: 84, y: 68.0, rot: 280, delay: R + 0.15 },  // lower rear (behind = to the right)
    // Stride 2: lower-front + upper-rear
    { x: 66, y: 70.3, rot: 280, delay: R + 0.5  },  // lower front
    { x: 70, y: 62.8, rot: 260, delay: R + 0.65 },  // upper rear
    // Stride 3: upper-front + lower-rear
    { x: 52, y: 65.1, rot: 260, delay: R + 1.0  },  // upper front
    { x: 56, y: 71.6, rot: 280, delay: R + 1.15 },  // lower rear
    // Stride 4: lower-front + upper-rear
    { x: 38, y: 74.0, rot: 280, delay: R + 1.5  },  // lower front
    { x: 42, y: 66.4, rot: 260, delay: R + 1.65 },  // upper rear
    // Stride 5: upper-front + lower-rear
    { x: 24, y: 68.8, rot: 260, delay: R + 2.0  },  // upper front
    { x: 28, y: 75.3, rot: 280, delay: R + 2.15 },  // lower rear
    // Stride 6: lower-front + upper-rear
    { x: 10, y: 77.6, rot: 280, delay: R + 2.5  },  // lower front
    { x: 14, y: 70.1, rot: 260, delay: R + 2.65 },  // upper rear
  ];
</script>

<section id="hero" class="relative bg-[#fdfde9] overflow-hidden pt-32 pb-20 px-6 min-h-[90vh] max-[640px]:pt-28 max-[640px]:px-4 max-[640px]:pb-16 max-[640px]:min-h-0 flex items-center">

  <!-- Walking paw print trail — 4-legged diagonal-pair gait -->
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

  <div
    class="relative z-[1] w-full max-w-4xl mx-auto flex flex-col items-center gap-10 transition-[opacity,transform] duration-700 ease-in-out {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
  >

    <!-- Hero title -->
    <div class="w-full text-center">
      <h1 class="hero-title">
        <span class="hero-title-muted">Daycare management </span> <br />
        <span class="hero-title-dark"> for your every need</span>
      </h1>
    </div>

    <!-- Dashboard illustration card -->
    <div class="w-full max-w-3xl">
      <div class="bg-white rounded-[16px] shadow-[0_4px_6px_rgba(0,59,70,0.05),0_20px_60px_rgba(0,59,70,0.12)] overflow-hidden border border-[rgba(0,59,70,0.08)]">
        <div class="flex items-center gap-3 py-3.5 px-5 bg-[#003B46] border-b border-white/10">
          <div class="flex gap-1.5">
            <span class="w-[10px] h-[10px] rounded-full bg-[#FF5F57]"></span>
            <span class="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]"></span>
            <span class="w-[10px] h-[10px] rounded-full bg-[#28C840]"></span>
          </div>
          <div class="text-[0.8125rem] font-semibold text-white/80 tracking-[0.03em]">Genera Dashboard</div>
        </div>
        <div class="p-6 flex flex-col gap-5 bg-[#f8fbfc]">

          <!-- Stats row -->
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-white rounded-[10px] p-4 border border-[rgba(0,59,70,0.08)] text-center">
              <div class="text-2xl font-extrabold text-[#003B46] leading-none mb-1.5">48</div>
              <div class="text-[0.75rem] text-[#6b8a91] font-medium">Active Bookings</div>
            </div>
            <div class="bg-white rounded-[10px] p-4 border border-[rgba(0,59,70,0.08)] text-center">
              <div class="text-2xl font-extrabold text-[#003B46] leading-none mb-1.5">£2,840</div>
              <div class="text-[0.75rem] text-[#6b8a91] font-medium">Monthly Revenue</div>
            </div>
            <div class="bg-white rounded-[10px] p-4 border border-[rgba(0,59,70,0.08)] text-center">
              <div class="text-2xl font-extrabold text-[#003B46] leading-none mb-1.5">7</div>
              <div class="text-[0.75rem] text-[#6b8a91] font-medium">Staff Members</div>
            </div>
          </div>

          <!-- Dog face images -->
          <div class="grid grid-cols-4 max-[640px]:grid-cols-2 gap-3">
            <div class="bg-white rounded-[10px] py-3.5 px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=128&q=80"
                alt="Buddy dog face"
                class="w-12 h-12 rounded-full object-cover mx-auto mb-1.5"
                loading="lazy"
              />
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-1.5">Buddy</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(0,59,70,0.1)] text-[#003B46]">Today</span>
            </div>
            <div class="bg-white rounded-[10px] py-3.5 px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=128&q=80"
                alt="Luna dog face"
                class="w-12 h-12 rounded-full object-cover mx-auto mb-1.5"
                loading="lazy"
              />
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-1.5">Luna</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(0,59,70,0.1)] text-[#003B46]">Today</span>
            </div>
            <div class="bg-white rounded-[10px] py-3.5 px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=128&q=80"
                alt="Max dog face"
                class="w-12 h-12 rounded-full object-cover mx-auto mb-1.5"
                loading="lazy"
              />
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-1.5">Max</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(194,159,85,0.15)] text-[#8a6e2e]">Tomorrow</span>
            </div>
            <div class="bg-white rounded-[10px] py-3.5 px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=128&q=80"
                alt="Rex dog face"
                class="w-12 h-12 rounded-full object-cover mx-auto mb-1.5"
                loading="lazy"
              />
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-1.5">Rex</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(194,159,85,0.15)] text-[#8a6e2e]">Tomorrow</span>
            </div>
          </div>

          <!-- Mini route bar -->
          <div class="bg-white rounded-[10px] py-3.5 px-4 border border-[rgba(0,59,70,0.08)] flex items-center gap-4 flex-wrap">
            <span class="text-[0.75rem] font-bold text-[#003B46] tracking-[0.05em] uppercase whitespace-nowrap">Today's Route</span>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-2.5 rounded-[4px]">Home</span>
              <span class="text-[#C29F55] font-bold text-[0.875rem]">→</span>
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-2.5 rounded-[4px]">Park A</span>
              <span class="text-[#C29F55] font-bold text-[0.875rem]">→</span>
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-2.5 rounded-[4px]">Park B</span>
              <span class="text-[#C29F55] font-bold text-[0.875rem]">→</span>
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-2.5 rounded-[4px]">Drop off</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

<style>
  .hero-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2.4rem, 5.5vw, 4.5rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.01em;
    margin: 0;
  }

  .hero-title-muted {
    color: #a09484;
  }

  .hero-title-dark {
    color: #0d2229;
    font-weight: 700;
  }

  .paw-trail {
    position: absolute;
    inset: 0;
    pointer-events: none;
    user-select: none;
    overflow: hidden;
  }

  .paw-wrapper {
    position: absolute;
    width: 30px;
    /* Rotation set via CSS var; animation handles opacity + scale stamp */
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

  /*
   * Stamp in with a quick scale pop, hold, then fade.
   * Cycle = 10 s. Each print is visible for ~2.6 s total.
   *
   * 4%  of 10 s = 0.4 s  → scale pop / fade-in complete
   * 14% of 10 s = 1.4 s  → start fading
   * 22% of 10 s = 2.2 s  → fully invisible
   *
   * Last RTL print (delay 6.45 s) fades out by ~8.65 s — well before
   * the 10 s cycle resets, giving a 1.35 s pause before the loop.
   */
  @keyframes paw-appear {
    0% {
      opacity: 0;
      transform: rotate(var(--rot)) scale(0.5);
    }
    4% {
      opacity: 0.15;
      transform: rotate(var(--rot)) scale(1.1);
    }
    8% {
      opacity: 0.13;
      transform: rotate(var(--rot)) scale(1);
    }
    14% {
      opacity: 0.11;
      transform: rotate(var(--rot)) scale(1);
    }
    22% {
      opacity: 0;
      transform: rotate(var(--rot)) scale(1);
    }
    100% {
      opacity: 0;
      transform: rotate(var(--rot)) scale(1);
    }
  }

  @media (max-width: 640px) {
    .paw-wrapper {
      width: 20px;
    }
  }
</style>
