<template>
<div class="category-container-client">
  <a-tree
          checkable
          autoExpandParent
          v-model="checkedKeys"
          :selectedKeys="selectedKeys"
          :treeData="treeData"
  />
</div>
</template>

<script>
import { main } from '@@/mixins/main'
export default {
  mixins: [main],
  data () {
    return {
      treeData: [],
      checkedKeys: [],
      selectedKeys: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const { data } = await this.$axios.get('api/admin/category/get_categories')
      this.treeData = this.assignTreeData(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.category-container-client {
}
</style>
