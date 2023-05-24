<template>
  <div class="chat-header">
    <div class="chat-header__container">
      <h2>1月23日(月)</h2>
      <h5>
        <span> 週目標 : </span>
        早寝早起き朝ランニング筋トレ
      </h5>
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
h1,
h2,
h3,
h4,
h5,
p,
ul,
li {
  margin: 0;
  padding: 0;
}
.chat-header {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      color: gray;
    }
  }
}
</style>
