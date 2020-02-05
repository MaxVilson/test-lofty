<template>
  <div id="app">
    <div class="page__inner">
      <div v-show="showModal" @click="showModal = false" class="overlay"></div>
      <div class="page__content">
        <main-header @show="showModal = true"></main-header>
        <my-gallery></my-gallery>
        <my-modal v-show="showModal" @send="showModal = false"></my-modal>
      </div>
      <div class="page__footer-wrapper">
        <main-footer></main-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import MyGallery from '@/components/MyGallery.vue';
import MyModal from '@/components/MyModal.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    MyGallery,
    MyModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
};
</script>
