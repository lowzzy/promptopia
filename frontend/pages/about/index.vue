<template>
  <div>
    <h1>about</h1>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  async mounted() {
    console.log('mounted!');
    const res = await axios.get('http://localhost:3000/');
    console.log(res);
  },
};
</script>
