<template>
  <div class="list">
    <div class="category">
      <news-category @getNewsList="getNewsList"></news-category>
    </div>
    <div class="news-list">
      <div class="news-item" v-for="(news, index) in newsList" :key="index">
        <div class="date">
          <div class="top">{{ news.modifyTime | dateHandleYM }}</div>
          <div class="bottom">{{ news.modifyTime | dateHandleD }}</div>
        </div>
        <div class="content">
          <h3 class="title">{{ news.name }}</h3>
          <div class="detail">{{ news.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCategory from '../../components/newsCaterogy'
export default {
  name: 'news-list',
  data () {
    return {
      newsList: []
    }
  },
  mounted () {

  },
  components: {
    NewsCategory
  },
  methods: {
    getNewsList (data) {
      console.log('getNewsList', data)
      return this.$get(`news/list?topic=${data}`, {}).then(res => {
        if (res.success) {
          this.newsList = res.obj.datas;
          return res.obj.datas;
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
.list {
  width: 1200px;
  margin: 10px auto 0;
  overflow: hidden;
}
.category {
  width: 240px;
  padding-bottom: 100px;
  float: left;
}
.news-list {
  width: 920px;
  float: right;
}
.news-item {
  overflow: hidden;
  margin-bottom: 25px;
}
.date {
  width: 124px;
  float: left;
}
.date:hover .top {
  background: #1474ae;
}
.date:hover .bottom {
  color: #1474ae;
}
.top {
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  background: #aeaeae;
}

.bottom {
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 32px;
  color: #555555;
  background: #e6e6e6;
}
.content {
  width: 754px;
  float: right;
  padding-bottom: 26px;
  border-bottom: 1px dashed #dedede;
}
.title {
  height: 26px;
  line-height: 26px;
  font-size: 20px;
  font-weight: 400;
}
.detail {
  margin-top: 12px;
  line-height: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
