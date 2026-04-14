<script>
  const photos = [
    '/ddd/488492610_18502164190059594_3712096076308656852_n.jpg',
    '/ddd/491467569_18507494443059594_8479495282250400288_n.jpg',
    '/ddd/498942343_18511204279059594_7796134097760515449_n.jpg',
    '/ddd/504820478_18515945419059594_8805346126677294632_n.jpg',
    '/ddd/521256032_18522779356059594_2010817657284673606_n.jpg',
    '/ddd/583685323_18546833764059594_5450344762665854455_n.jpg',
    '/ddd/602111657_18093161570307886_5957452383087994419_n.jpeg',
    '/ddd/613133388_18557216959059594_4343216391628407870_n.jpg',
    '/ddd/622006984_18092988773314387_6346994931620663798_n.webp',
    '/ddd/625008928_17992200494751013_2214912304626417892_n.webp',
    '/ddd/657949510_18582444619059594_4227516315204528225_n.jpg',
  ];
</script>

<section class="section_home-clients">
  <div class="padding-global">
    <div class="spacer-huge"></div>
    <div class="container-large">
      <h3 class="heading-style-h4 text-color-secondary">
        You got into this for the dogs — not the admin. Genera handles the rest.
      </h3>
    </div>
  </div>
  <div class="spacer-large"></div>

  <!-- Photo ticker strip — duplicated 3× for a seamless infinite loop -->
  <div class="photo-ticker-mask">
    <div class="photo-ticker-track">
      {#each [0, 1, 2] as _}
        {#each photos as src}
          <div class="photo-tile">
            <img {src} alt="Dog daycare photo" loading="lazy" />
          </div>
        {/each}
      {/each}
    </div>
  </div>

  <div class="padding-global text-align-left">
    <div class="container-large">
      <div class="spacer-xxlarge"></div>
    </div>
  </div>
</section>

<style>
  .photo-ticker-mask {
    overflow: hidden;
    width: 100%;
  }

  .photo-ticker-track {
    display: flex;
    gap: 12px;
    width: max-content;
    animation: photo-ticker 40s linear infinite;
  }

  .photo-ticker-track:hover {
    animation-play-state: paused;
  }

  .photo-tile {
    flex-shrink: 0;
    width: 220px;
    height: 220px;
    border-radius: 12px;
    overflow: hidden;
  }

  .photo-tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .photo-tile:hover img {
    transform: scale(1.05);
  }

  @keyframes photo-ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(calc(-100% / 3)); }
  }

  @media (max-width: 640px) {
    .photo-tile {
      width: 160px;
      height: 160px;
    }
  }
</style>
