<template>
  <div class="section_title">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'section-title',
  props: {
    title: {
      type: String,
      default: '关于海固'
    }
  }
}
</script>
<style scoped>
.section_title {
  width: 100%;
  /* background-color: aquamarine; */
}
.section_title h1 {
  width: 1200px;
  margin: 0 auto;
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
}
</style>

