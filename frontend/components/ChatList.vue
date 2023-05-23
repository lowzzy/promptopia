<template>
  <div class="chat-list">
    <chat-list-item></chat-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/css/style.css';

export default defineComponent({
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
.chat-list {
  width: 100%;
  height: 100%;
  background-color: #aee2d0;
  &__container {
    width: 100%;
  }
}
</style>
