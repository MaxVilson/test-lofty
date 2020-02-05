<template>
  <footer class="main-footer">
    <div class="main-footer__wrapper">
    </div>
  </footer>
</template>

<style lang="scss">
  .main-footer {
    min-height: 60px;
    background-color: $secondory-color;

    &__wrapper {
      @include container;
      display: flex;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>
