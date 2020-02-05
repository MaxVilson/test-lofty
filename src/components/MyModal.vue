<template>
  <div class="modal">
    <div class="modal__wrapper">
      <form class="form" @submit.prevent="submitHandler">
        <div class="form-control">
          <input
              id="email"
              type="text"
              class="input"
              v-model.trim="email">
          <small class="helper-text" v-if="$v.email.$dirty && !$v.email.required">Поле Email не должно быть пустым</small>
          <small class="helper-text" v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный email</small>
        </div>
        <div class="form-control">
          <input
              id="password"
              type="password"
              class="input"
              v-model.trim="password">
          <small class="helper-text" v-if="$v.password.$dirty && !$v.password.required">Пароль не должен быть пустым</small>
          <small class="helper-text" v-if="$v.password.$dirty && !$v.password.minLength">Пароль должен быть более 6-ти символов</small>
        </div>
        <my-btn class="main-header__btn" type="submit">Submit</my-btn>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {email, required, minLength } from 'vuelidate/lib/validators';
import MyBtn from './MyBtn.vue';

export default {
  name: 'my-modal',
  components: {
    MyBtn
  },
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      };
      const formData = {
        email: this.email,
        password: this.password
      };
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify(formData)
      })
      .then(response => {})
      .catch(e => {
        this.errors.push(e)
      })
      this.$emit('send');
    },
  },
};
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    padding: 40px;
    width: 500px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #fff;
    transform: translate(-50%, -50%);

    @media screen and (max-width: $screen-sm) {
      padding: 20px;
      width: 300px;
      top: 10%;
      transform: translate(-50%, 0);
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-control {
    padding-bottom: 20px;
    width: 280px;
  }

  .input {
    padding: 15px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: transparent;
  }

  .helper-text {
    display: block;
    margin-top: 5px;
    color: red;
  }

  .btn {
    border: none;
  }
</style>
