<script>
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="hero" class="relative bg-[#fdfde9] overflow-hidden py-12 px-6 pb-20 min-h-[90vh] max-[640px]:py-8 max-[640px]:px-4 max-[640px]:pb-16 max-[640px]:min-h-0 flex items-center">
  <!-- Background decorative element -->
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 pointer-events-none select-none opacity-[0.07]"
    aria-hidden="true"
  >
    <img
      src="/genera-logo.svg"
      alt=""
      class="w-[200px] max-[640px]:w-[100px] h-auto grayscale"
    />
  </div>

  <div
    class="relative z-[1] w-full max-w-4xl mx-auto flex flex-col items-center gap-10 transition-[opacity,transform] duration-700 ease-in-out {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}"
  >

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
