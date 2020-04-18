<template>
  <section class="testimonial-section">
    <div class="container">
      <!-- Sec Title -->
      <div class="section-title-s2">
        <span>Client Testimonials</span>
        <h2>Service Recipient Says</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <vue-tiny-slider
        v-bind="sliderProps"
        class="testimonials-carousel owl-carousel owl-theme"
      >
        <div
          v-for="(testimonial, index) in testimonialData"
          :key="`home_testimonial_${index}`"
        >
          <div class="testimonials-item">
            <h2>{{ testimonial.title }}</h2>
            <div class="testimonials-stars">
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
            </div>
            <p>
              {{ testimonial.desc }}
            </p>
            <img :src="testimonial.avatar" />
            <h3>
              {{ testimonial.name }}
              <br />
              <span>{{ testimonial.identity }}</span>
            </h3>
          </div>
        </div>
      </vue-tiny-slider>
      <div class="dots">
        <template v-for="(item, index) in testimonialData">
          <div class="dot" v-if="!(index % 3)" :key="`dot_${index}`">
            <span></span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'
export default {
  name: 'HomeTestimonial',
  components: {
    VueTinySlider
  },
  data() {
    return {
      sliderProps: {
        loop: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        navPosition: 'bottom',
        gutter: 20,
        nav: true,
        speed: 800,
        controls: false,
        autoplay: true,
        navContainer: '.dots',
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          750: {
            items: 2
          },
          1024: {
            items: 3
          }
        }
      },
      testimonialData: [
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials1.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials2.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials1.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials2.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials1.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials2.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials1.png')
        },
        {
          title: 'Awesome Service',
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy texty",
          name: 'Kolis Muller',
          identity: 'USA Citizen',
          avatar: require('@/assets/testimonials2.png')
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.dots {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  .dot {
    cursor: pointer;
    user-select: none;
    outline: none;
    span {
      background-color: transparent;
      border: 1px solid #9a9a9a;
      margin: 5px;
      width: 10px;
      height: 10px;
      display: block;
      transition: opacity 200ms ease;
      border-radius: 30px;
    }
    &.tns-nav-active {
      span {
        background: #869791;
      }
    }
  }
}
</style>
