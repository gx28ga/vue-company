<template>
  <footer class="site-footer">
    <div class="upper-footer">
      <div class="container">
        <el-row :gutter="30">
          <el-col :span="6">
            <div class="widget about-widget">
              <div class="logo widget-title">
                <h3>About Us</h3>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="widget link-widget">
              <div class="widget-title">
                <h3>Quick Links</h3>
              </div>
              <ul>
                <li><a href="javascript:void(0)">About Us</a></li>
                <li><a href="javascript:void(0)">Our Services</a></li>
                <li><a href="javascript:void(0)">Blog</a></li>
                <li><a href="javascript:void(0)">Contact Us</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">Testimonials</a></li>
                <li><a href="javascript:void(0)">Blog</a></li>
                <li><a href="javascript:void(0)">FAQ</a></li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="widget contact-widget service-link-widget">
              <div class="widget-title">
                <h3>Head office</h3>
              </div>
              <p>
                125 Big fella St., New York, Hi 5654775, United States of
                America
              </p>
              <ul>
                <li>Phone: 0123456789</li>
                <li>
                  Email:
                  <a href="mailto:test@sbtechnosoft.com"
                    >test@sbtechnosoft.com</a
                  >
                </li>
                <li>Office Time: 9 a.m.- 6 p.m.</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="widget newsletter-widget">
              <div class="widget-title">
                <h3>Newsletter</h3>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- end container -->
    </div>
    <div class="lower-footer">
      <div class="container">
        <el-row :gutter="30">
          <div class="separator"></div>
          <el-col :span="24">
            <p class="copyright">
              Copyright &copy; 2019 <span>sbtechnosoft</span>. All rights
              reserved.
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style>
.site-footer {
  background-color: #222328;
  position: relative;
  font-size: 15px;
}
.site-footer ul {
  list-style: none;
}
.site-footer p,
.site-footer li {
  color: #a3a3a3;
}
.site-footer a {
  color: #f47425;
}
.site-footer .upper-footer {
  padding: 90px 0;
  background: #253139;
}

.site-footer .widget-title {
  margin-bottom: 30px;
}
.site-footer .widget-title h3 {
  font-size: 18px;
  color: #fff;
  margin: 0;
  padding-bottom: 12px;
  text-transform: capitalize;
  position: relative;
}
.site-footer .widget-title h3:after {
  position: absolute;
  width: 50px;
  height: 2px;
  background: #f47425;
  content: '';
  left: 0;
  bottom: 0;
}
.site-footer .about-widget .logo {
  max-width: 180px;
}
.site-footer .about-widget p {
  margin-bottom: 0.8em;
  line-height: 1.9em;
}
.site-footer .about-widget p:last-child {
  margin-bottom: 0;
}
.site-footer .link-widget {
  overflow: hidden;
}
.site-footer .footer-social-menu li a {
  background: #1e282f;
  border-radius: 2px;
  color: #9fa4af;
  display: block;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
}
.site-footer .footer-social-menu li a:hover,
.site-footer .footer-social-menu li a:focus {
  background: #f47425;
  color: #ffffff;
}

.site-footer .link-widget {
  padding-left: 20px;
}

.site-footer .link-widget ul {
  width: 50%;
  float: left;
}
.site-footer .link-widget ul li {
  position: relative;
}
.site-footer .link-widget ul a {
  color: #b6b6b6;
}
.site-footer .link-widget ul a:hover,
.site-footer .link-widget ul li:hover:before {
  color: #f47425;
}
.site-footer .link-widget ul > li + li {
  margin-top: 15px;
}
.site-footer .contact-widget {
  padding-left: 25px;
}
.site-footer .contact-widget ul {
  margin-top: 25px;
}
.site-footer .contact-widget ul li {
  position: relative;
}
.site-footer .contact-widget ul > li + li {
  margin-top: 12px;
}
.site-footer .newsletter-widget form {
  margin-top: 25px;
  position: relative;
}
.site-footer .newsletter-widget form input {
  background-color: #1e282f;
  height: 50px;
  color: #fff;
  padding: 6px 20px;
  border-radius: 0;
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.site-footer .newsletter-widget form .submit {
  position: absolute;
  right: 20px;
  top: 55%;
  transform: translateY(-50%);
}
.site-footer .newsletter-widget form .submit button {
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 20px;
  color: #f47425;
  margin-top: -2px;
  position: relative;
  right: -5px;
}
.site-footer .lower-footer {
  text-align: center;
  position: relative;
  background: #1e282f;
}
.site-footer .copyright span {
  color: #f47425;
}
.site-footer .lower-footer .el-row {
  padding: 20px 0;
  position: relative;
}
.site-footer .lower-footer .el-row .separator {
  background: rgba(255, 255, 255, 0.05);
  width: calc(100% - 30px);
  height: 1px;
  position: absolute;
  left: 15px;
  top: 0;
}
.site-footer .lower-footer .copyright {
  display: inline-block;
  float: left;
  font-size: 0.875rem;
  margin: 0;
}

.site-footer .lower-footer .social-icons {
  display: inline-block;
  float: right;
  overflow: hidden;
}

.site-footer .lower-footer .social-icons ul {
  overflow: hidden;
  list-style: none;
}

.site-footer .lower-footer .social-icons ul li {
  float: left;
}
.site-footer .lower-footer .social-icons ul > li + li {
  margin-left: 15px;
}
.site-footer .lower-footer .social-icons ul a {
  font-size: 0.875rem;
  color: #b6b6b6;
}
.site-footer .lower-footer .social-icons ul a:hover {
  color: #f47425;
}
.sticky-header {
  width: 100%;
  position: fixed;
  left: 0;
  top: -300px;
  z-index: 9999;
  opacity: 0;
  transition: all 0.7s;
}
.sticky-on {
  opacity: 1;
  top: 0;
}
.sticky-header {
  background: #222328;
}
.sticky-header {
  background: #fff;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
}
</style>
