<template>
  <div class="category-wrapper">
    <div class="row-two">
      <a-card title="Dodaj nową drużynę">
        <a-form
          theme="dark"
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
                {rules: [{ required: true, message: 'Należy podać nazwę nowej drużyny!' }]}
              ]"
              v-model="teamName"
            />
          </a-form-item>
          <a-form-item
            label="Logo"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-upload
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="../../api/fileupload/image"
              :beforeUpload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" style="height: auto; max-width: 300px;"/>
              <div v-else>
                  <a-icon :type="loading ? 'loading' : 'plus'" />
                  <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>

          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="default"
              html-type="submit"
              size="large"
              :loading="loading"
              @click="addTeam"
            >
              Dodaj
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
      <a-card title="Dostępne">
        <div style="overflow: auto; max-height: 300px; width: 100%; color: rgba(252,252,252,255)!important;">
          <ul style="list-style-type: none;">
            <li v-for="team in teams" :key="team._id"><a-avatar size="small" :src="'/img/' + team.logo" /> {{ team.name }} </li>
          </ul>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { main } from '@@/mixins/main'
export default {
  components: {
  },
  mixins: [main],
  data () {
    return {
      teamName: '',
      imageName: '',
      loading: false,
      imageUrl: '',

      teams: []
    }
  },
  mounted () {
    this.getTeams()
  },
  methods: {
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        const { name } = info.file.response
        this.imageName = name
        this.imageUrl = '../img/' + name
        this.loading = false
      }
    },
    beforeUpload (file) {
      const isImage = file.type.match(new RegExp('image/.+', 'i')) ? true : false
      if (!isImage) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isImage && isLt2M
    },
    async addTeam (e) {
      e.preventDefault()
      e.stopPropagation()

      this.loading = true

      const { data } = await this.$axios.post('/api/admin/team/add_team', {
        name: this.teamName,
        logo: this.imageName
      })
      this.loading = false

      if (data === true) {
        this.teamName = ''
        this.imageName = ''
        this.imageUrl = ''
        this.getTeams()
      }
    },
    async getTeams () {
      const { data } = await this.$axios.get('api/admin/team/get_teams')
      this.teams = data
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

