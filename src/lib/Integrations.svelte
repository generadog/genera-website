<script>
  const dogs = [
    '/dogs/619252915_17976169085975054_2239169073340721668_n.webp',
    '/dogs/619384993_17956837484913850_5474773453336525933_n.webp',
    '/dogs/619808091_17959676694018804_7228477999900611041_n.jpg',
    '/dogs/621407076_17988485114763421_6277406045514002343_n.webp',
    '/dogs/622136697_18095855530938145_4446718795604875245_n.webp',
    '/dogs/622283251_18096336142936702_1757321061378554105_n.webp',
    '/dogs/622586384_18063629108295559_717920122193523125_n.webp',
    '/dogs/622637087_18086536397142473_1854540094309391778_n.webp',
    '/dogs/622799507_18091366838082962_5469349137895433601_n.webp',
    '/dogs/623014623_18104301205751573_5242225996101433523_n.webp',
    '/dogs/623426368_18056750699355570_8463801854914326260_n.webp',
    '/dogs/624834568_18140231131487374_1235446103587249466_n.webp',
    '/dogs/624834574_18138625399487735_2449484302130463085_n.webp',
    '/dogs/626357482_18066998177632825_1144016646642440372_n.webp',
    '/dogs/626645927_18147699304454486_3793814568521981918_n.webp',
    '/dogs/628654350_18333203500243592_6501104850384387586_n.webp',
    '/dogs/629412332_18345508966227198_3084753530456717189_n.webp',
    '/dogs/654000351_18091831772126826_6709149008595317881_n.webp',
    '/dogs/654955921_18109703218815554_8644846704783573408_n.webp',
    '/dogs/656741218_18097454822072207_6619120984759997656_n.webp',
  ];
</script>

<section class="section_app-integrations" style="min-height: 100vh;">
  <div class="padding-global padding-section-xlarge">
    <div class="container-large">
      <div class="integrations_grid">

        <!-- Left content -->
        <div id="w-node-integrations-left" class="integrations_left">
          <h2 class="text-color-secondary">Everything you need. Nothing you don't.</h2>
          <div class="spacer-large"></div>
          <div class="max-width-small align-center">
            <p class="text-size-large">
              Built by the people behind Duncan's Dog Co — 15 years in the industry, finally turning that experience into software that makes your business run the way it should.
            </p>
            <div class="spacer-large"></div>
            <div class="spacer-large"></div>
          </div>
        </div>

        <!-- Right: dog photos on GSAP motion path -->
        <div class="icon_svg-wrapper">
          <div class="w-dyn-list">
            <div role="list" class="icon-list w-dyn-items">
              {#each dogs as src}
                <div role="listitem" class="icon-item w-dyn-item">
                  <img {src} alt="Dog" class="icon-image dog-avatar" loading="lazy" />
                </div>
              {/each}
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 3570 1125" fill="none" class="icon_svg hide-mobile-landscape">
            <path d="M0.629639 1.15771C82.9263 189.969 357.34 608.012 796.621 769.692C1235.9 931.372 1567.15 773.202 1711.79 678.175C1891.9 559.839 2155.65 289.609 2443.93 327.36C2732.2 365.111 3187.5 563.779 3568.82 1124.32" id="icon-path-web" stroke=""></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 3572 438" fill="none" class="icon_svg show-mobile-landscape">
            <path d="M0.411621 1.27466H1191.81C1219.24 74.606 1310.71 236.967 1457.14 299.761C1603.56 362.555 1713.98 301.125 1762.19 264.217C1822.23 218.258 1910.15 113.305 2006.24 127.967C2102.33 142.628 2254.1 219.788 2381.2 437.493H3571.73" id="icon-path-mobile"></path>
          </svg>

          <!-- Mobile Rive Animation -->
          <div class="integration-mobile_wrapper no-max-width hide-mobile-landscape">
            <div class="rive-wrapper position-relative">
              <div class="mobile-rive z-index-2 w-embed">
                <div data-rive-url="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/69864656b7cb39c4939a8551_Chat%20Animation%20-%20iOS%20v7.riv" class="mobile-rive z-index-2">
                  <canvas style="height:100%;width:100%"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<style>
  .dog-avatar {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10%;
    border: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  }
</style>
