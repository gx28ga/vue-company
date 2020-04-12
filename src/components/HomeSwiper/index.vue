<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="hero-slider">
    <swiper-slide class="swiper-slide">
      <div
        class="slide-inner slide-bg-image"
        :style="{ backgroundImage: `url(${require('@/assets/slide-1.jpg')})` }"
      >
        <div class="container">
          <div data-swiper-parallax="200" class="slide-subtitle">
            <h4>Constructo Builders</h4>
          </div>
          <div data-swiper-parallax="300" class="slide-title">
            <h2>Build Your Construction</h2>
          </div>
          <div data-swiper-parallax="400" class="slide-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been
            </p>
          </div>
          <div class="clearfix"></div>
          <div data-swiper-parallax="500" class="slide-btns">
            <a href="#" class="theme-btn">Explore More</a>
            <a href="#" class="theme-btn one">Get Started</a>
          </div>
        </div>
      </div>
      <!-- end slide-inner -->
    </swiper-slide>
    <!-- end swiper-slide -->

    <swiper-slide class="swiper-slide">
      <div
        class="slide-inner slide-bg-image"
        :style="{ backgroundImage: `url(${require('@/assets/slide-2.jpg')})` }"
      >
        <div class="container">
          <div data-swiper-parallax="200" class="slide-subtitle">
            <h4>Constructo Builders</h4>
          </div>
          <div data-swiper-parallax="300" class="slide-title">
            <h2>Build Your Construction</h2>
          </div>
          <div data-swiper-parallax="400" class="slide-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been
            </p>
          </div>
          <div class="clearfix"></div>
          <div data-swiper-parallax="500" class="slide-btns">
            <a href="#" class="theme-btn">Explore More</a>
            <a href="#" class="theme-btn one">Get Started</a>
          </div>
        </div>
      </div>
      <!-- end slide-inner -->
    </swiper-slide>
    <!-- end swiper-slide -->

    <swiper-slide class="swiper-slide">
      <div
        class="slide-inner slide-bg-image"
        :style="{ backgroundImage: `url(${require('@/assets/slide-3.jpg')})` }"
      >
        <div class="container">
          <div data-swiper-parallax="200" class="slide-subtitle">
            <h4>Constructo Builders</h4>
          </div>
          <div data-swiper-parallax="300" class="slide-title">
            <h2>Build Your Construction</h2>
          </div>
          <div data-swiper-parallax="400" class="slide-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been
            </p>
          </div>
          <div class="clearfix"></div>
          <div data-swiper-parallax="500" class="slide-btns">
            <a href="#" class="theme-btn">Explore More</a>
            <a href="#" class="theme-btn one">Get Started</a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {}
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
  }
}
</script>

<style lang="scss">
.hero-slider {
  width: 100%;
  height: 845px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  z-index: 0;
  .container {
    text-align: center;
  }
}

.hero-slider .swiper-slide {
  overflow: hidden;
  color: #fff;
}
.hero-slider .swiper-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.hero-slider .slide-inner {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: left;
}
.hero-slider .slide-inner:before {
  background: #000000;
  bottom: 0;
  content: '';
  left: 0;
  opacity: 0.7;
  position: absolute;
  right: 0;
  top: 0;
}
.hero-slider .swiper-button-prev,
.hero-slider .swiper-button-next {
  background: rgba(255, 255, 255, 0.3);
  width: 55px;
  height: 55px;
  line-height: 55px;
  margin-top: -30px;
  text-align: center;
  border-radius: 55px;
  transition: all 0.3s;
}
.hero-slider .swiper-button-prev:hover,
.hero-slider .swiper-button-next:hover {
  background: #4a4d50;
}

.hero-slider .swiper-button-prev {
  left: 25px;
}
.hero-slider .swiper-button-prev:before {
  font-family: 'Flaticon';
  content: '\f106';
  font-size: 20px;
  color: #fff;
}
.hero-slider .swiper-button-next {
  right: 25px;
}
.hero-slider .swiper-button-next:before {
  font-family: 'Flaticon';
  content: '\f103';
  font-size: 20px;
  color: #fff;
}
.hero-slider .swiper-pagination-bullet {
  font-size: 15px;
  color: #d9d9d9;
  margin: 0 5px;
  opacity: 1;
  background: transparent;
  position: relative;
}
.hero-slider .swiper-pagination-bullet:before {
  content: '';
  background: #fff;
  width: 1px;
  height: 15px;
  position: absolute;
  left: 3px;
  top: 0;
  opacity: 0;
  transition: all 0.3s;
}
.hero-slider .swiper-pagination-bullet-active {
  color: #fff;
}
.hero-slider .swiper-pagination-bullet-active:before {
  opacity: 1;
  top: -20px;
}
.hero-slider .swiper-container-horizontal > .swiper-pagination-bullets,
.hero-slider .swiper-pagination-custom,
.hero-slider .swiper-pagination-fraction {
  bottom: 120px;
}
.hero-slider
  .swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 13px;
}
.slide-subtitle h4 {
  font-family: 'Crimson Text', serif;
  font-size: 1.75rem;
  color: #fff;
  margin: 0;
}
.slide-title {
  max-width: 800px;
}
.slide-title h2 {
  font-size: 4.5rem;
  font-weight: bold;
  color: #f47425;
  margin: 0.2em 0 0.38em;
}
.slide-text {
  max-width: 550px;
}
.slide-text p {
  font-size: 1.25rem;
  color: #fff;
  margin: 0 0 2em;
}
.slide-btns > a:first-child {
  margin-right: 15px;
}
.slide-title,
.slide-text {
  margin-left: auto;
  margin-right: auto;
}
</style>
