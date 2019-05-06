<template>
  <div class="category-wrapper">
    <div class="row-two">
      <a-card title="Dodaj nową">
        <a-form
          theme="dark"
          @submit="addNewCategory"
          width="100%"
        >
          <a-form-item
            label="Nazwa"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                'nazwa',
                {rules: [{ required: true, message: 'Należy podać nazwę nowej kategorii!' }]}
              ]"
              v-model="category_new_name"
            />
          </a-form-item>
          <a-form-item
            label="Rodzic"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-tree-select
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto', color: 'black' }"
              :treeData="treeData"
              placeholder="Wybierz rodzica kategorii"
              treeDefaultExpandAll
              v-model="category_new_parent"
              theme="dark"
            >
              <span style="color: black;" slot="title" slot-scope="{key, value}">
                {{ value }}
              </span>
            </a-tree-select>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="default"
              html-type="submit"
              size="large"
              :loading="loading"
            >
              Dodaj
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
      <a-card title="Dostępne">
        <div style="overflow: auto; max-height: 300px; width: 100%; color: rgba(252,252,252,255)!important;">
          <categorylist v-for="category in categories" :key="category._id" :category="category"/>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { main } from '@@/mixins/main'
import CategoryList from '@@/components/misc/CategoryList'
export default {
  components: {
    'categorylist': CategoryList
  },
  mixins: [main],
  data () {
    return {
      categories: [],
      category_new_name: '',
      category_new_parent: undefined,

      treeData: [],

      loading: false
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      const { data } = await this.$axios.get('api/admin/category/get_categories')
      console.table(data)
      this.categories = this.assignCategories(data)
      console.log(this.categories)
      this.treeData = this.assignTreeData(data)
      console.log(this.treeData)
    },
    async addNewCategory (e) {
      e.preventDefault()
      e.stopPropagation()
      this.loading = true
      const result = await this.$axios.post('/api/admin/category/add_category', {
        name: this.category_new_name,
        id_parent: this.category_new_parent
      })
      console.log(result)
      await this.getCategories()
      this.category_new_name = ''
      this.category_new_parent = undefined
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .category-wrapper {
    .row-two {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 50px;
      & > * {
        flex: 1;
        margin: 35px;
      }
    }
  }
</style>

