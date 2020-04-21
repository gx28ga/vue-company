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
              <h3 v-if="userAction === 'login'">登录账户</h3>
              <h3 v-if="userAction === 'signup'">新建账户</h3>
              <h3 v-if="userAction === 'forgotPassword'">找回密码</h3>
              <h3 v-if="userAction === 'changePassword'">修改密码</h3>
              <!-- Form start-->
              <form
                v-if="userAction === 'login'"
                action="index.html"
                method="GET"
              >
                <div class="form-group">
                  <input
                    type="number"
                    name="phone"
                    class="input-text"
                    placeholder="请输入电话号码"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="Password"
                    class="input-text"
                    placeholder="请输入密码"
                  />
                </div>
                <div class="checkbox">
                  <div class="ez-checkbox pull-left">
                    <label>
                      <input type="checkbox" class="ez-hide" />
                      记住我
                    </label>
                  </div>
                  <router-link to="forgotPassword">忘记密码</router-link>
                  <router-link to="changePassword">修改密码</router-link>
                  <div class="clearfix"></div>
                </div>
                <div class="form-group mb-0">
                  <button type="submit" class="btn-md button-theme btn-block">
                    登录
                  </button>
                </div>
              </form>
              <form
                v-if="userAction === 'signup'"
                action="index.html"
                method="GET"
              >
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
              <form
                v-if="userAction === 'forgotPassword'"
                action="index.html"
                method="GET"
              >
                <div class="form-group">
                  <input
                    type="text"
                    name="phone"
                    class="input-text"
                    placeholder="请输入手机号"
                  />
                </div>
                <div class="form-group mb-0">
                  <button type="submit" class="btn-md button-theme btn-block">
                    发送密码到手机
                  </button>
                </div>
              </form>
              <form
                v-if="userAction === 'changePassword'"
                action="index.html"
                method="GET"
              >
                <div class="form-group">
                  <input
                    type="number"
                    name="phone"
                    class="input-text"
                    placeholder="请输入手机号码"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    class="input-text"
                    placeholder="请输入新密码"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="confirm_Password"
                    class="input-text"
                    placeholder="请再次输入新密码"
                  />
                </div>
                <div class="form-group mb-0">
                  <button type="submit" class="btn-md button-theme btn-block">
                    修改密码
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
            <div v-if="userAction === 'login'" class="footer">
              <span
                >没有账号？ <router-link to="signup">注册</router-link></span
              >
            </div>
            <div
              v-if="userAction === 'signup' || userAction === 'forgotPassword'"
              class="footer"
            >
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
  props: {
    userAction: {
      type: String,
      default: 'login'
    }
  }
}
</script>
