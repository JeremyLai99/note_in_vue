<script setup>
import { ref, computed, watch } from 'vue';
import { useNoteStore } from '../stores/NoteStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const noteStore = useNoteStore()
const currentNote = computed(()=> noteStore.notes.find(note => note.id === parseInt(route.params.id)))
const newNoteTitle = ref(currentNote.value? currentNote.value.title : '')
const newNoteContent = ref(currentNote.value? currentNote.value.content : '')
const showSuccessAlert = ref('')

// 監聽currentNote是否有更新, 有的話更新newNote
watch(currentNote, (newNote) => {
    if(newNote) {
        newNoteTitle.value = newNote.title
        newNoteContent.value = newNote.content
    }
})

const updateNote = () => {
    if (currentNote.value) {
        // 更新筆記
        currentNote.value.title = newNoteTitle.value
        currentNote.value.content = newNoteContent.value
        noteStore.edditNote(currentNote.value.id, currentNote.value.title, currentNote.value.content)
        // 顯示更新成功消息
        showSuccessAlert.value = true

        // 設定1秒後提示消失, 跳回首頁
        setTimeout(() => {
            showSuccessAlert.value = false
            router.push('/')
        }, 1000)
    }
}

const cancelUpdate = ()=> {
    router.push('/')
}




</script>

<template>
    <div class="container mt-5">
        <!-- 設v-if決定顯示更新成功的訊息 -->
        <div class="alert alert-success" role="alert" v-if="showSuccessAlert">
            更新成功!
        </div>
        <h2>更新筆記</h2>
        <form @submit.prevent="updateNote">
            <input type="text" v-model="newNoteTitle" class="form-control">
            <textarea v-model="newNoteContent" class="form-control mt-3" rows="8"></textarea>
        
            <button class="btn btn-success mt-3" @click="updateNote">更新 <i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn btn-danger mt-3 ms-3" @click="cancelUpdate">取消更新 <i class="fa-solid fa-xmark"></i></button>
        </form>
    </div>
</template>

<style scoped>

.alert-success{
  transition: all 0.3s;
}
</style>