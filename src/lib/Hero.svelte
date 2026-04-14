<script>
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="hero" class="relative bg-[#f0f6f7] overflow-hidden py-12 px-6 pb-20 min-h-[90vh] max-[640px]:py-8 max-[640px]:px-4 max-[640px]:pb-16 max-[640px]:min-h-0 flex items-center">
  <!-- Background decorative element -->
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 pointer-events-none select-none opacity-[0.07]"
    aria-hidden="true"
  >
    <img
      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/genera-paw-fixed_92730de9.png"
      alt=""
      class="w-[200px] max-[640px]:w-[100px] h-auto grayscale"
    />
    <span class="text-[clamp(5rem,14vw,13rem)] font-black tracking-[0.05em] text-[#003B46] leading-none font-['Montserrat',sans-serif]">GENERA</span>
  </div>

  <div
    class="relative z-[1] w-full max-w-4xl mx-auto flex flex-col items-center gap-10 transition-[opacity,transform] duration-700 ease-in-out {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
  >

    <!-- CTA block -->
    <div class="flex flex-col items-center gap-5">
      <a
        id="hero-signup-btn"
        href="https://app.generasoftware.com/admin"
        class="inline-flex items-center py-[0.875rem] px-10 bg-[#003B46] text-white text-[1.0625rem] font-bold no-underline rounded-[4px] transition-[background,transform,box-shadow] duration-200 ease-in-out hover:bg-[#025262] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,59,70,0.3)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign Up For free
      </a>
      <a href="#features" class="inline-flex items-center gap-[0.4rem] text-[0.9rem] text-[#003B46] no-underline font-medium opacity-70 transition-[opacity,gap] duration-200 ease-in-out hover:opacity-100 hover:gap-[0.6rem]">
        Learn more before you join
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </div>

    <!-- Dashboard illustration card -->
    <div class="w-full max-w-3xl">
      <div class="bg-white rounded-[16px] shadow-[0_4px_6px_rgba(0,59,70,0.05),0_20px_60px_rgba(0,59,70,0.12)] overflow-hidden border border-[rgba(0,59,70,0.08)]">
        <div class="flex items-center gap-3 py-[0.875rem] px-5 bg-[#003B46] border-b border-white/10">
          <div class="flex gap-[0.375rem]">
            <span class="w-[10px] h-[10px] rounded-full bg-[#FF5F57]"></span>
            <span class="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]"></span>
            <span class="w-[10px] h-[10px] rounded-full bg-[#28C840]"></span>
          </div>
          <div class="text-[0.8125rem] font-semibold text-white/80 tracking-[0.03em]">Genera Dashboard</div>
        </div>
        <div class="p-6 flex flex-col gap-5 bg-[#f8fbfc]">

          <!-- Stats row -->
          <div class="grid grid-cols-3 gap-[0.75rem]">
            <div class="bg-white rounded-[10px] p-4 border border-[rgba(0,59,70,0.08)] text-center">
              <div class="text-2xl font-extrabold text-[#003B46] leading-none mb-[0.375rem]">48</div>
              <div class="text-[0.75rem] text-[#6b8a91] font-medium">Active Bookings</div>
            </div>
            <div class="bg-white rounded-[10px] p-4 border border-[rgba(0,59,70,0.08)] text-center">
              <div class="text-2xl font-extrabold text-[#003B46] leading-none mb-[0.375rem]">£2,840</div>
              <div class="text-[0.75rem] text-[#6b8a91] font-medium">Monthly Revenue</div>
            </div>
            <div class="bg-white rounded-[10px] p-4 border border-[rgba(0,59,70,0.08)] text-center">
              <div class="text-2xl font-extrabold text-[#003B46] leading-none mb-[0.375rem]">7</div>
              <div class="text-[0.75rem] text-[#6b8a91] font-medium">Staff Members</div>
            </div>
          </div>

          <!-- Dog avatars (simulated) -->
          <div class="grid grid-cols-4 max-[640px]:grid-cols-2 gap-[0.75rem]">
            <div class="bg-white rounded-[10px] py-[0.875rem] px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <div class="text-[2rem] mb-[0.375rem] leading-none">🐕</div>
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-[0.375rem]">Buddy</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(0,59,70,0.1)] text-[#003B46]">Today</span>
            </div>
            <div class="bg-white rounded-[10px] py-[0.875rem] px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <div class="text-[2rem] mb-[0.375rem] leading-none">🐩</div>
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-[0.375rem]">Luna</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(0,59,70,0.1)] text-[#003B46]">Today</span>
            </div>
            <div class="bg-white rounded-[10px] py-[0.875rem] px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <div class="text-[2rem] mb-[0.375rem] leading-none">🐶</div>
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-[0.375rem]">Max</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(194,159,85,0.15)] text-[#8a6e2e]">Tomorrow</span>
            </div>
            <div class="bg-white rounded-[10px] py-[0.875rem] px-2 border border-[rgba(0,59,70,0.08)] text-center transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,59,70,0.1)]">
              <div class="text-[2rem] mb-[0.375rem] leading-none">🦴</div>
              <div class="text-[0.8125rem] font-semibold text-[#1a2e35] mb-[0.375rem]">Rex</div>
              <span class="text-[0.6875rem] font-semibold py-[0.2rem] px-2 rounded-full inline-block bg-[rgba(194,159,85,0.15)] text-[#8a6e2e]">Tomorrow</span>
            </div>
          </div>

          <!-- Mini route bar -->
          <div class="bg-white rounded-[10px] py-[0.875rem] px-4 border border-[rgba(0,59,70,0.08)] flex items-center gap-4 flex-wrap">
            <span class="text-[0.75rem] font-bold text-[#003B46] tracking-[0.05em] uppercase whitespace-nowrap">Today's Route</span>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-[0.625rem] rounded-[4px]">Home</span>
              <span class="text-[#C29F55] font-bold text-[0.875rem]">→</span>
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-[0.625rem] rounded-[4px]">Park A</span>
              <span class="text-[#C29F55] font-bold text-[0.875rem]">→</span>
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-[0.625rem] rounded-[4px]">Park B</span>
              <span class="text-[#C29F55] font-bold text-[0.875rem]">→</span>
              <span class="text-[0.8125rem] font-medium text-[#1a2e35] bg-[rgba(0,59,70,0.06)] py-1 px-[0.625rem] rounded-[4px]">Drop off</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
