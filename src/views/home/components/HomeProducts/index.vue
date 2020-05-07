<template>
  <div>
    <div>
      <b-row>
        <b-col :xl="3" :md="4" :sm="6">
          <div class="product-single">
            <div class="product-title">
              <small><a href="#">Aquaracer</a></small>
              <h4>
                <a href="#"
                  >iPATROL RILEY - WiFi Enabled Mobilized Home Monitoring</a
                >
              </h4>
            </div>
            <div class="product-thumb">
              <a href="#"><img :src="require('@/assets/1.jpg')" alt="" /></a>
              <div class="product-quick-view">
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#quick-view"
                  >quick view</a
                >
              </div>
            </div>
            <div class="product-price-rating">
              <div class="pull-left">
                <span>$395.00</span>
              </div>
              <div class="pull-right">
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <span class="rating-quantity">(0)</span>
              </div>
            </div>
            <div class="product-action">
              <a href="javascript:void(0);" class="product-compare"
                ><i class="ti-control-shuffle"></i
              ></a>
              <a href="javascript:void(0);" class="add-to-cart">Add to Cart</a>
              <a href="javascript:void(0);" class="product-wishlist"
                ><i class="ti-heart"></i
              ></a>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="recent-viewed-products mt-50">
      <b-row>
        <b-col :lg="12">
          <section-title title="Recently Viewed Products" />
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <b-row class="mlr-minus-12">
                  <b-col
                    :lg="4"
                    v-for="(slide, index) in slideData"
                    :key="`product_slide_${index}`"
                  >
                    {{ index }}
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle/index'
export default {
  name: 'HomeProducts',
  components: { SectionTitle },
  data() {
    return {
      swiperOption: {
      },
      slideData: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style lang="scss">
.product-single {
  border: $border-style1;
  padding: 15px 20px;
  margin-top: 30px;
  position: relative;
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.18);
  }
  .product-title {
    small {
      font-size: 12px;
      margin-bottom: 8px;
      display: inline-block;
      a {
        color: $text-color;
        text-transform: uppercase;
      }
    }
    h4 {
      font-size: 14px;
      line-height: 20px;
      a {
        color: $text-color-darker;
      }
    }
  }
  .product-thumb {
    position: relative;
  }
  .product-quick-view {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: all 0.2s ease-in-out 0s;
    transform: translateY(-30px);
    a {
      display: block;
      background-color: #f1f3fa;
      border-color: #f1f3fa;
      color: $text-color-darkest;
      font-size: 13px;
      font-weight: $headings-font-weight;
      padding: 10px 0;
      text-align: center;
      text-transform: uppercase;
      border-radius: 3px;
      &:hover {
        background-color: rgba(204, 210, 234, 0.9);
        border-color: rgba(204, 210, 234, 0.9);
        color: #181818;
      }
    }
  }
  .product-price-rating {
    border-top: $border-style1;
    padding-top: 25px;
    overflow: hidden;
    span {
      font-size: 16px;
      font-weight: $headings-font-weight;
      color: $theme-color;
      margin-right: 5px;
    }
    i {
      font-size: 13px;
      color: $rating-color;
      margin-right: 4px;
    }
    .rating-quantity {
      font-size: 13px !important;
      color: $text-color-lighter;
      font-weight: normal;
      font-style: normal;
      margin: 0;
    }
  }
  .product-action {
    transition: all 0.3s ease-in-out 0s;
    text-align: center;
    padding: 20px 15px;
    border-width: 0 1px 1px;
    border-color: $border-color1;
    border-style: solid;
    opacity: 0;
    filter: alpha(opacity=0);
    visibility: hidden;
    position: absolute;
    left: -1px;
    top: 100%;
    z-index: 99;
    width: calc(100% + 2px);
    background: #fff;
    border-top: 1px solid #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    .product-compare,
    .product-wishlist {
      width: 40px;
      height: 40px;
      border: 2px solid $border-color1;
      border-radius: 20px;
      line-height: 40px;
      font-size: 14px;
      &:hover {
        background-color: $theme-color;
        border-color: $theme-color;
        color: #ffffff;
      }
    }
    .add-to-cart {
      background-color: #e23e1d;
      font-size: 13px;
      text-transform: uppercase;
      height: 40px;
      width: 130px;
      color: #ffffff;
      text-align: center;
      line-height: 40px;
      font-weight: 500;
      border-radius: 20px;
      margin: 0 10px;
      @media (max-width: 1600px) and (min-width: 1200px) {
        .add-to-cart {
          width: 110px;
          margin: 0 5px;
        }
      }
    }
  }
  &:hover {
    .product-quick-view {
      opacity: 1;
      transform: translateY(0);
    }
    .product-action {
      opacity: 1;
      filter: alpha(opacity=1);
      visibility: visible;
      box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.18);
    }
  }
}
</style>
