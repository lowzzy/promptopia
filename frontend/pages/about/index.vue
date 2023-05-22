<template>
  <div>
    <h1>about</h1>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import axios from 'axios';

import { defineComponent } from 'vue';

export default defineComponent({
  // 型推論が有効
  props: {
    // name: String,
    // msg: { type: String, required: true },
  },
  data() {
    return {
      // count: 1,
    };
  },
  async mounted() {
    console.log('mounted!');

    const res = await axios.get('http://localhost:3000/');
    console.log(res);
  },
});
</script>
