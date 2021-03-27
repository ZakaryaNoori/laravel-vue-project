import VueAxios from "vue-axios";
import VueAuth from "@websanova/vue-auth";
import Vue from "vue";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(VueAuth, {
    auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
    http: require("@websanova/vue-auth/drivers/http/axios.1.x.js"),
    router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js"),
    loginData: {
        url: `http://localhost:8000/api/auth/login`,
        method: "POST",
        fetchUser: true
    },
    logoutData: {
        url: `http://localhost:8000/api/auth/logout`,
        method: "POST",
        makeRequest: false
    },
    refreshData: {
        url: `http://localhost:8000/api/auth/refresh`,
        method: "GET",
        enabled: true,
        interval: 30
    },
    fetchData: { url: `http://localhost:8000/api/auth/user`, method: "GET", enabled: true },
    rolesVar: "perms"
});
