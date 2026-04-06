<script>
  const useCases = [
    {
      id: 'Accessibility',
      label: 'Accessibility',
      pageLink: '/accessibility',
      heading: 'Genera for <em>Accessibility</em>',
      body: 'Texts, emails, DMs, calls — all landing in different places. You spend more time managing messages than caring for dogs.',
    },
    {
      id: 'Creators',
      label: 'Creators',
      pageLink: '/content-creators',
      heading: 'Genera for <em>Creators</em>',
      body: 'Sunday evenings lost to invoicing. Manually building invoices for every client, every week. Chasing payments.',
    },
    {
      id: 'CustomerSupport',
      label: 'Customer Support',
      pageLink: '/customer-support',
      heading: 'Genera for <em>Customer Support</em>',
      body: 'Pickup logistics that break your brain. Juggling driver routes, pickup windows and last-minute changes with no real system. Just a spreadsheet and a prayer.',
    },
    {
      id: 'Updates',
      label: 'Updates',
      pageLink: '/developers',
      heading: 'Genera for <em>Updates</em>',
      body: 'Full client and pet profiles — feeding notes, vet contacts, vaccination records — accessible in seconds by anyone on your team.',
    },
    {
      id: 'Lawyers',
      label: 'Lawyers',
      pageLink: '/lawyers',
      heading: 'Genera for <em>Lawyers</em>',
      body: '24/7 online booking portal for your clients. No more inbound messages — just a clean calendar that fills itself.',
    },
    {
      id: 'Leaders',
      label: 'Leaders',
      pageLink: '/leaders',
      heading: 'Genera for <em>Leaders</em>',
      body: 'Auto-charge on collection, bulk invoicing, direct debit and card payments. Your money arrives on time, every time.',
    },
    {
      id: 'Sales',
      label: 'Sales',
      pageLink: '/sales',
      heading: 'Genera for <em>Sales</em>',
      body: 'Drag-and-drop transport scheduling with optimised routes for your drivers. No more scrambling on collection day.',
    },
    {
      id: 'Students',
      label: 'Students',
      pageLink: '/students',
      heading: 'Genera for <em>Students</em>',
      body: 'Staff schedules, shift planning and payroll prep — all in one system. Know who\'s in, who\'s driving, and what everyone\'s owed.',
    },
    {
      id: 'Teams',
      label: 'Teams',
      pageLink: '/business',
      heading: 'Genera for <em>Teams</em>',
      body: 'UK-based support from people who\'ve run a daycare. GDPR &amp; DEFRA compliant, cloud-based and always up to date.',
    },
  ];

  let activeTab = useCases[0].id;
</script>

<section class="section_use-cases min-height-desktop-50rem">
  <div class="padding-global">
    <div class="padding-section-large">
      <div class="container-large">
        <div class="max-width-medium-plus">
          <h2 class="heading-style-h1">Genera is made <span class="text-color-tertiary">for&nbsp;you</span></h2>
        </div>
        <div class="spacer-xxlarge"></div>

        <!-- Mobile tab links -->
        <div class="show-tablet">
          <div class="w-dyn-list">
            <div role="list" class="tab-links-wrap w-dyn-items">
              {#each useCases as uc}
                <div role="listitem" class="w-dyn-item">
                  <a href={uc.pageLink} class="use-cases_tab-link bigger w-inline-block">
                    <div>{uc.label}</div>
                  </a>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Desktop tabs -->
        <div class="use-cases_tab align-bottom hide-tablet">
          <div class="use-cases_tab-menu w-tab-menu">
            {#each useCases as uc}
              <button
                class="use-cases_tab-link bigger w-inline-block w-tab-link {activeTab === uc.id ? 'w--current' : ''}"
                on:click={() => activeTab = uc.id}
                type="button"
              >
                <div>{uc.label}</div>
              </button>
            {/each}
          </div>

          <div class="use-cases_tab-content w-tab-content">
            {#each useCases as uc}
              <div class="use-cases_tab-pane w-tab-pane {activeTab === uc.id ? 'w--tab-active' : ''}">
                {#if activeTab === uc.id}
                  <img
                    src="https://placehold.co/800x500/f5f5f0/888?text={encodeURIComponent(uc.label)}"
                    loading="lazy"
                    alt=""
                    class="use-cases_image"
                  />
                  <div class="usercase-rtf w-richtext">
                    <h3>{@html uc.heading}</h3>
                  </div>
                  <p class="text-size-large">{uc.body}</p>
                  <div class="button-group is-left">
                    <a href={uc.pageLink} cta_type="learn_more" cta="" cta_location="home_tab_section" class="button is-secondary is-transparent w-button">Learn more</a>
                    <a href="/get-started" app-download="" cta="" cta_location="home_tab_section" cta_type="get_started" class="button w-button">Start Free Trial</a>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
