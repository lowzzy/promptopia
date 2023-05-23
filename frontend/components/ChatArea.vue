<template>
  <div class="chat-area">
    <div class="chat-area__container">
      <chat-list></chat-list>
      <chat-input class="chat-area__container__bottom"></chat-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import 'v-calendar/style.css';

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
.chat-area {
  width: 100%;
  height: 100%;
  &__container {
    width: 100%;
    height: 100%;
    position: relative;
    &__bottom {
      background-color: #d9d9d9;
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
