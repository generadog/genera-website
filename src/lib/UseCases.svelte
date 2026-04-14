<script>
  const features = [
    {
      id: 'ClientManagement',
      label: 'Client Management',
      heading: '<em>Client Management</em>',
      body: 'Every dog, every owner, every detail — all in one place. Store full pet profiles including breed, vet contacts, vaccination records, feeding instructions, and behavioural notes. Your whole team sees the same information in real time, so nothing gets missed and no one has to ask twice.',
    },
    {
      id: 'Bookings',
      label: 'Bookings',
      heading: '<em>Bookings</em>',
      body: 'Take the back-and-forth out of scheduling. Clients book online 24/7, your calendar updates instantly, and you get notified without lifting a finger. Recurring bookings, waitlists, and capacity limits all handled automatically — so your days fill up without the admin.',
    },
    {
      id: 'Billing',
      label: 'Billing',
      heading: '<em>Billing</em>',
      body: 'Get paid without chasing anyone. Genera auto-generates invoices at the end of each session, sends payment reminders, and supports direct debit, card, and bulk billing. Late payments become a thing of the past when the system does the asking for you.',
    },
    {
      id: 'Routing',
      label: 'Routing',
      heading: '<em>Routing</em>',
      body: 'Plan collection and drop-off routes in minutes, not hours. Drag dogs onto a map, let Genera optimise the order, and share a live route with your drivers. Last-minute cancellations? The route updates automatically, no spreadsheet required.',
    },
    {
      id: 'StaffManagement',
      label: 'Staff Management',
      heading: '<em>Staff Management</em>',
      body: 'Keep your whole team on the same page. Assign shifts, manage availability, and track who\'s responsible for which dogs on any given day. Payroll prep, holiday tracking, and role-based access so staff only see what they need to.',
    },
    {
      id: 'CustomerPortal',
      label: 'Customer Portal',
      heading: '<em>Customer Portal</em>',
      body: 'Give your clients a polished self-service experience. They can book, update pet details, view invoices, and upload vaccination certificates — all without calling you. A branded portal that makes your business look as professional as it runs.',
    },
  ];

  let activeTab = features[0].id;
</script>

<section class="section_use-cases" style="min-height: 100vh;">
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
              {#each features as f}
                <div role="listitem" class="w-dyn-item">
                  <a href="#{f.id}" class="use-cases_tab-link bigger w-inline-block">
                    <div>{f.label}</div>
                  </a>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Desktop tabs -->
        <div class="use-cases_tab align-bottom hide-tablet">
          <div class="use-cases_tab-menu w-tab-menu">
            {#each features as f}
              <button
                class="use-cases_tab-link bigger w-inline-block w-tab-link {activeTab === f.id ? 'w--current' : ''}"
                on:click={() => activeTab = f.id}
                type="button"
              >
                <div>{f.label}</div>
              </button>
            {/each}
          </div>

          <div class="use-cases_tab-content w-tab-content">
            {#each features as f}
              <div class="use-cases_tab-pane w-tab-pane {activeTab === f.id ? 'w--tab-active' : ''}">
                {#if activeTab === f.id}
                  <img
                    src="https://placehold.co/800x500/f5f5f0/888?text={encodeURIComponent(f.label)}"
                    loading="lazy"
                    alt=""
                    class="use-cases_image"
                  />
                  <div class="usercase-rtf w-richtext">
                    <h3>{@html f.heading}</h3>
                  </div>
                  <p class="text-size-large">{f.body}</p>
                  <div class="button-group is-left mt-5">
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
