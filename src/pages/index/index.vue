<template>
  <div class="website_index">
    <search-tool></search-tool>
    <company-boost></company-boost>
  </div>
</template>
<script>
import SearchTool from '@/components/searchTool';
import CompanyBoost from '@/components/companyBoost';


export default {
  name: 'website-index',
  data () {
      return {


      }
  },
  components: {
    SearchTool,
    CompanyBoost,

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
