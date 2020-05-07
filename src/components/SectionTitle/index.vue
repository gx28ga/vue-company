<template>
  <div class="section-title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: 'Section Title'
    }
  }
}
</script>

<style lang="scss">
.section-title {
  h2 {
    font-size: 36px;
    color: $text-color-darker;
    margin-bottom: 2px;
  }
  h3 {
    font-size: 18px;
    border-bottom: $border-style1;
    padding-bottom: 8px;
    margin-bottom: 0;
    position: relative;
    z-index: -1;
    bottom: -2px;
    &::before {
      background-color: $theme-color;
      height: 3px;
      width: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      margin-bottom: -1px;
    }
  }
}
</style>
