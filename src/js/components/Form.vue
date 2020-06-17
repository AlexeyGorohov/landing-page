<template>
  <div class="modal">
    <div class="modal__container">
      <template v-if="!isSucces">
        <div class="modal__icon-close icon close" @click="$emit('close')"></div>
        <div class="modal__heading">Заявка на карту</div>
      </template>
      <div class="modal__content">
        <form @submit.prevent="action()" class="form">
          <template v-if="!isSucces">
            <div class="form__controls">
              <form-input
                label="ФИО"
                type="text"
                :value.sync="name"
                :is-valid="isValidName"
              ></form-input>
              <form-input
                label="Эдектронный адрес"
                type="email"
                :value.sync="email"
                :is-valid="isValidEmail"
              ></form-input>
              <form-input
                label="Номер телефона"
                type="text"
                :value.sync="phone"
                :is-valid="isValidPhone"
              ></form-input>
              <form-dropdown
                label="Гражданство"
                :value.sync="country"
                :options="options"
              >
              </form-dropdown>
            </div>
            <label class="form__checkbox">
              <input
                class="form__checkbox-control"
                type="checkbox"
                :checked="checked"
                @click="checked = $event.target.checked"
              />
              <div class="form__checkbox-checkmark"></div>
              <div class="form__checkbox-text">
                Я соглашаюсь на
                <span class="mx-color-white">обработку</span> моих персональных
                данных
              </div>
            </label>
            <div class="form__button">
              <button class="button" type="submit" :disabled="disabled">
                Заказать сейчас
              </button>
            </div>
          </template>
          <template v-else>
            <div class="form__succes">
              <div class="form__succes-icon icon ok"></div>
              <div class="form__succes-heading">Ваша заявка принята</div>
              <div class="form__succes-sub-heading">
                В ближайшее время с вами свяжется наш менеджер
              </div>
            </div>
          </template>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormDropdown from './FormDropdown.vue';
import FormInput from './FormInput.vue';

const COUNTREIS = ['Росcийская федерация', 'Украина', 'Беларусь', 'Казахстан'];

export default {
  name: 'Form',
  data: () => ({
    options: COUNTREIS,
    country: COUNTREIS[0],
    name: '',
    email: '',
    phone: '',
    checked: false,
    isSucces: false,
  }),
  computed: {
    isValidName() {
      return /^[А-Я][а-яА-Я\-]{0,}\s[А-Я][а-яА-Я\-]{1,}(\s[А-Я][а-яА-Я\-]{1,})?$/.test(
        this.name
      );
    },

    isValidEmail() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
    },

    isValidPhone() {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(
        this.phone
      );
    },

    disabled() {
      return !(
        this.isValidName &&
        this.isValidEmail &&
        this.isValidPhone &&
        this.checked
      );
    },
  },
  components: {
    FormDropdown,
    FormInput,
  },
  methods: {
    action() {
      this.isSucces = true;

      setTimeout(() => {
        this.$emit('close');
      }, 4000);
    },
  },
};
</script>
