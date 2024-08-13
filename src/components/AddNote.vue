<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/NoteStore';
import { useRouter } from "vue-router";


const noteStore = useNoteStore()
const newNoteTitle = ref('')
const newNoteContent = ref('')
const { addNote } = noteStore
const router = useRouter()

const handleSubmit = () => {
    addNote(newNoteTitle.value, newNoteContent.value, router)
    newNoteTitle.value = ''
    newNoteContent.value = ''
}
</script>

<template>
    <div class="container mt-5">
        <h2>新增筆記</h2>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="newNoteTitle" class="form-control" placeholder="請輸入標題">
            <textarea v-model="newNoteContent" class="form-control mt-3" rows="8" placeholder="筆記內容.."></textarea>
        
        <button type="submit" class="btn btn-primary mt-3">新增</button>
        </form>
    </div>
</template>

<style scoped>
</style>