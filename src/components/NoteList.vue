<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/NoteStore';
import { storeToRefs } from 'pinia';

const noteStore = useNoteStore()


</script>

<template>
    <div class="sideBar mt-5">
        <router-link :to="{ name: 'add'}" class="d-flex justify-content-center">
            <button class="btn btn-warning">新增筆記</button>
        </router-link>

    </div>
</template>

<style scoped>
</style>