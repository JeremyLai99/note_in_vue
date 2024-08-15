<script setup>
import { useRouter } from 'vue-router';
import { useNoteStore } from '../stores/NoteStore';
import { ref } from 'vue'

const router = useRouter()
const noteStore = useNoteStore()
const keyword = ref('')

const searchKeyword = async () => {
    const results = await noteStore.serachNote(keyword.value)
    router.push({ name: 'search', params: {searchResults: results}})
}
 
const clearPlaceholder = () => {
    document.querySelector('#keyword').placeholder = 'Search'
}
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
            

            <form class="d-flex" @submit.prevent="searchKeyword">
                <input id="keyword" v-model="keyword" @keyup.enter="searchKeyword" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" @focus="clearPlaceholder">
                <button class="btn btn-outline-success" type="submit" @click="searchKeyword"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>

        </div>
    </nav>

</template>

<style scoped>
.logo{
    width: 100px;
}
</style>