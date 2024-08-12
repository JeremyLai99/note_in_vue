<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/NoteStore';
import { storeToRefs } from 'pinia';


const noteStore = useNoteStore()
const { togglePinned } = noteStore


</script>

<template>
    <div class="sideBar mt-5">
        <router-link :to="{ name: 'add'}" class="d-flex justify-content-center">
            <button class="btn btn-warning">新增筆記</button>
        </router-link>
        <div class="important">
            <h4><i class="fa-solid fa-thumbtack me-2" style="color: red;"></i> 重要</h4>
            <ul class="list-group">
                <li v-for="note in noteStore.pinnedNotes" :key="note.id" class="list-group-item">
                    <router-link :to="{ name: 'edit', params: { id: note.id} }" class="d-flex justify-content-between">
                    <div class="note-title">{{ note.title }}</div>
                    <div class="">
                        <i class="fa-solid fa-thumbtack me-3 rotate" @click="togglePinned(note.id)"></i>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="others">

        </div>

    </div>
</template>

<style scoped>
.important{
    margin-top: 20px;
    padding-left: 20px;
}
.rotate{
    color: red;
    transform: rotate(45deg);
    cursor: pointer;
}
.list-group-item{
    border: none;
    padding: 5px 0px;
    background: transparent;
    cursor: pointer;

  }
  .list-group-item:hover{
    background-color: rgb(248, 167, 130);

  }
  .note-title{
    font-size: 18px;
    font-weight: bold;
    width: 85%;
  }
  .note-title:hover{
    color: white
  }
 
</style>