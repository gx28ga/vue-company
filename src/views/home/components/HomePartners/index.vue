<template>
  <section class="partners-section">
    <b-container>
      <vue-tiny-slider
        v-bind="sliderProps"
        class="partner-grids partners-slider"
      >
        <div
          class="grid"
          v-for="(partner, index) in partnerData"
          :key="`home_partner_${index}`"
        >
          <img :src="partner.image" />
        </div>
      </vue-tiny-slider>
    </b-container>
  </section>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'
export default {
  components: {
    VueTinySlider
  },
  name: 'HomePartner',
  data() {
    return {
      sliderProps: {
        autoplay: true,
        mouseDrag: true,
        gutter: 30,
        speed: 300,
        items: 5,
        nav: false,
        controls: false,
        responsive: {
          0: {
            items: 2
          },

          550: {
            items: 3
          },

          992: {
            items: 4
          },

          1200: {
            items: 5
          }
        },
        autoplayButtonOutput: false
      },
      partnerData: [
        {
          image: require('@/assets/partner-logo1.jpg')
        },
        {
          image: require('@/assets/partner-logo2.jpg')
        },
        {
          image: require('@/assets/partner-logo3.jpg')
        },
        {
          image: require('@/assets/partner-logo4.jpg')
        },
        {
          image: require('@/assets/partner-logo5.jpg')
        },
        {
          image: require('@/assets/partner-logo5.jpg')
        },
        {
          image: require('@/assets/partner-logo5.jpg')
        }
      ]
    }
  }
}
</script>
