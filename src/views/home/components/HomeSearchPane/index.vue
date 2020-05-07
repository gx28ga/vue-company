<template>
  <b-row align-v="center">
    <b-col :lg="2" :md="6">
      <section-title title="Shop Grid 05 Col" />
    </b-col>
    <b-col :lg="5" :md="6">
      <div class="products-sort">
        <form>
          <select>
            <option>Default Sorting</option>
            <option>Sort by A - Z</option>
            <option>Sort Price Low - High</option>
          </select>
        </form>
      </div>
      <div class="products-sort">
        <form>
          <label>Show :</label>
          <select>
            <option>12</option>
            <option>8</option>
            <option>4</option>
          </select>
        </form>
      </div>
    </b-col>
    <div :lg="5" :md="12">
    </div>
  </b-row>
</template>

<script>
import SectionTitle from '@/components/SectionTitle/index'
export default {
  name: 'HomeSearchPane',
  components: { SectionTitle }
}
</script>

<style lang="scss">
.products-sort {
  border: $border-style1;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-right: 16px;

  select {
    border: 0;
  }
}
.product-view-system {
  margin:5px 70px 0 0;
}
.col-lg-4 .product-view-system {
  margin:5px 45px 0 0;
}
.product-view-system ul {
  border-bottom: 0;
}
.product-view-system ul li {
  display: inline-block;
}
.product-view-system ul li a {
  height: 40px;
  margin-right:30px;
  display:block;
  opacity:.8;
}
.product-view-system ul li:last-child a {
  margin-right:0;
}
</style>
