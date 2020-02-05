<template>
  <header class="main-header">
    <div class="main-header__wrapper">
      <my-btn class="main-header__btn" @clickBtn="$emit('show')">Sign Up</my-btn>
    </div>
  </header>
</template>

<script>
import MyBtn from './MyBtn.vue';

export default {
  components: {
    MyBtn,
  },
};

</script>

<style lang="scss">
  .main-header {
    background-color: $secondory-color;

    &__wrapper {
      @include container;
      display: flex;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    &__btn {
      margin-left: auto;
      text-transform: uppercase;
    }
  }
</style>
