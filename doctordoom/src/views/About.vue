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
      <p class="description">Cette section est librement inspiré par ceci: <a href="https://codepen.io/drehimself/pen/QNXpyp"> Codepen de Andre Madarang</a></p>
    </header>
    <section class="container clashofcards">
      <barbarian />
        <!-- end clash-card barbarian-->
      <archer />
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
<style lang="scss">
a{
  &:hover{
    color:lighten(adjust-hue(#42b983, 20), 10%);
  }
}
</style>
