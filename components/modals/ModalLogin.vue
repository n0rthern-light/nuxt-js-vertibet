<template>
  <div class="modal-content">
    <a-input size="medium" placeholder="Email" v-model="email"/>
    <a-input type="password" size="medium" placeholder="Hasło" v-model="password"/>
    <a-button type="primary" :loading="loading" block @click="login">Zaloguj</a-button>
    <span>Nie masz konta? <a @click="openRegister">Załóż je.</a></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    openRegister (e) {
      e.preventDefault()
      this.$emit('openRegister', true)
    },
    async login () {
      try {
        this.loading = true
        if (!this.email || this.email === '' || !this.email.match(new RegExp('.+@.+\\..+', 'g'))) {
          console.log(this.email)
          throw 'Email jest nie poprawny.'
        }
        if (!this.password || this.password === '') {
          console.log(this.password)
          throw 'Musisz podać hasło.'
        }

        const loginUser = await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })

        console.log(loginUser)
        if (!loginUser) {
          throw 'Logowanie nie powiodło się.'
        }

        this.email = ''
        this.password = ''

        this.loading = false

        this.$emit('closeModalLogin', true)
      } catch (e) {
        this.loading = false
        alert(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-content {
    width: 100%;
    padding: 50px;

    & > * {
      margin: 10px 0 10px 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

  }
</style>
