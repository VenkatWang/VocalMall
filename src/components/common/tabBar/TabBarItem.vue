<template>
  <div class="tabBarItem" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
<!--    <div :class="{active:isActive}">-->
<!--      <slot name="item-text"></slot>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        // isActive: false,
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    }

  }
</script>

<style scoped>
  .tabBarItem {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tabBarItem img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  /*.active {*/
  /*  color: red;*/
  /*}*/
</style>
