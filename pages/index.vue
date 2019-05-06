<template>
  <section class="container">
    <div style="width: 100%;">
      <mainlist />
    </div>
  </section>
</template>

<script>
import MainList from '@@/components/match-list/MainList.vue'
export default {
  components: {
    'mainlist': MainList
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
