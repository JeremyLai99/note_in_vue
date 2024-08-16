<script setup>
import Navbar from './components/Navbar.vue';
import NoteList from './components/NoteList.vue';
</script>

<template>

    <Navbar />
    <div class="contenter-fluid">
      <div class="row">
        <div class="col-3">
          <NoteList />        
        </div>
        <div class="col-9">
          <router-view />        
        </div>
      </div>
    </div>


</template>

<style scoped>


</style>
