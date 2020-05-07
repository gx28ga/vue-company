<template>
  <div class="sidebar">
    <div class="vertical-menu">
      <ul>
        <li><a href="#">Office Electronics</a></li>
        <li>
          <a href="#">Memory Cards &amp; SSD</a>
          <ul>
            <li><a href="#">Cables &amp; Connector</a></li>
            <li><a href="#">Mini PC</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="price_filter mt-40">
      <section-title title="Filter by price"/>
    </div>
    <list-filter />
    <list-filter />
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle/index'
import ListFilter from '@/components/ListFilter/index'
export default {
  name: 'HomeSidebar',
  components: { ListFilter, SectionTitle }
}
</script>

<style lang="scss">
.vertical-menu {
  border: 1px solid #ebebeb;
  padding: 20px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: block;
      margin-bottom: 16px;
      &:hover {
        @media (max-width: 1600px) and (min-width: 1200px) {
          ul {
            margin-top: 8px;
          }
        }
      }
      ul {
        height: auto;
        overflow: hidden;
        transition: 0.3s;
        li {
          a {
            &::before {
              content: ""
            }
          }
        }
      }
      a {
        color: $text-color-darkest;
        position: relative;
        padding-left: 15px;
        @media (max-width: 1600px) and (min-width: 1200px) {
          font-size: 13px;
        }
        &:hover {
          color: #e23e1d;
        }
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          font-family: FontAwesome;
          content: '\f107';
          line-height: normal;
        }
      }
    }
  }
}
</style>
