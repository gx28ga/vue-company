<template>
  <section class="portfolio-section section-padding">
    <div class="container">
      <b-row>
        <b-col :lg="6" :offset="3">
          <div class="section-title-s2">
            <span>Recently Completed</span>
            <h2>Our Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <vue-tiny-slider
            v-bind="sliderProps"
            class="portfolio-grids portfolio-slider"
          >
            <div
              class="grid"
              v-for="(portfolio, index) in portfolioData"
              :key="`home_portfolio_${index}`"
            >
              <div class="img-holder">
                <img :src="portfolio.image" alt />
                <div class="service-image-overlay"></div>
              </div>
              <div class="details">
                <h3>
                  <a href="#">{{ portfolio.title }}</a>
                </h3>
                <p class="cat">
                  {{ portfolio.desc }}
                </p>
              </div>
            </div>
          </vue-tiny-slider>
        </b-col>
      </b-row>
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'
export default {
  name: 'HomePortfolio',
  components: {
    VueTinySlider
  },
  data() {
    return {
      sliderProps: {
        mouseDrag: true,
        items: 3,
        gutter: 30,
        speed: 500,
        loop: true,
        nav: false,
        controlsText: [
          '<i class="fi flaticon-back"></i>',
          '<i class="fi flaticon-next"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },

          650: {
            items: 2,
            center: false,
            margin: 10
          },

          992: {
            items: 3
          }
        }
      },
      portfolioData: [
        {
          title: 'Residential',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
          image: require('@/assets/portfolio-img-1.jpg')
        },
        {
          title: 'Commercial',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
          image: require('@/assets/portfolio-img-2.jpg')
        },
        {
          title: 'Industrial',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
          image: require('@/assets/portfolio-img-3.jpg')
        },
        {
          title: 'Commercial',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor',
          image: require('@/assets/portfolio-img-1.jpg')
        }
      ]
    }
  }
}
</script>
