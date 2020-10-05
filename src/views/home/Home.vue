<template>
  <div>
    <nav-bar class="navBar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data(){
      return {
        banners:null,
        recommends:null
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .navBar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
