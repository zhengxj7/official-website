<template>
  <div class="website_index">
    <search-tool></search-tool>
    <company-boost></company-boost>
    <company-introduction></company-introduction>
    <company-news></company-news>
  </div>
</template>
<script>
import SearchTool from '@/components/searchTool';
import CompanyBoost from '@/components/companyBoost';
import CompanyIntroduction from '@/components/companyIntroduction';
import CompanyNews from '@/components/companyNews';

export default {
  name: 'website-index',
  data () {
      return {

      }
  },
  components: {
    SearchTool,
    CompanyBoost,
    CompanyIntroduction,
    CompanyNews,

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

