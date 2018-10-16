<template>
  <div id="app">
    <router-view/>
    <website-link></website-link>
    <website-footer></website-footer>
  </div>
</template>

<script>
import websiteFooter from '@/components/footer';
import websiteLink from '@/components/linkUs';
export default {
  name: 'App',
  components: {
    websiteFooter,
    websiteLink,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #555555;
  box-sizing: border-box;
}

</style>
