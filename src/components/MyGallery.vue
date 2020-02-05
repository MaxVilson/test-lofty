<template>
  <div class="gallery">
    <div class="gallery__wrapper">
      <ul class="gallery__list">
        <li v-for="img of images" :key="img.id" class="gallery__item">
          <img :src="img.download_url" alt="img">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'my-gallery',
  data() {
    return {
      images: [],
      errors: [],
    };
  },

  created() {
    axios.get('https://picsum.photos/v2/list?page=1&limit=6')
      .then((response) => {
        this.images = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="scss">
.gallery {

  &__wrapper {
    @include container;
    margin-bottom: 20px;
  }

  &__list {
    @include row;
    margin-top: 0;
    margin-bottom: 0;
    padding-right: 10px;
    padding-left: 10px;
  }

  &__item {
    @include make-col(4);
    margin-top: 20px;
    list-style: none;

    @media screen and (max-width: $screen-md) {
      @include make-col(6);
    }

    @media screen and (max-width: $screen-sm) {
      @include make-col(12);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
