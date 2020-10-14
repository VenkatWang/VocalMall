<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles"
         class="tabControlItem"
         :class="{active:currentIndex===index}"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabControlClick',index);
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    background-color: #ffffff;
    font-size: 15px;
  }

  .tabControlItem {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .tabControl span {
    padding: 5px;
  }

  .active {
    color: var(--color-hight-text);
  }

  .active span {
    border-bottom: solid 3px var(--color-hight-text);
  }
</style>
