<template>
  <button :type="type" @click="$emit('clickBtn')" class="btn"><slot/></button>
</template>

<script>
export default {
  name: 'my-btn',
  props: {
    type: { type: String, default: 'button'},
  },
};
</script>

<style lang="scss">
  .btn {
    padding: 15px 40px;
    border: none;
    border-radius: 20px;
    background-color: $main-color;
    font-weight: 600;

    &:hover {
      background-color: $main-color-dark;
    }
  }
</style>
