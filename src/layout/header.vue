<template>
  <header class="header">
    <div class="container clearfix">
      <router-link to="/" tag="h1">
        <img src="../assets/logo.png" class="site-logo" />
      </router-link>
      <div class="head-nav">
        <ul class="head-nav-nav">
          <li class="active"><router-link tag="a" to="/">首页</router-link></li>
          <li><router-link tag="a" to="/about">产品</router-link></li>
          <li class="menu-item-has-children">
            <a href="#">解决方案</a>
            <ul class="sub-menu">
              <li><a>文字</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">行业报告</a>
            <ul class="sub-menu">
              <li><a>文字</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">学院</a>
            <ul class="sub-menu">
              <li><a>文字</a></li>
            </ul>
          </li>
          <li><router-link tag="a" to="/about">关于我们</router-link></li>
          <li><router-link tag="a" to="/list">列表</router-link></li>
          <li><router-link tag="a" to="/detail">详情</router-link></li>
        </ul>
      </div>

      <div class="cart-contact">
        <div class="contact-btn hidden-xs">
          <a href="#" class="theme-btn">城市合伙人</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  h1 {
    float: left;
    height: 100px;
    margin: 0;
    line-height: 100px;
  }
  .site-logo {
    width: 200px;
    margin-left: 15px;
    vertical-align: middle;
  }
  .head-nav {
    float: right;
    margin-right: 220px;
    padding-left: 15px;
    padding-right: 15px;
    .head-nav-nav {
      float: left;
      & > li {
        float: left;
        position: relative;

        a {
          color: #333;
          font-weight: 500;
          font-size: 0.9375rem;
          padding: 40px 18px;
          line-height: 20px;
          display: block;
        }
        .sub-menu {
          background-color: #222328;
          width: 220px;
          position: absolute;
          left: 0;
          top: 100%;
          z-index: 10;
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          &:before {
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 9px 10px 9px;
            border-color: transparent transparent #222328 transparent;
            margin: 0 0 0 20px;
            padding-top: 1px;
            position: absolute;
            top: -11px;
          }
          li {
            border-bottom: 1px solid #35363a;
            a {
              font-size: 0.8125rem;
              display: block;
              padding: 13px 20px;
              color: #c1c1c1;
              text-transform: capitalize;
              &:hover {
                padding-left: 25px;
                text-decoration: none;
                color: #f47425 !important;
              }
            }
          }
        }
        &:hover {
          .sub-menu {
            top: 100%;
            visibility: visible;
            opacity: 1;
          }
        }
      }
      & > li.menu-item-has-children > a:before {
        font-family: 'themify';
        content: '\e64b';
        font-size: 0.5rem;
        position: absolute;
        right: 5px;
        top: 41%;
      }
    }
  }
  .cart-contact {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    .theme-btn {
      padding: 12px 20px;
      cursor: pointer;
      letter-spacing: 1.2px;
      background: none;
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 800;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: #333;
    }
  }
}
</style>
