<template>
  <div class="section_title">
    <!-- <h1>{{title}}</h1> -->
    <div class="section_title_content">
      <div class="section_title_content_img">
        <img :src="sectionTitleImg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'section-title',
  props: {
    title: {
      type: String,
      default: '关于凯瑞达'
    },
    sectionTitleImg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.section_title {
  width: 100%;
  /* background-color: aquamarine; */
}
/* .section_title h1 {
  width: 1200px;
  margin: 0 auto;
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
} */
.section_title .section_title_content {
  width: 1200px;
  height: 120px;
  margin: 0 auto;
}
.section_title .section_title_content .section_title_content_img {
  width: 240px;
  height: 66px;
  margin: 27px auto;
}
</style>

