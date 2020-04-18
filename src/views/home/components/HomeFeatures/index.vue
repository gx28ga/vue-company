<template>
  <section class="features-wrapper">
    <b-container>
      <b-row class="box-shadow2 bg-white featured-box">
        <b-col
          v-for="(feature, index) in featureData"
          :key="`home_feature_${index}`"
          :class="index === 1 ? 'box-shadow2' : ''"
        >
          <div class="featured-icon-box text-center">
            <div class="featured-icon"><i :class="feature.icon"></i></div>
            <div class="featured-content">
              <div class="featured-title">
                <h5>
                  {{ feature.title }}
                </h5>
              </div>
              <div class="featured-desc">
                <p>{{ feature.desc }}</p>
                <a class="btn" href="#"
                  >More Services<i class="ti ti-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'HomeFeatures',
  data() {
    return {
      featureData: [
        {
          title: 'Who we are',
          icon: 'ti ti-settings',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'
        },
        {
          title: 'What we do',
          icon: 'ti ti-user',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'
        },
        {
          title: 'Why Choose Us?',
          icon: 'ti ti-thumb-up',
          desc:
            'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'
        }
      ]
    }
  }
}
</script>
