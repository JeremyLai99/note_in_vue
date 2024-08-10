<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid ">
            <div>
                <a class="navbar-brand d-flex align-items-center" href="/">
                    <img src="/logo.png" class="logo">
                    <p>My Note</p>
                </a>
            </div>
            

            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
    </nav>

</template>

<style scoped>
.logo{
    width: 100px;
}
</style>