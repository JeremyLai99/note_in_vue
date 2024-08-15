<script setup>
import { useNoteStore } from '../stores/NoteStore';

const noteStore = useNoteStore()
</script>

<template>

        <div class="container mt-3">
            <div class="row">
                <div class="col-4 mt-3" v-for="note in noteStore.pinnedNotes">
                    <router-link :to="{ name: 'edit', params: { id: note.id}}">
                        <div class="card px-0 py-3" style="width: 100%; height: 100%;">
                            
                            <div class="card-body">
                                <i class="fa-solid fa-thumbtack rotate"></i>
                                <h5 class="card-title">{{ note.title }}</h5>
                                <hr>
                                <h6 class="card-text">{{ note.content }}</h6>                        
                            </div>
                        </div>
                    </router-link>                                
                </div>
                <div class="col-4 mt-3" v-for="note in noteStore.allNotes">
                    <router-link :to="{ name: 'edit', params: { id: note.id}}">
                        <div class="card px-0 py-3" style="width: 100%;  height: 100%;">
                        <div class="card-body">
                            <h5 class="card-title">{{ note.title }}</h5>
                            <hr>
                            <h6 class="card-text">{{ note.content }}</h6>                        
                        </div>
                    </div>
                    </router-link>                                
                </div>
            </div>
        </div>    

</template>

<style scoped>

.card{
    transition: all 0.3s;
    border-radius: 20px;
    
}
.card:hover{
    background-color: rgb(246, 204, 150);
    box-shadow: 2px 2px 10px #999;
    cursor: pointer;
    color: white;
}
.card-body{
    position: relative;
}
.rotate{
    color: red;
    transform: rotate(45deg);
    position: absolute; 
    top: -10px; 
    right: 15px;
    font-size:x-large;
  }
</style>