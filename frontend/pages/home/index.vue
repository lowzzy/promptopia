<template>
  <div class="home">
    <div class="home__container">
      <div class="home__container__left">
        <Calendar class="home__container__left__calender" />
      </div>
      <div class="home__container__right">
        <chat-area class="home__container__right__chat-area" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
import '@/assets/css/style.css';

export default defineComponent({
  components: {
    Calendar,
  },
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
});
</script>

<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__left {
      height: 100%;
      width: 30%;
      padding: 0 1rem;
      &__calender {
        width: 100%;
      }
    }
    &__right {
      width: 70%;
      height: 100%;
      &__chat-area {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
