<template>
  <div id="activityBar">
    <a-layout-sider class="side-menu-left" width="190">
      <ul class="notification_list">
        <li class="notification_item" v-for="message in messages" :key="message._id">
          <p> {{ getRelativeDate(message.createdAt, false, Date.now) }} </p>
          <p> {{ message.message }} </p>
        </li>
      </ul>
    </a-layout-sider>
  </div>
</template>

<script>
import { main } from '@@/mixins/main'
export default {
  mixins: [ main ],
  data () {
    return {
      messages: []
    }
  },
  mounted() {
    /* eslint-disable */
    const connection = this.connectSocket()
    /* eslint-enable */

    setInterval(() => { this.getActivities() }, 1000)
  },
  methods: {
    async getActivities () {
      this.messages = (await this.$axios.get('api/sockets/get_activities')).data
      // console.log(this.messages)
    }
  }
}
</script>

<style lang="scss" scoped>
  .side-menu-left {
    height: calc(100vh - 66px);
    position: fixed;
    right: 0;
    top: 66px;
    background: #0E0B16;
  }

  ul.notification_list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li.notification_item {
      padding: 15px;
      padding-bottom: 0;
      p {
        margin: 0;
        &:first-child {
          opacity: 0.7;
        }
      }
    }
  }
</style>
