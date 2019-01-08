<template>
  <div class="content">
    <div class="category">
      <news-category></news-category>
    </div>
    <div class="detail">
      <div class="title">{{ newsDetail.name }}</div>
      <div class="info">
        <span>作者：{{ newsDetail.author }}</span>
        <span>发表时间：{{ newsDetail.modifyTime | dateFormate }}</span>
      </div>
      <div class="main-content">
        {{ newsDetail.content }}
      </div>
    </div>
  </div>
</template>
<script>
import NewsCategory from '../../components/newsCaterogy'
export default {
  name: 'news-content',
  data () {
    return {
      newsDetail: {},
    }
  },
  mounted () {
    this.getNewsDetail(this.$route.params.id)
  },
  components: {
    NewsCategory
  },
  methods: {
    getNewsDetail (_id) {
      this.$get(`news/detail/${_id}`, {}).then(res => {
        if (res.success) {
          this.newsDetail = Object.assign({}, this.newsDetail, res.obj);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
.content {
  width: 1200px;
  margin: 10px auto 0;
  overflow: hidden;
}
.category {
  width: 240px;
  float: left;
}
.detail {
  width: 920px;
  float: right;
}
.title {
  font-size: 24px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  color: #555555;
}
.info {
  font-size: 12px;
  text-align: center;
  height: 35px;
  line-height: 35px;
  color: #666666;
  background: #ebebeb;
}
.main-content {
  padding: 25px 0;
  font-size: 16px;
  line-height: 32px;
  text-indent: 32px;
}
</style>
