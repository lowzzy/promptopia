<template>
  <div class="chat-input">
    <input
      class="chat-input__input"
      placeholder="メッセージを入力"
      type="text"
    />
    <button class="chat-input__button">
      <font-awesome-icon
        class="chat-input__button__icon"
        :class="{ red: inputText.length > 0 }"
        :icon="['fas', 'paper-plane']"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  data() {
    return {
      inputText: 'eee',
    };
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
    border-radius: 20px;
    height: 38px;
    padding: 0 1rem;
    margin-left: 1rem;
    width: calc(100% - 72px);
    background-color: lightgray;
    border: none;
  }
  &__button {
    height: 42px;
    width: 48px;
    border-radius: 10px;
    border: none;
    background-color: white;
    &__icon {
      width: 26px;
      height: 26px;
      &.red {
        color: red;
      }
    }
  }
}
</style>
