<script>
  const dictionaryChips = ['Robyn', 'Viktor', 'SaaS', 'Caltrain', 'Mackey', 'Nguyen', 'Leong'];
  const snippetChips = ['Hours', 'Support intro', 'FAQ', 'Careers link', 'Elevator pitch', 'Address'];
  const platforms = ['Web', 'Mac', 'Windows'];
</script>

<!-- AI Auto Edits -->
<section id="features" class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Left: image/lottie -->
      <div class="relative rounded-2xl overflow-hidden bg-stone-100 aspect-[4/3]">
        <img
          src="https://placehold.co/700x500/f0f0e8/888?text=Genera+AI"
          alt=""
          class="w-full h-full object-cover"
        />
        <div
          data-is-ix2-target="1"
          class="absolute inset-0"
          data-animation-type="lottie"
          data-src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6840ba040dc28dd9071912c8_Flow%20-%20AI%20auto%20edits_v2.lottie"
          data-loop="0"
          data-direction="1"
          data-autoplay="0"
          data-renderer="svg"
          data-default-duration="0"
          data-duration="15"
          data-ix2-initial-state="0"
        ></div>
      </div>

      <!-- Right: copy -->
      <div class="flex flex-col gap-6">
        <h2 class="text-4xl lg:text-5xl font-bold text-[#003B46] leading-tight">
          <span class="inline-flex items-start gap-2">
            <span>AI</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 132 117" fill="none" class="mt-1 shrink-0">
              <path d="M71 12L73 4" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M91.75 23L99 14.5" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M110.545 35.6253L127.458 31.1232" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M105 62C108.158 63.3664 111.006 65.0694 114 66.75" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M93 94.75L101.25 105" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M62 99C62.6012 103.667 63.3333 108.333 64 113" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M35 90C32.7477 94.9825 29.7733 99.5866 29 105" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M19 68C14.6134 65.3005 9.34297 62 4 62" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M32 42C26.5986 39.5448 19.3693 35.054 16 30" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
              <path d="M47 22C44.7667 18.65 43.574 14.6728 42 11" stroke="#FFA946" stroke-width="8" stroke-linecap="round"/>
            </svg>
          </span>
          <span>Auto Edits</span>
        </h2>
        <p class="text-lg text-[#4a5568] leading-relaxed">
          Everything you need. Nothing you don't. Designed to remove the friction of running a daycare.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="/demo"
            cta=""
            cta_location="ai_auto_edits_section"
            cta_type="web_demo"
            class="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#003B46] text-[#003B46] font-semibold rounded-lg text-sm transition-[background,color] duration-150 hover:bg-[#003B46] hover:text-white"
          >
            <img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68335d5ca4a30e3a678bf92d_mic-icon.svg" loading="lazy" alt="" class="w-4 h-4" />
            Book a Demo
          </a>
          <a
            href="/get-started"
            app-download=""
            cta=""
            cta_location="ai_auto_edits_section"
            cta_type="download"
            class="inline-flex items-center px-5 py-3 bg-[#003B46] text-white font-semibold rounded-lg text-sm transition-[background,transform] duration-150 hover:bg-[#025262] hover:-translate-y-px"
          >
            Start Free Trial
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Mid-grid features -->
<section class="py-12 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <!-- Dictionary card -->
      <div
        id="trigger-dictionary"
        data-gsap-trigger="dictionary"
        class="flex flex-col gap-5 bg-white rounded-2xl p-6 border border-[rgba(0,59,70,0.08)] shadow-sm"
      >
        <div>
          <h3 class="text-xl font-bold text-[#003B46] mb-2">Every pet. Every detail. One place.</h3>
          <p class="text-sm text-[#4a5568] leading-relaxed">Full client and pet profiles — feeding notes, vet contacts, vaccination records — accessible in seconds by anyone on your team.</p>
        </div>
        <div class="bg-[#fdfde9] rounded-xl p-4 border border-[rgba(0,59,70,0.06)] flex-1">
          <div class="flex items-center justify-between mb-3">
            <span class="font-bold text-[#003B46]">Your Dictionary</span>
            <img src="https://placehold.co/32x32/eee/888?text=D" loading="lazy" alt="" class="w-8 h-8 rounded" />
          </div>
          <div class="flex flex-wrap gap-2 overflow-hidden">
            {#each dictionaryChips as word}
              <span
                data-gsap-target="dictionary-chip"
                class="px-3 py-1 bg-white border border-[rgba(0,59,70,0.12)] rounded-full text-sm font-semibold text-[#1a2e35]"
              >{word}</span>
            {/each}
          </div>
        </div>
      </div>

      <!-- Snippets card -->
      <div
        data-gsap-trigger="dictionary"
        class="flex flex-col gap-5 bg-white rounded-2xl p-6 border border-[rgba(0,59,70,0.08)] shadow-sm"
      >
        <div>
          <h3 class="text-xl font-bold text-[#003B46] mb-2">Bookings that run themselves</h3>
          <p class="text-sm text-[#4a5568] leading-relaxed">Create management shortcuts for the things your team says over and over. From scheduling links to FAQs, just speak a cue and get the full formatted text.</p>
        </div>
        <div class="bg-stone-50 rounded-xl p-4 border border-[rgba(0,59,70,0.06)] flex-1">
          <div class="flex items-center justify-between mb-3">
            <span class="font-bold text-[#003B46]">Your Snippets</span>
            <img src="https://placehold.co/32x32/eee/888?text=S" loading="lazy" alt="" class="w-8 h-8 rounded" />
          </div>
          <div class="flex flex-wrap gap-2 overflow-hidden">
            <div data-gsap-target="dictionary-chip" class="flex flex-col gap-1">
              <span class="px-3 py-1 bg-[#003B46] text-white rounded-full text-sm font-semibold">Calendar</span>
              <div class="flex items-start gap-1 pl-1">
                <img src="https://placehold.co/16x16/eee/888?text=~" alt="" class="w-4 h-4 mt-1 shrink-0" />
                <span class="px-3 py-1 bg-white border border-[rgba(0,59,70,0.12)] rounded-xl text-xs font-medium text-[#1a2e35]">You can book a 30-minute call with me here: calendly.com/GeneraGenera</span>
              </div>
            </div>
            {#each snippetChips as snip}
              <span
                data-gsap-target="dictionary-chip"
                class="px-3 py-1 bg-white border border-[rgba(0,59,70,0.12)] rounded-full text-sm font-semibold text-[#1a2e35]"
              >{snip}</span>
            {/each}
          </div>
        </div>
      </div>

      <!-- Payments card -->
      <div class="flex flex-col gap-5 bg-white rounded-2xl p-6 border border-[rgba(0,59,70,0.08)] shadow-sm">
        <div>
          <h3 class="text-xl font-bold text-[#003B46] mb-2">Get paid without chasing anyone</h3>
          <p class="text-sm text-[#4a5568] leading-relaxed">Auto-charge on collection, bulk invoicing, direct debit and card payments. Your money arrives on time, every time.</p>
        </div>
        <div
          class="flex-1 rounded-xl overflow-hidden bg-stone-50 border border-[rgba(0,59,70,0.06)] min-h-[160px]"
          data-is-ix2-target="1"
          data-animation-type="lottie"
          data-src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68fa7bace7c508984e7ccdf4_Main%204.json"
          data-loop="0"
          data-direction="1"
          data-autoplay="0"
          data-renderer="svg"
          data-default-duration="0"
          data-duration="7.166666666666667"
          data-ix2-initial-state="0"
        ></div>
      </div>

      <!-- Routes card -->
      <div class="flex flex-col gap-5 bg-white rounded-2xl p-6 border border-[rgba(0,59,70,0.08)] shadow-sm">
        <div>
          <h3 class="text-xl font-bold text-[#003B46] mb-2">Routes planned in minutes</h3>
          <p class="text-sm text-[#4a5568] leading-relaxed">Genera automatically optimises your collection routes, letting you move between stops — just like you do.</p>
        </div>
        <div class="relative flex-1 rounded-xl overflow-hidden bg-stone-50 border border-[rgba(0,59,70,0.06)] min-h-[160px] flex items-center justify-center">
          <div class="flag text-2xl leading-loose text-center px-4 overflow-hidden line-clamp-2">
            🇺🇸 🇨🇳 🇩🇪 🇯🇵 🇮🇳 🇬🇧 🇫🇷 🇮🇹 🇨🇦 🇧🇷 🇷🇺 🇰🇷 🇦🇺 🇪🇸 🇲🇽 🇮🇩 🇹🇷 🇳🇱
          </div>
          <div class="absolute inset-0 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 707 755" fill="none" class="opacity-0">
              <path d="M364.912,112.589 C32.164,112.589 184.371,580.696 483.035,723.146 780.891,769.76 694.001,626.363 694.001,362.801 688.75933,244.86965 683.51767,126.93831 678.276,9.00696 461.1955,6.38627 244.115,3.76559 27.0345,1.1449 27.0345,71.9036 27.0345,142.6623 27.0345,213.421 -5.483,439.332 -46.0837,831.346 179.035,740.18 538.305,622.979 697.659,112.589 364.912,112.589 " id="curve-flag"/>
            </svg>
          </div>
          <div class="absolute bottom-4 left-0 right-0 text-center">
            <span class="text-lg font-bold text-[#003B46]">100+ Languages</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Team / On the go section -->
<section class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Left: copy -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-wrap gap-2">
          {#each platforms as platform}
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-[#003B46] text-white text-xs font-semibold rounded-full">
              <img src="https://placehold.co/24x24/fff/003B46?text={platform[0]}" alt="" class="w-4 h-4 rounded-full" />
              {platform}
            </div>
          {/each}
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-[#003B46] leading-tight">Your team, sorted</h2>
        <p class="text-lg text-[#4a5568] leading-relaxed">Genera handles everything from onboarding, feeding schedules, bookings, and payment in a single portal syncing everywhere.</p>
        <div>
          <a
            href="/get-started"
            app-download=""
            cta=""
            cta_location="on_the_go_section"
            cta_type="get_started"
            class="inline-flex items-center px-6 py-3 bg-[#003B46] text-white font-semibold rounded-lg text-sm transition-[background,transform] duration-150 hover:bg-[#025262] hover:-translate-y-px"
          >
            Start Free Trial
          </a>
        </div>
      </div>

      <!-- Right: device mockups -->
      <div class="relative rounded-2xl overflow-hidden bg-stone-100 aspect-[4/3]">
        <img src="https://placehold.co/700x500/f0f0e8/888?text=Dashboard" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-end justify-center pb-4">
          <img src="https://placehold.co/600x400/eee/888?text=Dashboard+UI" alt="" class="w-4/5 rounded-xl shadow-xl" />
        </div>
      </div>

    </div>
    <div class="h-24"></div>
  </div>
</section>
