<template>
  <div class="list-filter mt-43">
    <slot name="title">
      <section-title title="Brands" />
    </slot>
    <ul class="list-none mt-25">
      <li>
        <input type="checkbox" id="acer" />
        <label for="acer">Acer</label>
      </li>
      <li>
        <input type="checkbox" id="apple" />
        <label for="apple">Apple</label>
      </li>
      <li>
        <input type="checkbox" id="asus" />
        <label for="asus">Asus</label>
      </li>
      <li>
        <input type="checkbox" id="gionee" />
        <label for="gionee">Gionee</label>
      </li>
      <li>
        <input type="checkbox" id="htc" />
        <label for="htc">HTC</label>
      </li>
      <li><a href="#">+ Show more</a></li>
    </ul>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle/index'
export default {
  name: 'ListFilter',
  components: { SectionTitle }
}
</script>

<style lang="scss">
.list-filter {
  ul {
    li {
      input[type='checkbox'] {
        border: 1px solid #b3b7c8;
        background-color: #ffffff;
      }
      label {
        margin-left: 15px;
      }
    }
  }
}
</style>
