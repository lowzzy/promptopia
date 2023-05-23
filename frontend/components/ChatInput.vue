<template>
  <div class="chat-input">
    <input
      class="chat-input__input"
      placeholder="メッセージを入力"
      type="text"
    />
    <button class="chat-input__button">送信</button>
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
.chat-input {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__input {
    border-radius: 10px;
    height: 38px;
    width: calc(100% - 72px);
    background-color: #d9d9d9;
  }
  &__button {
    height: 42px;
    width: 48px;
    border-radius: 10px;
  }
}
</style>
