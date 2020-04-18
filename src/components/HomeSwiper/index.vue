<template>
  <section class="hero-slider hero-style-3">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        class="swiper-slide"
        v-for="(slide, index) in slideData"
        :key="`home_slide_${index}`"
      >
        <div
          class="slide-inner slide-bg-image"
          :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
        >
          <b-container>
            <div data-swiper-parallax="200" class="slide-subtitle">
              <h4>{{ slide.subtitle }}</h4>
            </div>
            <div data-swiper-parallax="300" class="slide-title">
              <h2>{{ slide.title }}</h2>
            </div>
            <div data-swiper-parallax="400" class="slide-text">
              <p>
                {{ slide.text }}
              </p>
            </div>
            <div class="clearfix"></div>
            <div data-swiper-parallax="500" class="slide-btns">
              <a href="#" class="theme-btn">加入我们</a>
              <a href="#" class="theme-btn one">成为密探</a>
            </div>
          </b-container>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </section>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      slideData: [
        {
          title: 'Build Your Construction',
          subtitle: 'Constructo Builders',
          text:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been',
          backgroundImage: require('@/assets/slide-1.jpg')
        },
        {
          title: 'Build Your Construction',
          subtitle: 'Constructo Builders',
          text:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been',
          backgroundImage: require('@/assets/slide-2.jpg')
        },
        {
          title: 'Build Your Construction',
          subtitle: 'Constructo Builders',
          text:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been',
          backgroundImage: require('@/assets/slide-3.jpg')
        }
      ],
      swiperOptions: {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false
        },
        watchSlidesProgress: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return (
              '<span class="' + className + '">' + 0 + (index + 1) + '</span>'
            )
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          progress() {
            const interleaveOffset = 0.5
            for (let i = 0; i < this.slides.length; i++) {
              const slideProgress = this.slides[i].progress
              const innerOffset = this.width * interleaveOffset
              const innerTranslate = slideProgress * innerOffset
              this.slides[i].querySelector('.slide-inner').style.transform =
                'translate3d(' + innerTranslate + 'px, 0, 0)'
            }
          },

          touchStart() {
            for (let i = 0; i < this.slides.length; i++) {
              this.slides[i].style.transition = ''
            }
          },

          setTransition(speed) {
            for (let i = 0; i < this.slides.length; i++) {
              this.slides[i].style.transition = speed + 'ms'
              this.slides[i].querySelector('.slide-inner').style.transition =
                speed + 'ms'
            }
          }
        }
      }
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
