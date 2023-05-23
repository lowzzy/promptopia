<template>
  <div class="chat-list-item" :class="isGpt ? 'is-gpt' : 'user'">
    <div class="chat-list-item__profile" :class="isGpt ? 'is-gpt' : 'user'">
      <img src="https://gyazo.com/1e90206d60589568311a1fdbc19f84a9" alt="" />
    </div>
    <div class="chat-list-item__container">
      <p>{{ chatContent }}</p>
    </div>
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
  props: {
    isGpt: {
      readonly: true,
      default: true,
      type: Boolean,
    },
    chatContent: {
      readonly: true,
      default: '',
      type: String,
    },
  },
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
.chat-list-item {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  &.is-gpt {
    flex-direction: row;
  }
  &.user {
    flex-direction: row-reverse;
  }
  &__profile {
    border-radius: 50%;
    border: 1px solid #333;
    width: 50px;
    height: 50px;
    margin: 10px;
    &.is-gpt {
      margin-right: 6px;
    }
    &.user {
      margin-right: 6px;
    }
  }
  &__container {
    max-width: 80%;
    background-color: red;
    width: fit-content;
    padding: 0.2rem 0.5rem;
    border-radius: 16px;
    border: 1px solid #333333;
    margin: auto 0;
    p {
      overflow-wrap: break-word;
      display: inline-block;
      width: auto;
      margin: 0;
    }
  }
}
</style>
