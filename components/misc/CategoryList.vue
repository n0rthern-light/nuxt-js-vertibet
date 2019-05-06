<template>
  <div v-if="category.childs">
    <span slot="title">{{ category.name }} <span class="badge">({{ category.childs.length }})</span></span>
    <categorylist class="margin-left-node" v-for="childcat in category.childs" :key="childcat._id" :category="childcat"/>
  </div>
  <div v-else>
    <span slot="title">{{ category.name }}</span>
  </div>
</template>

<script>
export default {
  props: ['category'],
  name: 'categorylist'
}
</script>

<style lang="scss" scoped>
 .margin-left-node {
   margin-left: 25px;
   position: relative;
   &::before {
     content: '˪';
     position: absolute;
     top: -4px;
     left: -11px;
   }
 }

</style>
