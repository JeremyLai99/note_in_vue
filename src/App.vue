<script setup>
import Navbar from './components/Navbar.vue';
import NoteList from './components/NoteList.vue';
</script>

<template>
  <Navbar />
  <div class="container-fluid mt-5">
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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
