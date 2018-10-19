<template>
  <div class="company_introduction">
    <section-title title="关于海固" :sectionTitleImg="sectionTitleImg"></section-title>
    <div class="company_introduction_content">
      <div class="company_introduction_left">
        <h1>认识海固</h1>
        <p>海固安全防护科技有限公司坐落于享有"运河古郡，渤海明珠"美誉的历史文化名城--河北省沧州市。是一家拥有独创品牌与核心科技，自主研发生产结合先进OEM外协加工，专业打造安全防护产品的企业，严格的质量把控、专业的防护技术、完善的售后服务，使海固一跃成长为国内安防用品定点授权生产厂家及特种劳动防护用品科技研发中心。海固安全防护科技有限公司坐落于享有"运河古郡，渤海明珠"美誉的历史文化名城--河北省沧州市。是一家拥有独创品牌与核心科技，自主研发生产结合先进OEM外协加工，专业打造安全防护产品的企业，严格的质量把控、专业的防护技术、完善的售后服务，使海固一跃成长为国内安防用品定点授权生产厂家及特种劳动防护用品科技研发中心。</p>
        <div class="img_list">
          <img v-for="(img, index) in imgList" :key="index" :src="img.url" :alt="img.des" :class="{margin_left: index!=0}">
        </div>
      </div>
      <div class="company_introduction_right">
        <h1>海固资质</h1>
        <div class="company_introduction_right_lunbo">
          <el-carousel height="246px" indicator-position="none" class="lunbo_box">
            <el-carousel-item v-for="(item, ind) in carouselList" :key="ind" class="company_introduction_lunbo_item">
              <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/block/sectionTitle';
import introductionImg from '@/assets/img/company_introduction.jpg';
import sectionTitleImg from '@/assets/img/website_index_aboutus.jpg';

export default {
  name: 'company-introduction',
  data () {
    return {
      imgList: [
        {des: '厂房1', url: introductionImg},
        {des: '厂房2', url: introductionImg},
        {des: '厂房3', url: introductionImg},
        {des: '厂房4', url: introductionImg}
      ],
      carouselList: [
        'http://www.czhaigu.com/templets/xinhaigu/images/yingye.jpg',
        'http://www.czhaigu.com/templets/xinhaigu/images/scxkz.jpg',
        'http://www.czhaigu.com/templets/xinhaigu/images/shangbiao.jpg'
      ],
      sectionTitleImg: sectionTitleImg
    }
  },
  props: {

  },
  computed: {

  },
  components: {
    SectionTitle,

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped>
.company_introduction {
  width: 100%;
  margin-bottom: 20px;
}
.company_introduction .company_introduction_content {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
/* 通用标题样式 */
.company_introduction .company_introduction_content h1 {
  font-size: 22px;
  color: #333333;
  font-weight: 400;
}
/* 左侧样式 */
.company_introduction .company_introduction_left {
  width: 760px;
  float: left;
}
.company_introduction .company_introduction_left p {
  width: 100%;
  line-height: 26px;
  margin: 20px 0;
  text-indent: 28px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.company_introduction .company_introduction_left .img_list {
  width: 100%;
}
.company_introduction .company_introduction_left .img_list img {
  width: 170px;
  height: 120px;
}
.company_introduction .company_introduction_left .img_list img.margin_left {
  margin-left: 26px;
}
/* 右侧样式 */
.company_introduction .company_introduction_right {
  width: 380px;
  float: right;

}
.company_introduction .company_introduction_right .company_introduction_right_lunbo {
  width: 380px;
  height: 246px;
  margin-top: 20px;
}
.company_introduction .company_introduction_right .company_introduction_right_lunbo .lunbo_box {
  width: 175px;
  margin: 0 auto;
}
.company_introduction .company_introduction_right .company_introduction_lunbo_item {
  width: 175px;
  height: 100%;
}
.company_introduction .company_introduction_right .company_introduction_lunbo_item img {
  width: 100%;
  height: 100%;
}
</style>


