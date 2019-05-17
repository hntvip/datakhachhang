<template>
  <div class="home">
    <img alt="Vue logo" width="50px" height="50px" src="../assets/logo.png">
    <HelloWorld msg="Danh Sach KH VUEJS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
