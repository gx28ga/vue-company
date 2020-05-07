<template>
  <div class="shop-area">
    <b-container fluid>
      <b-row>
        <b-col :xl="2" :lg="3">
          <home-sidebar/>
        </b-col>
        <b-col :xl="10" :lg="9">
          <home-search-pane />
          <home-products />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HomeSidebar from '@/views/home/components/HomeSidebar/index'
import HomeSearchPane from '@/views/home/components/HomeSearchPane/index'
import HomeProducts from '@/views/home/components/HomeProducts/index'
export default {
  components: { HomeProducts, HomeSearchPane, HomeSidebar },
  data() {
    return {
      reload: true
    }
  }
}
</script>
<style lang="scss">
.shop-area {
  border-top: $border-style1;
  padding-top: 40px;
}
</style>
