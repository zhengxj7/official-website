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
        <!-- 该部分html及css暂时隐藏 -->
        <!-- <div class="base_info_link">
          <div><img :src="wangwang" alt="">联系购买</div>
          <div><img :src="qq" alt="">在线咨询</div>
        </div> -->
      </div>
    </div>
    <div class="tab_components">
      <website-tab :tab-list="tabList" @activeTab="activeTab"></website-tab>
    </div>
    <div class="tab_content">
      <product-introduction v-if="currentIndex==0" :productIntroImgList="productIntroImgList"></product-introduction>
      <use-introduction v-if="currentIndex==1" :useIntroImgList="useIntroImgList"></use-introduction>
      <related-issues v-if="currentIndex==2" :relatedIssuesImgList="relatedIssuesImgList"></related-issues>
      <resourse-download v-if="currentIndex==3"></resourse-download>
    </div>
  </div>
</template>
<script>
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
      baseInfoImgList: [
        'http://www.czhaigu.com/uploads/product/fdmj/zichan/mianzhao/1.jpg',
        'http://www.czhaigu.com/uploads/product/fdmj/zichan/bz-bmz.jpg',
        'http://www.czhaigu.com/uploads/product/fdmj/zichan/600+ldh/600+K4.jpg',
        'http://www.czhaigu.com/uploads/product/fdmj/zichan/600+ldh/600+D1.jpg'
      ],
      currentImg: 'http://www.czhaigu.com/uploads/product/fdmj/zichan/mianzhao/1.jpg',
      productDetail: [
        {name: '防护等级', value: 'KN100，过滤效率 >= 99.97%'},
        {name: '防护等级', value: 'KN95，过滤效率 >= 95.0%'},
        {name: '防护等级', value: 'KN90，过滤效率 >= 90.0%'},
        {name: '防护范围', value: '可防护0.075微米以上的非油性颗粒污染物（包括粉尘、烟、雾、微生物）'},
        {name: '选用范围', value: '适用于雾霾，面粉加工厂，矿厂（矿物加工粉尘），棉花加工，五金铸造，汽车尾气中产生的粉尘颗粒物'}
      ],
      wangwang: wangwang,
      qq: qq,
      tabList: ['产品介绍', '使用说明', '常见问题', '相关下载'],
      currentIndex: 0,
      productIntroImgList: [
        'http://www.czhaigu.com/images/hxfhzn.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/1.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/2.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/4.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/5.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/6.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/7.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/8.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/10.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/11.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/12.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/13.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/14.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/15.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/16.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/17.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/600xl-zichan/600/18.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/ty/gc-1.jpg',
        'http://www.czhaigu.com/uploads/product/tb3/ty/sh.jpg',
        'http://www.czhaigu.com/uploads/zizhi/shanghaizhanhui.jpg'
      ],
      useIntroImgList: [
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/shiyong/600.jpg'
      ],
      relatedIssuesImgList: [
        'http://www.czhaigu.com/uploads/product/tb3/fdmj/cj/600fdmj.jpg'
      ],

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
    this.$event.$on('productDetail', function (data) {
      console.log('yyyyy===我收到啦');
    })
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
.product_detail {
  margin-top: 50px;
}
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
/* .product_detail .base_info .base_info_detail .base_info_link {
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
} */
</style>
