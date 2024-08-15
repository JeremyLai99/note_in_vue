<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/NoteStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

let selectedNoteId = null
const router = useRouter()

const noteStore = useNoteStore()
const { togglePinned } = noteStore

const showDeleteModal = (note) =>{
    selectedNoteId = note.id
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'))
    modal.show()
}

const confirmDelete = () =>{
    if(selectedNoteId != null) {
        noteStore.deleteNote(selectedNoteId)
    } else {
        alert('找不到這份筆記')
    }
    const modalElement = document.getElementById('deleteModal')
    const modal = bootstrap.Modal.getInstance(modalElement)
    modal.hide()
}


</script>

<template>
    <div class="sideBar">
        <router-link :to="{ name: 'add'}">
            <button class="btn btn-warning w-100">新增筆記</button>
        </router-link>

        <div class="important">
            <h4><i class="fa-solid fa-thumbtack me-2" style="color: red;"></i> 重要</h4>
            <div v-for="note in noteStore.pinnedNotes" :key="note.id" class="listItem d-flex justify-content-between">
                <router-link :to="{ name: 'edit', params: { id: note.id} }" style="width: 220px;">
                    <div class="note-title ms-2" >{{ note.title }}</div>
                </router-link>
                <div class="">
                    <i class="fa-solid fa-thumbtack me-3 rotate" @click="togglePinned(note.id)"></i>
                    <i class="fa-regular fa-trash-can me-2" @click="showDeleteModal(note)"></i>
                </div>                    
            </div>
        </div>
        <div class="others">
            <h4><i class="fa-solid fa-list-check me-2"  style="color: brown;"></i> 其他</h4>
            <div v-for="note in noteStore.allNotes" :key="note.id" class="listItem d-flex justify-content-between">
                <router-link :to="{ name: 'edit', params: { id: note.id} }" style="width: 220px;">
                    <div class="note-title ms-2" >{{ note.title }}</div>
                </router-link>
                <div class="">
                    <i class="fa-solid fa-thumbtack me-3" @click="togglePinned(note.id)"></i>
                    <i class="fa-regular fa-trash-can me-2" @click="showDeleteModal(note)"></i>
                </div>                    
            </div>
        </div>

    </div>
    <!-- 刪除警示modal -->
    <div class="modal" tabindex="-1" id="deleteModal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">刪除筆記</h5>                
            </div>
            <div class="modal-body">
                <p>確定刪除筆記?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="confirmDelete">確定</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sideBar{
padding-left: 20px
}


.important, .others{
    margin-top: 20px;
    padding-left: 20px;
}

.rotate{
    color: red;
    transform: rotate(45deg);
    cursor: pointer;
}
.listItem{
    border: none;
    padding: 5px 0px;
    background: transparent;
    cursor: pointer;
  }
  .listItem:hover{
    background-color:rgb(246, 204, 150);
  }
  .listItem:hover .note-title,
  .listItem:hover .fa-trash-can {
  color: white;
}
  .note-title{
    font-size: 18px;
    font-weight: bold;
    width: 100%;
  }
  
 
</style>