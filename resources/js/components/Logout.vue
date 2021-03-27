<template></template>
<script>
  export default {
    mounted() {
      if(this.$auth.user().id) {
        let self = this
        this.$auth.logout({
          makeRequest: true,
          success(response) {
            self.redirectToLoginPage()
          }
        })
      } else {
        this.redirectToLoginPage()
      }
    },
    methods: {
      redirectToLoginPage() {
        localStorage.removeItem('default_auth_token')

        window.location.href = window.location.origin
      }
    }
  }
</script>
