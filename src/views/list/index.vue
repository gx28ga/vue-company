<template>
  <div class="properties-section content-area">
    <div class="container">
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="sidebar-right">
            <!-- Advanced search start -->
            <div class="widget advanced-search">
              <h3 class="sidebar-title">Advanced Search</h3>
              <div class="s-border"></div>
              <el-select class="se-mt" v-model="form.item1">
                <el-option value="All Status">All Status</el-option>
                <el-option value="For Sale">For Sale</el-option>
                <el-option value="For Rent">For Rent</el-option>
              </el-select>
              <el-select class="se-mt" v-model="form.item2">
                <el-option
                  v-for="(item, index) in options"
                  :key="`${index}_item2`"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select class="se-mt" v-model="form.item3">
                <el-option
                  v-for="(item, index) in options"
                  :key="`${index}_item3`"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select class="se-mt" v-model="form.item4">
                <el-option
                  v-for="(item, index) in options"
                  :key="`${index}_item4`"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
               <el-select class="se-mt" v-model="form.item7">
                  <el-option
                    v-for="(item, index) in options_choose"
                    :key="`${index}_item7`"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              <div class="range-slider">
                <label>Area</label>
                <el-slider v-model="slider1Value" range :marks="marks1">
                </el-slider>
              </div>
              <div class="range-slider">
                <label>Price</label>
                <el-slider v-model="slider2Value" range :marks="marks2">
                </el-slider>
              </div>
              <a
                class="show-more-options"
                @click="isFeaturesShow = !isFeaturesShow"
              >
                <i class="fa fa-plus-circle"></i> Other Features
              </a>
              <div v-if="isFeaturesShow" class="collapse">
                <h3 class="sidebar-title">Features</h3>
                <div class="s-border"></div>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="Air Condition"></el-checkbox>
                  <el-checkbox label="Places to seat"></el-checkbox>
                  <el-checkbox label="Swimming Pool"></el-checkbox>
                  <el-checkbox label="Free Parking"></el-checkbox>
                  <el-checkbox label="Central Heating"></el-checkbox>
                  <el-checkbox label="Laundry Room"></el-checkbox>
                  <el-checkbox label="Window Covering"></el-checkbox>
                  <el-checkbox label="Alarm"></el-checkbox>
                </el-checkbox-group>
                <br />
              </div>
              <div class="form-group mb-0">
                <button class="search-button">Search</button>
              </div>
            </div>
            <!-- Recent properties start -->
            <div class="widget recent-properties">
              <h3 class="sidebar-title">Recent Properties</h3>
              <div class="s-border"></div>
              <div class="media mb-4">
                <a class="pr-3" href="properties-details.html">
                  <img
                    class="media-object"
                    src="../../assets/small-properties-1.jpg"
                    alt="small-properties"
                  />
                </a>
                <div class="media-body align-self-center">
                  <h5>
                    <a href="properties-details.html">Modern Family Home</a>
                  </h5>
                  <div class="listing-post-meta">
                    $345,000 |
                    <a href="#">
                      <i class="fa fa-calendar"></i> Oct 27, 2018
                    </a>
                  </div>
                </div>
              </div>
              <div class="media mb-4">
                <a class="pr-3" href="properties-details.html">
                  <img
                    class="media-object"
                    src="../../assets/small-properties-2.jpg"
                    alt="small-properties"
                  />
                </a>
                <div class="media-body align-self-center">
                  <h5>
                    <a href="properties-details.html">Beautiful Single Home</a>
                  </h5>
                  <div class="listing-post-meta">
                    $415,000 |
                    <a href="#">
                      <i class="fa fa-calendar"></i> Feb 14, 2018
                    </a>
                  </div>
                </div>
              </div>
              <div class="media">
                <a class="pr-3" href="properties-details.html">
                  <img
                    class="media-object"
                    src="../../assets/small-properties-3.jpg"
                    alt="small-properties"
                  />
                </a>
                <div class="media-body align-self-center">
                  <h5>
                    <a href="properties-details.html">Real Luxury Villa</a>
                  </h5>
                  <div class="listing-post-meta">
                    $345,000 |
                    <a href="#">
                      <i class="fa fa-calendar"></i> Oct 12, 2018
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Posts by category Start -->
            <div class="posts-by-category widget">
              <h3 class="sidebar-title">类别</h3>
              <div class="s-border"></div>
              <ul class="list-unstyled list-cat">
                <li>
                  <a href="#">
                    房地产
                    <span>(45)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    汽车
                    <span>(21)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    债权
                    <span>(23)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    股权
                    <span>(19)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    其他
                    <span>(19)</span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- Our agent sidebar start -->
            <div class="our-agent-sidebar">
              <div class="p-20">
                <h3 class="sidebar-title">Our Agent</h3>
                <div class="s-border"></div>
              </div>
              <el-carousel height="530px">
                <el-carousel-item
                  v-for="(item, index) in personLoop"
                  :key="index"
                >
                  <div class="carousel-item active">
                    <div class="team-1">
                      <div class="team-photo">
                        <a href="#">
                          <img
                            :src="item.imgUrl"
                            alt="agent-2"
                            class="img-fluid"
                          />
                        </a>
                        <ul class="social-list clearfix">
                          <li>
                            <a href="#" class="facebook">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="twitter">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="instagram">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="linkedin">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="team-details">
                        <h5>
                          <a href="agent-detail.html">Martin Smith</a>
                        </h5>
                        <h6>Web Developer</h6>
                        <h4>+1 204 777 0187</h4>
                      </div>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <!-- Option bar start -->
          <div
            class="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block"
          >
            <el-row>
              <el-col :span="12">
                <div class="sorting-options2">
                  <span class="sort">Sort by:</span>
                  <el-select
                    class="selectpicker search-fields"
                    v-model="form.item9"
                  >
                    <el-option value="Default">Default</el-option>
                    <el-option value="Price High to Low"
                      >Price High to Low</el-option
                    >
                    <el-option value="Price: Low to High"
                      >Price: Low to High</el-option
                    >
                    <el-option value="Newest Propertie"
                      >Newest Properties</el-option
                    >
                    <el-option value="Oldest Properties"
                      >Oldest Properties</el-option
                    >
                  </el-select>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="sorting-options">
                  <a
                    href="properties-list-rightside.html"
                    class="change-view-btn active-view-btn"
                  >
                    <i class="fa fa-th-list"></i>
                  </a>
                  <a
                    href="properties-grid-rightside.html"
                    class="change-view-btn"
                  >
                    <i class="fa fa-th-large"></i>
                  </a>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- Property box 2 start -->
          <el-row :gutter="30">
            <el-col
              :span="12"
              v-for="(item, index) in arr"
              :key="`list_item${index}`"
            >
              <div class="property-box-2">
                <div class="property-thumbnail">
                  <div
                    class="round"
                    style="
                      width: 50px;
                      height: 50px;
                      position: absolute;
                      left: 20px;
                      bottom: -25px;
                      z-index: 20;
                      border-radius: 50%;
                      display: flex;
                      color: #ffffff;
                      align-items: center;
                      justify-content: center;
                      background-color: #019693;
                    "
                  >
                    <div class="number">40%</div>
                  </div>
                  <a href="properties-details.html" class="property-img">
                    <img
                      src="../../assets/properties-list-1.jpg"
                      alt="properties"
                      class="img-fluid"
                    />
                    <div class="listing-badges">
                      <span class="featured">Featured</span>
                    </div>
                    <div class="price-box"><span>$850.00</span> Per month</div>
                  </a>
                </div>

                <div class="detail">
                  <div class="hdg">
                    <h3 class="title">
                      <a href="properties-details.html">Relaxing Apartment</a>
                    </h3>
                    <h5 class="location">
                      <a href="properties-details.html">
                        <i class="icon-alarm-clock"></i><b>00</b
                        ><small>天</small><b>07</b><small>时</small><b>20</b
                        ><small>分</small><b>34.9</b><small>秒</small>
                      </a>
                    </h5>
                  </div>
                  <ul class="facilities-list clearfix">
                    <li><span>安全指数</span>3600 Sqft</li>
                    <li><span>围观</span> 3</li>
                    <li><span>提醒</span> 2</li>
                    <li><span>报名</span> 1</li>
                  </ul>
                  <div
                    class="footer"
                    style="display: flex; justify-content: space-between;"
                  >
                    <a href="#" tabindex="0">
                      <i class="fa fa-comment"></i> 评论 <small>15</small>
                    </a>

                    <a href="#" tabindex="0">
                      <i class="fa fa-heart"></i> 关注
                    </a>
                    <span style="color: #ffb203;">
                      <i class="fa fa-star"></i><i class="fa fa-star"></i
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ><i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- Page navigation start -->
          <div class="pagination-box hidden-mb-45 text-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">1</a>
                </li>
              </ul>
            </nav>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      form: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
        item8: '',
        item9: ''
      },
      options: [
        {
          label: 'All Type',
          value: 'All Type'
        },
        {
          label: 'Apartments',
          value: 'Apartments'
        },
        {
          label: 'Shop',
          value: 'Shop'
        },
        {
          label: 'Restaurant',
          value: 'Restaurant'
        }
      ],
      slider1Value: [0, 1000],
      slider2Value: [0, 1500],
      marks1: {
        0: '0sqft',
        1000: '1000fqst'
      },
      marks2: {
        0: '0USD',
        1500: '1500USD'
      },
      isFeaturesShow: false,
      checkList: [],
      personLoop: [
        {
          imgUrl: require('../../assets/avatar-5.jpg')
        },
        {
          imgUrl: require('../../assets/avatar-6.jpg')
        },
        {
          imgUrl: require('../../assets/avatar-7.jpg')
        }
      ],
      options_choose: [
        {
          label: '可贷款',
          value: 'daikuan'
        },
        {
          label: '破产类',
          value: 'pochan'
        },
        {
          label: '可代拍',
          value: 'daipai'
        },
        {
          label: '变卖',
          value: 'All Type'
        }
      ]
    }
  }
}
</script>
