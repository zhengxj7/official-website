<template>
  <div class="company_news">
    <section-title title="新闻资讯" :sectionTitleImg="newsTitleImg"></section-title>
    <div class="company_news_content">
      <div class="company_news_left">
        <div class="company_news_left_tab">
          <div v-for="(tab, index) in tabList" :key="index" @mouseover="selectTab(tab)" :class="{company_news_tab_item: true, active_tab: index==currentTab}">
            <a :href="tab.url">{{tab.name}}</a>
          </div>
        </div>
        <div class="company_news_left_list">
          <div class="company_news_list_item" v-for="(item, index) in currentTabList" :key="index">
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
        <video :src="videoUrl" width="550" height="350" controls="controls"></video>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/block/sectionTitle';
import newsTitleImg from '@/assets/img/website_index_news.jpg';

export default {
  name: 'company_news',
  data () {
    return {
      videoUrl: 'http://cloud.video.taobao.com//play/u/2168657336/p/1/e/6/t/1/50053950152.mp4',
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
      newsList: [], // 海固新闻列表
      hangyeList: [], // 行业动态列表
      protectList: [], // 防护知识列表
      currentTabList: [],
      currentTab: 1,
      newsTitleImg: newsTitleImg
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
    this.getNewsList();
  },
  methods: {
    getNewsList () {
      this.$get('news/list?topic=hydt', {}).then(res => {
        if (res.success) {
          this.newsList = res.obj;
          this.currentTabList = res.obj;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    selectTab (val) {
      console.log(val.name);
      switch (val.name) {
        case '行业动态':
          // 如果hangyeList为[]则调用接口
          this.currentTabList = this.hangyeList;
          this.currentTab = 0;
          break;
        case '海固新闻':
          // 如果newsList为[]则调用接口
          this.currentTabList = this.newsList;
          this.currentTab = 1;
          break;
        case '防护知识':
          // 如果protectList为[]则调用接口
          this.currentTabList = this.protectList;
          this.currentTab = 2;
          break;
        default:
          // 如果newsList为[]则调用接口
          this.currentTabList = this.newsList;
          break;
      }
    }
  }
}
</script>
<style scoped>
.company_news {
  width: 100%;
  margin-bottom: 20px;
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
/* 当前选中的tab */
.company_news .company_news_left_tab .company_news_tab_item.active_tab {
  background-color: #1474ae;
}
.company_news .company_news_left_tab .company_news_tab_item.active_tab a {
  color: #ffffff;
}
.company_news .company_news_left_tab .company_news_tab_item a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
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
/* 新闻前的编号 */
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
  margin-top: 7px;
}
.company_news .company_news_left_list .news_item_content {
  float: left;
  width: 360px;
}
/* 新闻第一行 */
.company_news .company_news_left_list .news_item_content_info {
  overflow: hidden;
}
/* 新闻第一行标题 */
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
.company_news .company_news_left_list .news_item_content_info>a:hover {
  text-decoration: underline;
}
/* 新闻第一行日期 */
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
/* 新闻第二行内容 */
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
  float: right;
  width: 550px;
  height: 350px;
}
</style>
