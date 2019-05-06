<template>
  <a-layout id="mainWrapper">
    <a-layout-header class="header" style="position: fixed; z-index: 1; width: 100%; padding: 0;">
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
        class="app-dark"
      >
        <a-menu-item key="1" class="logo" @click="$router.push('/')">
          <span class="details-color bold transition-300">VERTI</span><span class="bold">BET</span><span class="details-color bold transition-300">.com</span>
        </a-menu-item>
        <a-menu-item key="2">
          Ekstraklasa
        </a-menu-item>
        <a-menu-item key="4">
          Liga Hiszpańska
        </a-menu-item>
        <a-menu-item key="5">
          Liga Niemiecka
        </a-menu-item>
        <a-menu-item key="6">
          Liga Włoska
        </a-menu-item>
        <a-menu-item key="7">
          Liga Francuska
        </a-menu-item>
        <a-menu-item v-if="$store.state.user" style="float: right;">
        <a-dropdown placement="bottomRight">
          <a-button type="primary" class="bold">
            <a-icon type="user" /> {{ $store.state.user.username }}
          </a-button>
          <a-menu slot="overlay" theme="dark">
            <a-menu-item v-if="$store.state.user.isAdmin">
              <a target="_blank" rel="noopener noreferrer"><a-icon type="unlock" /> Admin</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer"><a-icon type="idcard" /> Profil</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer"><a-icon type="setting" /> Ustawienia</a>
            </a-menu-item>
            <a-menu-item>
              <a rel="noopener noreferrer" @click="logout"><a-icon type="logout" /> Wyloguj</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        </a-menu-item>
        <a-menu-item v-else @click="modalLogin = true" style="float: right;">
          <a-button type="primary" class="bold">
            <a-icon type="login" /> Zaloguj się
          </a-button>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout style="padding-top: 64px;">
      <a-layout-sider width="220" class="side-menu">
        <categorylist />
      </a-layout-sider>
      <a-layout style="padding: 0; background-color: black;">
        <a-layout-content class="main-container" style="margin-right: 190px; margin-left: 220px;">
          <nuxt />
        </a-layout-content>
        <activitybar />
      </a-layout>
    </a-layout>
    <a-modal
      title="Zaloguj się"
      v-model="modalLogin"
      centered
      closable
      :footer="null"
    >
      <modallogin @openRegister="openRegister" @closeModalLogin="closeLogin"/>
    </a-modal>
    <a-modal
      title="Zarejestruj się"
      v-model="modalRegister"
      centered
      closable
      :footer="null"
    >
      <modalregister @openLogin="openLogin" @closeModalRegister="closeRegister"/>
    </a-modal>
  </a-layout>
</template>
<script>
import ModalLogin from '@@/components/modals/ModalLogin'
import ModalRegister from '@@/components/modals/ModalRegister'
import ActivityBar from '@@/components/sockets/ActivityBar'
import CategoryListClient from '@@/components/misc/CategoryListClient'
export default {
  components: {
    'modallogin': ModalLogin,
    'modalregister': ModalRegister,
    'activitybar': ActivityBar,
    'categorylist': CategoryListClient
  },
  data() {
    return {
      modalLogin: false,
      modalRegister: false
    }
  },
  beforeCreate () {
    (() => {
      this.$store.dispatch('loginState')
    })()
  },
  methods: {
    openRegister () {
      this.modalLogin = false
      this.modalRegister = true
    },
    openLogin () {
      this.modalRegister = false
      this.modalLogin = true
    },
    closeLogin () {
      this.modalLogin = false
    },
    closeRegister () {
      this.modalRegister = false
    },
    logout () {
      console.log('logging out...')
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss">
@import "./assets/styles/global.scss";
* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'PT-Sans-Normal'
}

#mainWrapper {
  min-height: 100vh;

  .header {
    .logo {
      span {
        font-size: 1.2em;
        letter-spacing: 1px;
        &.details-color {
          &:hover {
            color: $color-details-4!important;
          }
        }
      }
      width: 190px;
      text-align: center;
    }
  }

  .main-container {
    background-color: $color-bg-3!important;
  }
}
</style>
