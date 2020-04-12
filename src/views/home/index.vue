<template>
  <div>
    <home-swiper />
    <section class="portfolio-section section-padding">
      <div class="container">
        <el-row :gutter="30">
          <el-col :lg="12" :offset="6">
            <div class="section-title-s2">
              <span>Recently Completed</span>
              <h2>Our Projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="24">
            <div class="portfolio-grids portfolio-slider">
              <div class="grid">
                <div class="img-holder">
                  <img src="images/portfolio-img-1.jpg" alt />
                  <div class="service-image-overlay"></div>
                </div>
                <div class="details">
                  <h3><a href="#">Residential</a></h3>
                  <p class="cat">
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                </div>
              </div>
              <div class="grid">
                <div class="img-holder">
                  <img src="images/portfolio-img-2.jpg" alt />
                  <div class="service-image-overlay"></div>
                </div>
                <div class="details">
                  <h3><a href="#">Commercial</a></h3>
                  <p class="cat">
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                </div>
              </div>
              <div class="grid">
                <div class="img-holder">
                  <img src="images/portfolio-img-3.jpg" alt />
                  <div class="service-image-overlay"></div>
                </div>
                <div class="details">
                  <h3><a href="#">Industrial</a></h3>
                  <p class="cat">
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                </div>
              </div>
              <div class="grid">
                <div class="img-holder">
                  <img src="images/portfolio-img-1.jpg" alt />
                  <div class="service-image-overlay"></div>
                </div>
                <div class="details">
                  <h3><a href="#">Commercial </a></h3>
                  <p class="cat">
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- end container -->
    </section>
    <!-- start fun-fact-section -->
    <section class="fun-fact-section">
      <div class="container">
        <el-row :gutter="30">
          <el-col>
            <div class="fun-fact-grids clearfix">
              <div class="grid">
                <div class="info">
                  <h3><span class="counter" data-count="500">50</span>+</h3>
                  <p>Finished Projects</p>
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <h3><span class="counter" data-count="250">20</span>+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <h3><span class="counter" data-count="15">00</span>+</h3>
                  <p>Awards winning</p>
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <h3><span class="counter" data-count="100">00</span>%</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- end container -->
    </section>
    <!-- end fun-fact-section -->
    <!-- start team-section -->
    <section class="team-section">
      <div class="container">
        <el-row>
          <el-col :lg="12" :offset="6">
            <div class="section-title-s2">
              <span>Team members</span>
              <h2>Our Team</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="content-area">
        <div class="team-grids team-slider">
          <div class="grid">
            <div class="inner">
              <div class="img-holder">
                <img src="images/our-team1.jpg" alt />
              </div>
              <div class="details">
                <h4>Mr J. Walsh</h4>
                <span>Our Staff</span>
                <div class="social">
                  <ul>
                    <li>
                      <a href="#"><i class="ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="inner">
              <div class="img-holder">
                <img src="images/our-team2.jpg" alt />
              </div>
              <div class="details">
                <h4>Mr D. Adams</h4>
                <span>Our Staff</span>
                <div class="social">
                  <ul>
                    <li>
                      <a href="#"><i class="ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="inner">
              <div class="img-holder">
                <img src="images/our-team3.jpg" alt />
              </div>
              <div class="details">
                <h4>Mr J. Ace</h4>
                <span>Our Staff</span>
                <div class="social">
                  <ul>
                    <li>
                      <a href="#"><i class="ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="inner">
              <div class="img-holder">
                <img src="images/our-team4.jpg" alt />
              </div>
              <div class="details">
                <h4>Mr G. Newman</h4>
                <span>Our Staff</span>
                <div class="social">
                  <ul>
                    <li>
                      <a href="#"><i class="ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="inner">
              <div class="img-holder">
                <img src="images/our-team5.jpg" alt />
              </div>
              <div class="details">
                <h4>Mr G.Mulan dow</h4>
                <span>Our Staff</span>
                <div class="social">
                  <ul>
                    <li>
                      <a href="#"><i class="ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="inner">
              <div class="img-holder">
                <img src="images/our-team6.jpg" alt />
              </div>
              <div class="details">
                <h4>Mr J. Walsh</h4>
                <span>Our Staff</span>
                <div class="social">
                  <ul>
                    <li>
                      <a href="#"><i class="ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end team-section -->
  </div>
</template>

<script>
import HomeSwiper from '@/components/HomeSwiper/index'
export default {
  components: { HomeSwiper }
}
</script>
