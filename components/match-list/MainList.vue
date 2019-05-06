<template>
  <div class="match-list-main">
    <div class="header-container">
    <h1 class="bold-italic">Ekstraklasa</h1>
    </div>
    <div class="search-contrainer">
      <input type="text" placeholder="Szukaj meczu..." autocomplete="off"/>
    </div>
    <div class="filter-container">
    <a class="bold">Nowe</a><a class="bold">Popularne</a><a class="bold">Duża wygrana</a><a class="bold">Pewna szansa</a>
    </div>
    <div class="finaly-list-container">
      <listitem v-for="match in matchList" :key="match.name" :match="match" @click.native="$router.push('/match')"/>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
import { main } from '@@/mixins/main'
export default {
  components: {
    'listitem': ListItem
  },
  mixins: [ main ],
  data() {
    return {
      matchList: [
        {
          name: 'Polska - Portugalia'
        },
        {
          name: 'Niemcy - Anglia'
        },
        {
          name: 'Chorwacja - Szkocja'
        },
        {
          name: 'Luksemburg - Lichtenstein'
        },
        {
          name: 'Polska - Portugalia'
        },
        {
          name: 'Niemcy - Anglia'
        },
        {
          name: 'Chorwacja - Szkocja'
        },
        {
          name: 'Luksemburg - Lichtenstein'
        },
        {
          name: 'Polska - Portugalia'
        },
        {
          name: 'Niemcy - Anglia'
        },
        {
          name: 'Chorwacja - Szkocja'
        },
        {
          name: 'Luksemburg - Lichtenstein'
        },
        {
          name: 'Polska - Portugalia'
        },
        {
          name: 'Niemcy - Anglia'
        },
        {
          name: 'Chorwacja - Szkocja'
        },
        {
          name: 'Luksemburg - Lichtenstein'
        },
        {
          name: 'Polska - Portugalia'
        },
        {
          name: 'Niemcy - Anglia'
        },
        {
          name: 'Chorwacja - Szkocja'
        },
        {
          name: 'Luksemburg - Lichtenstein'
        },
        {
          name: 'Polska - Portugalia'
        },
        {
          name: 'Niemcy - Anglia'
        },
        {
          name: 'Chorwacja - Szkocja'
        },
        {
          name: 'Luksemburg - Lichtenstein'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
  .match-list-main {
    .header-container {
      width: 100%;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: $color-bg-3;
      // border-bottom: 1px solid $color-details-2;

      h1 {
        margin: 0;
        font-size: 48px;
        line-height: 48px;
        letter-spacing: 3px;
      }
    }

    .search-contrainer {
      width: 100%;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      input[type="text"] {
        margin: 0;
        width: 100%;
        max-width: 500px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid $color-text;
        color: $color-text;
        font-size: 1.3em;
        padding: 5px 15px;

        &::placeholder {
          color: $color-text
        }

        &:active, &:focus {
          color: $color-text-2;
          border-bottom: 1px solid $color-text-2;
          outline: none;
        }
      }
    }

    .filter-container {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        margin: 0;
        margin-left: 20px;
        margin-right: 20px;
        display:inline-block;
        font-size: 1.5em;
        color: $color-text;
        &:hover {
          color: $color-text-2;
        }

        &:first-of-type {
          margin-left: 0;
        }

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;

    & * {
      text-align: center;
    }

    .finaly-list-container {
      padding-top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      justify-items: center;
      flex-direction: column;

      & * {
        text-align: center;
      }
    }
  }
</style>
