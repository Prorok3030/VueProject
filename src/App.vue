<template>

    <div class="head">
        <header>
          <Navbar></Navbar>
        </header>    
    </div>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ToDo from './components/ToDo.vue';


export default {
  name: 'App',
  components: {
    ToDo,
    Navbar
  },
}
</script>

<style scoped>

</style>
