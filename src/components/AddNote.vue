<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/NoteStore';
import { storeToRefs } from 'pinia';

const noteStore = useNoteStore()
const newNoteTitle = ref('')
const newNoteContent = ref('')
const { addNote } = noteStore

</script>

<template>
    <div class="container mt-5">
        <h2>新增筆記</h2>
        <form @submit.prevent="addNote">
            <input type="text" v-model="newNoteTitle" class="form-control" placeholder="請輸入標題">
            <textarea v-model="newNoteContent" class="form-control mt-3" rows="8" placeholder="筆記內容.."></textarea>
        </form>
        <button class="btn btn-primary mt-3" @click="addNote(newNoteTitle, newNoteContent)">新增</button>
    </div>
</template>

<style scoped>
</style>