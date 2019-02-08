<template>
  <q-page>
    <q-modal v-model="opened" class="modal">
      <q-card inline style="width: 400px">
        <q-card-title class="text-center bg-primary text-white">
          Saisir votre utilisateur
        </q-card-title>
        <q-card-separator />
        <q-card-main class="cardMain">
          <q-input v-model="userSignup.email" type="email" placeholder="E-mail" />
          <q-input v-model="userSignup.password" type="password" placeholder="Password" />
        </q-card-main>
        <q-card-separator />
        <q-card-actions class="bg-primary text-white">
          <q-btn @click="opened = false" flat>Fermer</q-btn>
          <q-btn @click="signup" flat class="saveBtn">Enregistrer</q-btn>
        </q-card-actions>
      </q-card>
    </q-modal>
    <q-card inline class="q-ma-sm card">
      <q-card-title class="text-center bg-primary text-white">
        Enregistrement / Connexion
      </q-card-title>
      <q-card-separator />
      <form @submit.prevent="login">
        <q-card-main class="cardMain">
            <q-input v-model="userLogin.email" type="email" placeholder="E-mail" />
            <q-input v-model="userLogin.password" type="password" placeholder="Password" />
        </q-card-main>
        <q-card-separator />
        <q-card-actions class="bg-primary text-white">
          <q-btn @click="opened = true" flat>Créer un utilisateur</q-btn>
          <q-btn type="submit" flat>Se connecter</q-btn>
        </q-card-actions>
      </form>
    </q-card>
  </q-page>
</template>

<style lang="stylus" scoped>
.card
  position absolute
  width 310px
  left 50vw
  margin-left -160px
  top 5vh
.saveBtn
  position absolute
  right 0px
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      userLogin: {
        email: '',
        password: ''
      },
      userSignup: {},
      opened: false,
      notifyAlertType: '',
      notifyAlertMessage: ''
    }
  },
  methods: {
    signup: function () {
      this.$axios.post('/api/signup/', this.userSignup)
        .then((res) => {
          this.opened = false
          this.user = {}
          this.notifyAlertType = 'positive'
          this.notifyAlertMessage = 'Utilisateur enregistré !'
        })
        .catch((err) => {
          this.notifyAlertType = 'negative'
          this.notifyAlertMessage = err.response.data
        })
    },
    login: function () {
      this.$axios.post('/api/login/', this.userLogin)
        .then((res) => {
          var user = {}
          var token = res.data.token
          user.id = res.data.userId
          user.email = res.data.email
          this.$q.localStorage.set('user', user)
          this.$q.localStorage.set('token', token)
          this.$store.dispatch('global/addUser', user)
          this.$store.dispatch('global/addToken', token)
          this.$store.dispatch('global/connected')
          this.notifyAlertType = 'positive'
          this.notifyAlertMessage = `Bienvenue ${user.email}`
          setTimeout(() => {
            this.$router.push('todos')
          }, 1000)
        })
        .catch((err) => {
          this.notifyAlertType = 'negative'
          this.notifyAlertMessage = err.response.data
        })
    }
  },
  watch: {
    notifyAlertMessage: function () {
      this.$q.notify({
        type: this.notifyAlertType,
        message: this.notifyAlertMessage,
        position: 'center',
        timeout: 1000
      })
    }
  }
}
</script>
