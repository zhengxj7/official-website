<template>
  <div class="company_news">
    <section-title title="新闻资讯"></section-title>
    <div class="company_news_content">
      <div class="company_news_left">
        <div class="company_news_left_tab">
          <div v-for="(tab, index) in tabList" :key="index" class="company_news_tab_item">
            <a :href="tab.url">{{tab.name}}</a>
          </div>
        </div>
        <div class="company_news_left_list">
          <div class="company_news_list_item" v-for="(item, index) in newsList" :key="index">
            <div class="news_item_sort">{{['A', 'B', 'C', 'D', 'E'][index]}}</div>
            <div class="news_item_content">
              <div class="news_item_content_info">
                <a :href="item.url">{{item.title}}</a>
                <span>{{item.date}}</span>
              </div>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="company_news_right">

      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/block/sectionTitle';

export default {
  name: 'company_news',
  data () {
    return {
      tabList: [
        {
          name: '行业动态',
          url: 'https://www.baidu.com'
        },
        {
          name: '海固新闻',
          url: 'https://www.baidu.com'
        },
        {
          name: '防护知识',
          url: 'https://www.baidu.com'
        }
      ],
      newsList: [
        {
          title: '正压式消防空气呼吸器行业标准知识介绍（一）',
          url: 'http://www.czhaigu.com/comnews/2549.html',
          date: '2018-08-02',
          content: '时间已经进入了8月，我们大部分地区也迎来了温度最高的时候，特别是北方地区，干燥少雨，很容易引发火灾，特别是那些存在危险爆炸品的工作环境很容易'
        },
        {
          title: '正压式消防空气呼吸器行业标准知识介绍（一）',
          url: 'http://www.czhaigu.com/comnews/2549.html',
          date: '2018-08-02',
          content: '时间已经进入了8月，我们大部分地区也迎来了温度最高的时候，特别是北方地区，干燥少雨，很容易引发火灾，特别是那些存在危险爆炸品的工作环境很容易'
        },
        {
          title: '正压式消防空气呼吸器行业标准知识介绍（一）',
          url: 'http://www.czhaigu.com/comnews/2549.html',
          date: '2018-08-02',
          content: '时间已经进入了8月，我们大部分地区也迎来了温度最高的时候，特别是北方地区，干燥少雨，很容易引发火灾，特别是那些存在危险爆炸品的工作环境很容易'
        },
        {
          title: '正压式消防空气呼吸器行业标准知识介绍（一）',
          url: 'http://www.czhaigu.com/comnews/2549.html',
          date: '2018-08-02',
          content: '时间已经进入了8月，我们大部分地区也迎来了温度最高的时候，特别是北方地区，干燥少雨，很容易引发火灾，特别是那些存在危险爆炸品的工作环境很容易'
        },
        {
          title: '正压式消防空气呼吸器行业标准知识介绍（一）',
          url: 'http://www.czhaigu.com/comnews/2549.html',
          date: '2018-08-02',
          content: '时间已经进入了8月，我们大部分地区也迎来了温度最高的时候，特别是北方地区，干燥少雨，很容易引发火灾，特别是那些存在危险爆炸品的工作环境很容易'
        }
      ]
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
.company_news {
  width: 100%;
}
.company_news .company_news_content {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
/* 左侧tab按钮样式 */
.company_news .company_news_left_tab {
  width: 140px;
  float: left;
  border: 1px solid #dbdbdb;
  margin-right: 40px;
}
.company_news .company_news_left_tab .company_news_tab_item {
  width: 100%;
  height: 116px;
  line-height: 116px;
  text-align: center;
}
/* 中间资讯列表样式 */
.company_news .company_news_left_list {
  width: 420px;
  float: left;
}
.company_news .company_news_left_list .company_news_list_item {
  overflow: hidden;
  margin-bottom: 20px;
}
.company_news .company_news_left_list .news_item_sort {
  float: left;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #c1c1c1;
  font-size: 16px;
  font-weight: bold;
  background-color: #efefef;
  margin-right: 20px;
}
.company_news .company_news_left_list .news_item_content {
  float: left;
  width: 360px;
}
.company_news .company_news_left_list .news_item_content_info {
  overflow: hidden;
}
.company_news .company_news_left_list .news_item_content_info>a {
  display: block;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: left;
  text-decoration: none;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.company_news .company_news_left_list .news_item_content_info>span {
  display: block;
  width: 73px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: right;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
}
.company_news .company_news_left_list .news_item_content>p {
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 右侧视频样式 */
.company_news .company_news_right {

}
</style>
