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
                  <img src="../../assets/portfolio-img-1.jpg" alt />
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
                  <img src="../../assets/portfolio-img-2.jpg" alt />
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
                  <img src="../../assets/portfolio-img-3.jpg" alt />
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
                  <img src="../../assets/portfolio-img-1.jpg" alt />
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
                <img src="../../assets/our-team1.jpg" alt />
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
                <img src="../../assets/our-team2.jpg" alt />
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
                <img src="../../assets/our-team3.jpg" alt />
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
                <img src="../../assets/our-team4.jpg" alt />
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
                <img src="../../assets/our-team5.jpg" alt />
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
                <img src="../../assets/our-team6.jpg" alt />
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
    <!-- start testimonial-section -->
    <section class="testimonial-section">
      <div class="container">
        <!-- Sec Title -->
        <div class="section-title-s2">
          <span>Client Testimonials</span>
          <h2>Service Recipient Says</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div class="testimonials-carousel owl-carousel owl-theme">
          <!-- Testimonial Block -->
          <div class="testimonials-item">
            <h2>Awesome Service</h2>
            <div class="testimonials-stars">
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty
            </p>
            <img alt="" src="../../assets/testimonials1.png" />
            <h3>
              Kolis Muller<br />
              <span>USA Citizen</span>
            </h3>
          </div>

          <!-- Testimonial Block -->
          <div class="testimonials-item">
            <h2>Awesome Service</h2>
            <div class="testimonials-stars">
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty
            </p>
            <img alt="" src="../../assets/testimonials2.png" />
            <h3>
              Kolis Muller<br />
              <span>USA Citizen</span>
            </h3>
          </div>

          <!-- Testimonial Block -->
          <div class="testimonials-item">
            <h2>Awesome Service</h2>
            <div class="testimonials-stars">
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty
            </p>
            <img alt="" src="../../assets/testimonials1.png" />
            <h3>
              Kolis Muller<br />
              <span>USA Citizen</span>
            </h3>
          </div>
          <!-- Testimonial Block -->
          <div class="testimonials-item">
            <h2>Awesome Service</h2>
            <div class="testimonials-stars">
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
              <span class="icon"> <i class="fa fa-star"></i> </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty
            </p>
            <img alt="" src="../../assets/testimonials2.png" />
            <h3>
              Kolis Muller<br />
              <span>USA Citizen</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <!-- end testimonial-section -->
    <!-- start partners-section -->
    <section class="partners-section">
      <h2 class="hidden">Partners</h2>
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="partner-grids partners-slider">
              <div class="grid">
                <img src="../../assets/partner-logo1.jpg" alt />
              </div>
              <div class="grid">
                <img src="../../assets/partner-logo2.jpg" alt />
              </div>
              <div class="grid">
                <img src="../../assets/partner-logo3.jpg" alt />
              </div>
              <div class="grid">
                <img src="../../assets/partner-logo4.jpg" alt />
              </div>
              <div class="grid">
                <img src="../../assets/partner-logo5.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end container -->
    </section>
    <!-- end partners-section -->
    <!-- start blog-section -->
    <section class="blog-section section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1"
          >
            <div class="section-title-s2">
              <span>Recent inside</span>
              <h2>Blog & Articles</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </div>
        </div>
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
                    <a href="#"
                      >Lorem ipsum dolor site nec amet consec adipiscing
                      elite.</a
                    >
                  </h3>
                  <div class="meta">
                    <div class="author">
                      <a href="#">
                        <img src="../../assets/blog-author-img1.png" alt /> Mich
                        Jhon
                      </a>
                    </div>
                    <div class="comment">
                      <a href="#"><i class="ti-comment-alt"></i> 3</a>
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
                    <a href="#"
                      >Lorem ipsum dolor site nec amet consec adipiscing
                      elite.</a
                    >
                  </h3>
                  <div class="meta">
                    <div class="author">
                      <a href="#">
                        <img src="../../assets/blog-author-img2.png" alt /> Mich
                        Jhon
                      </a>
                    </div>
                    <div class="comment">
                      <a href="#"><i class="ti-comment-alt"></i> 3</a>
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
                    <a href="#"
                      >Lorem ipsum dolor site nec amet consec adipiscing
                      elite.</a
                    >
                  </h3>
                  <div class="meta">
                    <div class="author">
                      <a href="#">
                        <img src="../../assets/blog-author-img3.png" alt /> Mich
                        Jhon
                      </a>
                    </div>
                    <div class="comment">
                      <a href="#"><i class="ti-comment-alt"></i> 3</a>
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
export default {
  components: { HomeSwiper },
  mounted() {}
}
</script>
