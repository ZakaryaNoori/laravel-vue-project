<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse d-flex align-items-center justify-content-between" v-if="$auth.check()">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Products List</router-link>
                    <router-link to="/create" class="nav-item nav-link">Create Product</router-link>
                </div>
                <div>
                    <router-link to="/logout" class="nav-item nav-link">Logout</router-link>
                </div>
            </div>
        </nav>

        <router-view> </router-view>
    </div>
</template>

<script>
    export default {}
</script>
