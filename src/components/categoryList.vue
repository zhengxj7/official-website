<template>
  <div class="category_list">
    <div class="category_list_img">
      <img :src="categoryListImg" alt="">
    </div>
    <div class="category_list_title">海固劳保用品分类</div>
    <category-list-item v-for="(item, index) in categoryList" :key="index" :sub-list="item"></category-list-item>
  </div>
</template>
<script>
import categoryListItem from '@/components/block/categoryListItem';
import { categoryList } from '@/mock/categoryList.js';
import categoryListImg from '@/assets/img/website_index_cpzx.jpg';
import axios from 'axios';
import Vue from 'vue';
Vue.use(axios);
export default {
  name: 'category-list',
  data () {
    return {
      categoryList: categoryList,
      categoryListImg: categoryListImg,

    }
  },
  props: {

  },
  computed: {

  },
  components: {
    categoryListItem,

  },
  mounted () {
    this.getCategoryList();
  },
  methods: {
    getCategoryList () {
      axios.get(this.$api + 'product/list').then(res => {
        console.log('xxxxx', res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
.category_list .category_list_img {
  width: 240px;
  height: 66px;
}
.category_list .category_list_img img {
  width: 100%;
  height: 100%;
}
.category_list .category_list_title {
  height: 46px;
  line-height: 46px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  background-color: #1474ae;
  padding-left: 20px;
  margin-top: 15px;
}
</style>
