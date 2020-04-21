<template>
  <div class="contact-section overview-bgi">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- Form content box start -->
          <div class="form-content-box">
            <!-- details -->
            <div class="details">
              <!-- Logo-->
              <a href="index.html">
                <img
                  src="../../assets/black-logo.png"
                  class="cm-logo"
                  alt="black-logo"
                />
              </a>
              <!-- Name -->
              <h3>新建账户</h3>
              <!-- Form start-->
              <form action="index.html" method="GET">
                <div class="form-group">
                  <input
                    type="text"
                    name="fullname"
                    class="input-text"
                    placeholder="姓名"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    name="phone"
                    class="input-text"
                    placeholder="手机号码"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    class="input-text"
                    placeholder="请输入密码"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="confirm_Password"
                    class="input-text"
                    placeholder="请再次输入密码"
                  />
                </div>
                <div class="form-group mb-0">
                  <button type="submit" class="btn-md button-theme btn-block">
                    注册
                  </button>
                </div>
              </form>
              <!-- Social List -->
              <ul class="social-list clearfix">
                <li>
                  <a href="#" class="weixin-bg"><i class="fa fa-weixin"></i></a>
                </li>
                <li>
                  <a href="#" class="weibo-bg"><i class="fa fa-weibo"></i></a>
                </li>
              </ul>
            </div>
            <!-- Footer -->
            <div class="footer">
              <span
                >已经是会员了？ <router-link to="login">登录</router-link></span
              >
            </div>
          </div>
          <!-- Form content box end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/styles/signup.scss'
export default {

}
</script>
