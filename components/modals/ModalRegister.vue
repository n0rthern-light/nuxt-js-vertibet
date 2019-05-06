<template>
  <div class="modal-content">
    <a-input size="medium" placeholder="Email" v-model="email"/>
    <a-input size="medium" placeholder="Nazwa użytkownika (opcjonalnie)" v-model="username"/>
    <a-input type="password" size="medium" placeholder="Hasło" v-model="pass1"/>
    <a-input type="password" size="medium" placeholder="Powtórz hasło" v-model="pass2"/>
    <a-button type="primary" @click="register" :loading="loading" block>Załóż konto</a-button>
    <span>Masz już konto? <a @click="openLogin">Zaloguj się.</a></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      username: '',
      pass1: '',
      pass2: '',
      loading: false
    }
  },
  methods: {
    openLogin (e) {
      e.preventDefault()
      this.$emit('openLogin', true)
    },
    async register () {
      try {
        this.loading = true
        if (this.pass1 !== this.pass2) {
          throw 'Podane hasła nie są takie same.'
        }

        if (!this.email || this.email === '' || !this.email.match(new RegExp('.+@.+\\..+', 'g'))) {
          throw 'Email jest nie poprawny'
        }

        const createAccount = await this.$axios.post('api/userauth/register', {
          email: this.email,
          username: this.username,
          pass1: this.pass1,
          pass2: this.pass2
        })

        if (!createAccount || createAccount.data === false || !createAccount.data) {
          throw 'Rejestracja nie powiodła się'
        }



        const loginUser = await this.$store.dispatch('login', {
          email: this.email,
          password: this.pass1
        })

        this.email = ''
        this.username = ''
        this.pass1 = ''
        this.pass2 = ''

        this.loading = false

        console.log(loginUser)
        if (!loginUser) {
          throw 'Logowanie nie powiodło się.'
        }

        this.$emit('closeModalRegister', true)
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
