<template>
    <div class="website_link">
        <div class="website_link_content">
            <div class="website_link_logo">
                <img :src="linkLogoImg" alt="公司Logo">
            </div>
            <div class="website_link_url">
                <div v-for="(bl, index) in linkList" :key="index" class="website_link_url_item">
                    <span class="website_link_url_title">{{bl.title}}</span>
                    <span v-for="(de, ind) in bl.links" :key="ind" class="website_link_url_title">
                        <a :href="de.url">{{de.name}}</a>
                    </span>
                </div>
            </div>
            <div class="website_link_code">
                <div v-for="(item, index) in codeList" :key="index" class="website_link_code_item">
                    <div class="website_link_code_img">
                        <img :src="item.url" :alt="item.name">
                    </div>
                    <div class="website_link_code_name">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import linkLogoImg from '@/assets/img/website_link_logo.png';
import linkCodeImg from '@/assets/img/website_link_code.jpg';

export default {
    name: 'website-link',
    data () {
        return {
            linkList: [
                {
                    title: '资讯中心',
                    links: [
                        {name: '行业动态', url: 'www.baidu.com'},
                        {name: '防护知识', url: 'www.baidu.com'}
                    ]
                },
                {
                    title: '服务中心',
                    links: [
                        {name: '合作加盟', url: 'www.baidu.com'},
                        {name: '如何购买', url: 'www.baidu.com'}
                    ]
                },
                {
                    title: '沟通中心',
                    links: [
                        {name: '关于我们', url: 'www.baidu.com'},
                        {name: '联系我们', url: 'www.baidu.com'}
                    ]
                },
            ],
            codeList: [
                {name: '扫描关注微信', url: linkCodeImg},
                {name: '扫描关注微博', url: linkCodeImg},
            ],
            linkLogoImg: linkLogoImg,

        }
    },
    props: {

    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
}
</script>
<style scoped>
.website_link {
    width: 100%;
    background-color: #333333;
}
.website_link .website_link_content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.website_link .website_link_content>div {
    float: left;
}
/* 左侧公司Logo部分样式 */
.website_link .website_link_logo {
    width: 120px;
    height: 140px;
}
.website_link .website_link_logo img {
    width: 100%;
    height: 100%;
}
/* 中间Link部分样式 */
.website_link .website_link_url {
    width: 840px;
}
/* 右侧二维码部分样式 */
.website_link .website_link_code {
    width: 240px;
    overflow: hidden;
}
.website_link .website_link_code .website_link_code_item {
    width: 100px;
    margin-left: 20px;
    padding-top: 10px;
    float: left;
}
.website_link .website_link_code .website_link_code_img {
    width: 100px;
    height: 100px;
}
.website_link .website_link_code .website_link_code_img img {
    width: 100%;
    height: 100%;
}
.website_link .website_link_code .website_link_code_name {
    text-align: center;
    color: #cccccc;
    height: 30px;
    line-height: 30px;
}
</style>
