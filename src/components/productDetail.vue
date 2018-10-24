<template>
  <div class="product_detail">
    <div class="base_info">
      <div class="base_info_img">
        <swiper :options="swiperOptionTop" ref="swiperTop" class="gallery_top">
          <swiper-slide v-for="(img, index) in productInfo.smallPUrl" :key="index">
            <img :src="img" alt="">
          </swiper-slide>
        </swiper>
        <swiper :options="swiperOptionThumbs" ref="swiperOptionThumbs" class="gallery_thumbs">
          <swiper-slide v-for="(img, index) in productInfo.smallPUrl" :key="index">
            <img :src="img" alt="">
          </swiper-slide>
        </swiper>
      </div>
      <div class="base_info_detail">
        <p>{{productInfo.title || '暂无'}}</p>
        <div v-for="(per, ind) in productInfo.productDetail" :key="ind" class="base_info_detail_item">
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
      <product-introduction v-if="currentIndex==0" :productIntroImgList="productInfo.bigPUrl"></product-introduction>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'product-detail',
  data () {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
      },
      productInfo: {  // 页面顶部产品信息
        productDetail: [  // 产品属性
          {name: '防护等级', value: 'KN100，过滤效率 >= 99.97%'},
          {name: '防护等级', value: 'KN95，过滤效率 >= 95.0%'},
          {name: '防护等级', value: 'KN90，过滤效率 >= 90.0%'},
          {name: '防护范围', value: '可防护0.075微米以上的非油性颗粒污染物（包括粉尘、烟、雾、微生物）'},
          {name: '选用范围', value: '适用于雾霾，面粉加工厂，矿厂（矿物加工粉尘），棉花加工，五金铸造，汽车尾气中产生的粉尘颗粒物'}
        ],
      },
      wangwang: wangwang,
      qq: qq,
      tabList: ['产品介绍', '使用说明', '常见问题', '相关下载'],
      currentIndex: 0,
      // 产品介绍tab
      productIntroImgList: [],
      // 使用说明tab
      useIntroImgList: [],
      // 常见问题tab
      relatedIssuesImgList: [],

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
    ResourseDownload,
    swiperSlide,
    swiper
  },
  mounted () {
    window.kk = this;
    this.$event.$on('getProductDetail', data => {
      this.getDetailAction(data);
    })
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods: {
    showNowImg (img) {
      console.log('ggggg', img);
      this.currentImg = img;
    },
    activeTab (ind) {
      this.currentIndex = ind;
    },
    getDetailAction (_id) {
      console.log('getDetailAction run');
      this.$get('bgr/product/detail/' + _id).then(res => {
        console.log('yyyy', res.obj);
        this.productInfo = Object.assign({}, this.productInfo, res.obj);

      }).catch(err => {
        console.log(err);
      })
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
