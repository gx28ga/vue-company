<template>
  <div>
    <home-swiper />
    <home-features />
    <!--    <div class="hot-target section-padding">-->
    <!--      <div class="container">-->
    <!--        <b-row>-->
    <!--          <b-col :lg="12" :offset="6">-->
    <!--            <div class="section-title-s2">-->
    <!--              <h2>热门标的</h2>-->
    <!--              <p>-->
    <!--                Lorem Ipsum is simply dummy text of the printing and typesetting-->
    <!--              </p>-->
    <!--            </div>-->
    <!--          </b-col>-->
    <!--        </b-row>-->
    <!--        <b-row :gutter="30" class="hot-list">-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular1.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$397</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$20</div>-->
    <!--          </b-col>-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular2.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular3.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular4.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--        </b-row>-->
    <!--        <b-row :gutter="30">-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular5.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular6.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular7.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--          <b-col :span="6" class="hot-list-item">-->
    <!--            <div class="item-thumb">-->
    <!--              <img src="../../assets/popular8.jpg" alt="" />-->
    <!--            </div>-->
    <!--            <div class="item-detail">-->
    <!--              <div class="instructor">$389</div>-->
    <!--              <div class="item-title">-->
    <!--                Machine Learning A-Z: Hands-On Python Data Science-->
    <!--              </div>-->
    <!--              <div class="detail-bottom">-->
    <!--                <div class="detail-user">-->
    <!--                  <i class="fa fa-user"></i-->
    <!--                  ><span class="user-text">person</span>-->
    <!--                </div>-->
    <!--                <div class="stars-cnt">-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                  <i class="fa fa-star"></i>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="item-money">$10</div>-->
    <!--          </b-col>-->
    <!--        </b-row>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="today-rank section-padding">-->
    <!--      <div class="container">-->
    <!--        <b-row :gutter="30">-->
    <!--          <b-col :lg="12" :offset="6">-->
    <!--            <div class="section-title-s2">-->
    <!--              <h2>今日排行榜</h2>-->
    <!--              <p>-->
    <!--                Lorem Ipsum is simply dummy text of the printing and typesetting-->
    <!--              </p>-->
    <!--            </div>-->
    <!--          </b-col>-->
    <!--        </b-row>-->
    <!--        <el-carousel height="550px">-->
    <!--          <el-carousel-item v-for="item in 3" :key="item">-->
    <!--            <b-row :gutter="30" class="mt15 rank-list">-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color1">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color2">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color3">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color4">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--            </b-row>-->
    <!--            <b-row :gutter="30" class="mt15 rank-list">-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color5">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color6">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color7">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--              <b-col :span="6" class="rank-item">-->
    <!--                <div class="rank-title">-->
    <!--                  <div class="rank-round color8">-->
    <!--                    <i class="fa fa-star"></i>-->
    <!--                  </div>-->
    <!--                  <div class="rank-name">shoppings</div>-->
    <!--                </div>-->
    <!--                <ul class="rank-list-detail">-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                  <li class="detail-item">-->
    <!--                    <div class="item-name">name</div>-->
    <!--                    <div class="item-tag">tags</div>-->
    <!--                  </li>-->
    <!--                </ul>-->
    <!--              </b-col>-->
    <!--            </b-row>-->
    <!--          </el-carousel-item>-->
    <!--        </el-carousel>-->
    <!--      </div>-->
    <!--    </div>-->
    <home-portfolio />
    <home-fun-fact />
    <home-team />
    <home-testimonial />
    <home-partner />

    <section class="blog-section section-padding">
      <div class="container">
        <b-row class="row">
          <b-col :lg="6" :offset="3">
            <div class="section-title-s2">
              <span>Recent inside</span>
              <h2>Blog & Articles</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </b-col>
        </b-row>
        <div class="row">
          <div class="col col-xs-12">
            <div class="blog-grids clearfix">
              <div class="grid">
                <div class="img-cat">
                  <div class="img-holder">
                    <img src="../../assets/blog-img-1.jpg" alt />
                  </div>
                </div>
                <div class="details">
                  <h3>
                    <a href="#">
                      Lorem ipsum dolor site nec amet consec adipiscing elite.
                    </a>
                  </h3>
                  <div class="meta">
                    <div class="author">
                      <a href="#">
                        <img src="../../assets/blog-author-img1.png" alt /> Mich
                        Jhon
                      </a>
                    </div>
                    <div class="comment">
                      <a href="#"> <i class="ti-comment-alt"></i> 3 </a>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <a href="#" class="theme-btn one">Read More</a>
                </div>
              </div>
              <div class="grid">
                <div class="img-cat">
                  <div class="img-holder">
                    <img src="../../assets/blog-img-2.jpg" alt />
                  </div>
                </div>
                <div class="details">
                  <h3>
                    <a href="#">
                      Lorem ipsum dolor site nec amet consec adipiscing elite.
                    </a>
                  </h3>
                  <div class="meta">
                    <div class="author">
                      <a href="#">
                        <img src="../../assets/blog-author-img2.png" alt /> Mich
                        Jhon
                      </a>
                    </div>
                    <div class="comment">
                      <a href="#"> <i class="ti-comment-alt"></i> 3 </a>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <a href="#" class="theme-btn one">Read More</a>
                </div>
              </div>
              <div class="grid">
                <div class="img-cat">
                  <div class="img-holder">
                    <img src="../../assets/blog-img-3.jpg" alt />
                  </div>
                </div>
                <div class="details">
                  <h3>
                    <a href="#">
                      Lorem ipsum dolor site nec amet consec adipiscing elite.
                    </a>
                  </h3>
                  <div class="meta">
                    <div class="author">
                      <a href="#">
                        <img src="../../assets/blog-author-img3.png" alt /> Mich
                        Jhon
                      </a>
                    </div>
                    <div class="comment">
                      <a href="#"> <i class="ti-comment-alt"></i> 3 </a>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <a href="#" class="theme-btn one">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end container -->
    </section>
    <!-- end blog-section -->
  </div>
</template>

<script>
import HomeSwiper from '@/components/HomeSwiper/index'
import HomeFeatures from '@/views/home/components/HomeFeatures/index'
import HomePortfolio from '@/views/home/components/HomePortfolio/index'
import HomeFunFact from '@/views/home/components/HomeFunFact/index'
import HomeTeam from '@/views/home/components/HomeTeam/HomeTeam'
import HomePartner from '@/views/home/components/HomePartners/index'
import HomeTestimonial from '@/views/home/components/HomeTestimonial/index'

export default {
  components: {
    HomeTestimonial,
    HomePartner,
    HomeTeam,
    HomeFunFact,
    HomePortfolio,
    HomeFeatures,
    HomeSwiper
  },
  data() {
    return {
      reload: true
    }
  }
}
</script>
