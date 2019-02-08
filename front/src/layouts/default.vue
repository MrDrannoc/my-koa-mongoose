<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          Todolist application
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <q-btn color="white" text-color="primary" v-if="connected" @click="logout">Logout</q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data () {
    return {
      notifyAlertType: '',
      notifyAlertMessage: ''
    }
  },
  computed: {
  // récuperer du state du store
    connected () {
      return this.$store.state.global.connected
    }
  },
  methods: {
    logout: function () {
      this.$q.localStorage.remove('user')
      this.$q.localStorage.remove('token')
      this.$store.dispatch('global/disconnected')
      this.notifyAlertType = 'positive'
      this.notifyAlertMessage = 'A bientôt!'
      this.$router.push('/')
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

<style>
</style>
