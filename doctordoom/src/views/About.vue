<script>
// @ is an alias to /src
import barbarian from '@/components/barbarian.vue'
import archer from '@/components/archer.vue'

export default {
  name: 'about',
  components: {
    barbarian,
    archer
  }

}

</script>

<template>
  <div id="about">
    <header class="about">
      <h1>This is an about page</h1>
    </header>
    <section class="container clashofcards">
      <div class="wrapper">
        <barbarian />
        <!-- end clash-card barbarian-->
      </div>
      <!-- end wrapper -->
      <div class="wrapper">
        <div class="clash-card archer">
          <div class="clash-card__image clash-card__image--archer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" alt="archer" />
          </div>
          <div class="clash-card__level clash-card__level--archer">Level 5</div>
          <div class="clash-card__unit-name">The Archer</div>
          <div class="clash-card__unit-description">
            The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.
          </div>
          <div class="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
            <div class="one-third">
              <div class="stat">25<sup>S</sup></div>
              <div class="stat-value">Training</div>
            </div>
            <div class="one-third">
              <div class="stat">24</div>
              <div class="stat-value">Speed</div>
            </div>
            <div class="one-third no-border">
              <div class="stat">300</div>
              <div class="stat-value">Cost</div>
            </div>
          </div>
        </div>
        <!-- end clash-card archer-->
      </div>
      <!-- end wrapper -->
      <div class="wrapper">
        <div class="clash-card giant">
          <div class="clash-card__image clash-card__image--giant">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png" alt="giant" />
          </div>
          <div class="clash-card__level clash-card__level--giant">Level 5</div>
          <div class="clash-card__unit-name">The Giant</div>
          <div class="clash-card__unit-description">
            Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you'll see their fury unleashed!
          </div>
          <div class="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
            <div class="one-third">
              <div class="stat">2<sup>M</sup></div>
              <div class="stat-value">Training</div>
            </div>
            <div class="one-third">
              <div class="stat">12</div>
              <div class="stat-value">Speed</div>
            </div>
            <div class="one-third no-border">
              <div class="stat">2250</div>
              <div class="stat-value">Cost</div>
            </div>
          </div>
        </div>
        <!-- end clash-card giant-->
      </div>
      <!-- end wrapper -->
    </section>
  </div>
</template>
