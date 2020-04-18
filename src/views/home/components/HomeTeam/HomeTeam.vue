<template>
  <section class="team-section">
    <div class="container">
      <b-row>
        <b-col :lg="6" :offset="3">
          <div class="section-title-s2">
            <span>Team members</span>
            <h2>Our Team</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="content-area">
      <vue-tiny-slider v-bind="sliderProps" class="team-grids team-slider">
        <div
          class="grid"
          v-for="(member, index) in teamData"
          :key="`home_team_${index}`"
        >
          <div class="inner">
            <div class="img-holder">
              <img :src="member.image" alt />
            </div>
            <div class="details">
              <h4>{{ member.name }}</h4>
              <span>{{ member.position }}</span>
              <div class="social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </vue-tiny-slider>
    </div>
  </section>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'
export default {
  name: 'HomeTeam',
  components: {
    VueTinySlider
  },
  data() {
    return {
      teamData: [
        {
          name: 'Mr J. Walsh',
          position: 'Our Staff',
          image: require('@/assets/our-team1.jpg')
        },
        {
          name: 'Mr D. Adams',
          position: 'Our Staff',
          image: require('@/assets/our-team2.jpg')
        },
        {
          name: 'Mr J. Ace',
          position: 'Our Staff',
          image: require('@/assets/our-team3.jpg')
        },
        {
          name: 'Mr G. Newman',
          position: 'Our Staff',
          image: require('@/assets/our-team4.jpg')
        },
        {
          name: 'Mr G.Mulan dow',
          position: 'Our Staff',
          image: require('@/assets/our-team5.jpg')
        },
        {
          name: 'Mr J. Walsh',
          position: 'Our Staff',
          image: require('@/assets/our-team6.jpg')
        },
        {
          name: 'Mr J. Walsh',
          position: 'Our Staff',
          image: require('@/assets/our-team1.jpg')
        },
        {
          name: 'Mr D. Adams',
          position: 'Our Staff',
          image: require('@/assets/our-team2.jpg')
        },
        {
          name: 'Mr J. Ace',
          position: 'Our Staff',
          image: require('@/assets/our-team3.jpg')
        },
        {
          name: 'Mr G. Newman',
          position: 'Our Staff',
          image: require('@/assets/our-team4.jpg')
        },
        {
          name: 'Mr G.Mulan dow',
          position: 'Our Staff',
          image: require('@/assets/our-team5.jpg')
        },
        {
          name: 'Mr J. Walsh',
          position: 'Our Staff',
          image: require('@/assets/our-team6.jpg')
        }
      ],
      sliderProps: {
        speed: 500,
        nav: false,
        autoPlay: true,
        mouseDrag: true,
        controlsText: [
          '<i class="fi flaticon-back"></i>',
          '<i class="fi flaticon-next"></i>'
        ],
        controlsPosition: 'bottom',
        responsive: {
          0: {
            items: 1
          },

          550: {
            items: 2,
            center: false,
            margin: 10
          },

          892: {
            items: 3
          },

          1200: {
            items: 4
          },

          1400: {
            items: 6
          }
        }
      }
    }
  }
}
</script>
