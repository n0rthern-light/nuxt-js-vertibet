<template>
  <section class="container" style="margin-top: -10px;">
    <div style="width: 100%;">
      <listitem :key="match.name" :match="match"/>
    </div>
  </section>
</template>

<script>
import ListItem from '@@/components/match-list/ListItem.vue'
export default {
  components: {
    'listitem': ListItem
  },
  data () {
    return {
      match: {
        name: 'Polska - Portugalia'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .match-list-item {
    width: 100%!important;
    max-width: none;
    height: 40vh;
    padding-left: 70px;
    padding-right: 70px;

    .team {

        .team-details {
          img {
            max-width: 84px!important;
            width: 84px!important;
          }
        }
    }

    &:hover {
      cursor: default;
      border-color: transparent;
    }
  }

  @media only screen and (max-width: 880px) {
    .match-list-item {
      padding-left: 20px!important;
      padding-right: 20px!important;
    }
  }
</style>
