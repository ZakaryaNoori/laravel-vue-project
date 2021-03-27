<template>
  <section id="login-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" v-if="showAlert">
          <transition name="fade" mode="out-in">
            <!-- <v-alert @onClose="closeAlertMessage">
              <p>{{ alertMessage }}</p>
            </v-alert> -->
          </transition>
          <div class="height-30p"></div>
        </div>
        <div class="col-xl-4">
          <div class="mt-5">
            <h1 class="text-gray-main text-center mb-4">Login</h1>
            <div class="height-20p"></div>
            <div class="mb-3">
              <input class="form-control" :class="errors && errors['email'] ? 'has-error': ''" type="email" v-model="email" placeholder="Email" />
              <small
                class="error-message"
                v-if="errors && errors['email']"
                v-html="errors['email'][0]"
              ></small>
            </div>
            <div class="mb-3">
              <input class="form-control" :class="errors && errors['password'] ? 'has-error': ''" type="password" v-model="password" placeholder="Password" @keyup.enter="submitOnEnter">
              <div class="mt-3" v-if="errors && errors['password']">
                <small
                  class="error-message"
                  v-html="errors['password'][0]"
                ></small>
              </div>
            </div>
            <div class="d-flex flex-row-reverse justify-content-between align-items-center">
              <button class="btn btn-primary" :disabled="disabledLoginButton" @click.prevent="login">
                <!-- <v-loading v-if="isLoading" width="20px"></v-loading> -->
                <span class="d-flex align-items-center">
                  <span>Login</span>
                  <span class="icon-arrow_right ml-2"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="height-200p"></div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        errors: [],
        disabledLoginButton: true,
        isLoading: false,
        showAlert: false,
        alertMessage: ''
      }
    },

    watch: {
      email() {
        if (this.email !== '')
          this.disabledLoginButton = false
      },

      password() {
        if (this.password !== '')
          this.disabledLoginButton = false
      }
    },

    mounted() {
      if (this.$route.params && this.$route.params.message) {
        this.showAlertMessage(this.$route.params.message)
      }
    },

    methods: {
      login() {
        this.errors = []
        this.disabledLoginButton = true
        this.isLoading = true

        this.$auth.login({
          data: {
            email: this.email,
            password: this.password
          },
          fetchUser: true,
          success() {
            this.isLoading = false;
            this.redirectToAdminPanel()
          },
          error(error) {
            this.isLoading = false
            this.disabledLoginButton = true;

            if (
              error.response.status == 422 &&
              error.response.data.hasOwnProperty("errors")
            ) {
              return this.errors = error.response.data.errors
            }

            if (error.response.status == 403) {
              return this.errors = error.response.data.errors;
            }
          }
        })
      },

      submitOnEnter() {
        this.login();
      },

      redirectToAdminPanel() {
        return window.location.href = window.location.origin + "/home"
      },

      showAlertMessage(message) {
        this.showAlert = true
        this.alertMessage = message
      },

      closeAlertMessage() {
        this.showAlert = false
        this.alertMessage = ''
      }
    }
  }
</script>
