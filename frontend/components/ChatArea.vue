<template>
  <div class="chat-area">
    <div class="chat-area__container">
      <chat-header class="chat-area__container__header"></chat-header>
      <chat-list class="chat-area__container__chat-list"></chat-list>
      <chat-input class="chat-area__container__bottom"></chat-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import 'v-calendar/style.css';

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
.chat-area {
  width: 100%;
  height: 100%;
  border-left: 1px solid black;
  &__container {
    width: 100%;
    height: 100%;
    position: relative;
    &__header {
      width: 100%;
      height: 8%;
      margin-bottom: 1rem;
    }
    &__chat-list {
      height: calc(92% - 100px);
    }
    &__bottom {
      border-top: 1px solid black;
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
}
</style>
