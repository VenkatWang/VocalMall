<template>
  <div class="recommendsBox">
    <div v-for="item in recommends" class="recommendsItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommends",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommendsBox {

    width: 100%;
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;

  }
  .recommendsItem{
    flex: 1;
  }
  .recommendsItem img{
    width: 70px;
    height: 70px;
    margin-bottom:10px ;
  }
</style>
