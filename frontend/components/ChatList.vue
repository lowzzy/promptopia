<template>
  <div class="chat-list">
    <chat-list-item
      :is-gpt="true"
      :chat-content="'にゃあああですにゃあああですにゃあああですにゃあああですにゃあああですにゃあああですにゃあああですにゃあああですにゃあああです'"
      class="chat-list__item"
    >
    </chat-list-item>
    <chat-list-item
      :is-gpt="false"
      :chat-content="'にゃあああです'"
      class="chat-list__item"
    >
    </chat-list-item>
    <chat-list-item
      :is-gpt="true"
      :chat-content="'にゃあああです'"
      class="chat-list__item"
    >
    </chat-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
  &__item {
    width: 100%;
  }
}
</style>
