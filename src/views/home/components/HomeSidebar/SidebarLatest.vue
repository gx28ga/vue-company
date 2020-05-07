<template>
  <div class="products-list mt-30">
    <section-title title="Latest Items" />
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle/index'
export default {
  name: 'SidebarLatest',
  components: { SectionTitle },
  data() {
    return {
      swiperOptions: {},
      slideData: [1, 2, 3]
    }
  }
}
</script>
