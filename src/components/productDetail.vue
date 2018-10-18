<template>
  <div class="product_detail">
    <div class="base_info">
      <div class="base_info_img">
        <div class="base_info_img_big">
          <img :src="currentImg" alt="">
        </div>
        <div class="base_info_img_small">
          <img v-for="(img, index) in baseInfoImgList" :key="index" :src="img" alt="" :class="{margin_right: index!=3}" @mouseover="showNowImg(img)">
        </div>
      </div>
      <div class="base_info_detail">
        <p>{{'防尘面具 海固HG600半面罩防毒面具+KN100/KN95/KN90非油性颗粒物滤棉'}}</p>
        <div v-for="(per, ind) in productDetail" :key="ind" class="base_info_detail_item">
          <span class="title">{{per.name}}</span>
          <span class="content">{{per.value}}</span>
        </div>
        <div class="base_info_link">
          <div><img :src="wangwang" alt="">联系购买</div>
          <div><img :src="qq" alt="">在线咨询</div>
        </div>
      </div>
    </div>
    <div class="tab_components">
      <website-tab :tab-list="tabList" @activeTab="activeTab"></website-tab>
    </div>
    <div class="tab_content">
      <product-introduction v-if="currentIndex==0"></product-introduction>
      <use-introduction v-if="currentIndex==1"></use-introduction>
      <related-issues v-if="currentIndex==2"></related-issues>
      <resourse-download v-if="currentIndex==3"></resourse-download>
    </div>
  </div>
</template>
<script>
import baseInfoImg1 from '@/assets/img/company_boost_1.jpg';
import baseInfoImg2 from '@/assets/img/company_boost_2.jpg';
import baseInfoImg3 from '@/assets/img/company_boost_3.jpg';
import baseInfoImg4 from '@/assets/img/company_boost_4.jpg';
import wangwang from '@/assets/img/wangwang.gif';
import qq from '@/assets/img/qq.gif';
import WebsiteTab from '@/components/block/tab';
import ProductIntroduction from '@/components/block/productIntroduction';
import UseIntroduction from '@/components/block/useIntroduction';
import RelatedIssues from '@/components/block/relatedIssues';
import ResourseDownload from '@/components/block/resourseDownload';
export default {
  name: 'product-detail',
  data () {
    return {
      baseInfoImgList: [baseInfoImg1, baseInfoImg2, baseInfoImg3, baseInfoImg4],
      currentImg: baseInfoImg1,
      productDetail: [
        {name: '防护等级', value: 'KN100，过滤效率 >= 99.97%'},
        {name: '防护等级', value: 'KN95，过滤效率 >= 95.0%'},
        {name: '防护等级', value: 'KN90，过滤效率 >= 90.0%'},
        {name: '防护范围', value: '可防护0.075微米以上的非油性颗粒污染物（包括粉尘、烟、雾、微生物）'},
        {name: '选用范围', value: '适用于雾霾，面粉加工厂，矿厂（矿物加工粉尘），棉花加工，五金铸造，汽车尾气中产生的粉尘颗粒物'}
      ],
      wangwang: wangwang,
      qq: qq,
      tabList: ['产品1介绍', '使用2说明', '常见3问题', '相关4下载'],
      currentIndex: 0,

    }
  },
  props: {

  },
  computed: {

  },
  components: {
    WebsiteTab,
    ProductIntroduction,
    UseIntroduction,
    RelatedIssues,
    ResourseDownload
  },
  mounted () {

  },
  methods: {
    showNowImg (img) {
      this.currentImg = img;
    },
    activeTab (ind) {
      this.currentIndex = ind;
    }
  }
}
</script>
<style scoped>
/* 顶部基础信息样式 */
.product_detail .base_info {
  overflow: hidden;
  width: 100%;
  margin-bottom: 40px;
}
/* 基础信息左侧图片样式 */
.product_detail .base_info .base_info_img {
  float: left;
  width: 385px;
  margin-right: 25px;
}
/* 基础信息左侧上方大图样式*/
.product_detail .base_info .base_info_img .base_info_img_big {
  width: 100%;
  height: 385px;
  border: 1px solid #c8c8c8;
  margin-bottom: 10px;
}
.product_detail .base_info .base_info_img .base_info_img_big img {
  width: 100%;
  height: 100%;
}
/* 基础信息左侧下方小图样式*/
.product_detail .base_info .base_info_img .base_info_img_small {
  width: 100%;
  overflow: hidden;
}
.product_detail .base_info .base_info_img .base_info_img_small img {
  display: block;
  float: left;
  width: 85px;
  height: 85px;
  border: 1px solid #c8c8c8;
}
.product_detail .base_info .base_info_img .base_info_img_small img.margin_right {
  margin-right: 15px;
}
/* 基础信息右侧属性样式*/
.product_detail .base_info .base_info_detail {
  float: right;
  width: 510px;
}
/* 基础信息右侧属性标题样式*/
.product_detail .base_info .base_info_detail>p {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 20px;
}
/* 基础信息右侧属性条目样式*/
.product_detail .base_info .base_info_detail .base_info_detail_item {
  line-height: 25px;
  overflow: hidden;
}
.product_detail .base_info .base_info_detail .base_info_detail_item .title {
  display: block;
  float: left;
  width: 70px;
  color: #999999;
}
.product_detail .base_info .base_info_detail .base_info_detail_item .content {
  display: block;
  float: left;
  width: 440px;
}
/* 基础信息右侧按钮样式*/
.product_detail .base_info .base_info_detail .base_info_link {
  margin-top: 60px;
  overflow: hidden;
}
.product_detail .base_info .base_info_detail .base_info_link>div {
  width: 150px;
  height: 50px;
  float: left;
  background-color: #1474ae;
  font-size: 18px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-right: 70px;
  cursor: pointer;
}
.product_detail .base_info .base_info_detail .base_info_link img {
  position: relative;
  top: 3px;
  right: 5px;
}
</style>
