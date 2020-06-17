require('../css/style.scss');
window.Vue = require('vue/dist/vue.js');
import { CLASS_HIDDEN, PAGE_CLASS_MODAL } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  require('./animation');
  require('./sidebar');
  require('./tab');
});

Vue.component('order-form', require('./components/Form.vue').default);

const root = document.getElementsByTagName('html')[0];
const body = document.body;

new Vue({
  el: '#app',
  data: () => ({
    showModal: false,
  }),
  watch: {
    showModal(value) {
      if (value) {
        body.classList.add(PAGE_CLASS_MODAL);
        root.classList.add(CLASS_HIDDEN);

        return;
      }

      body.classList.remove(PAGE_CLASS_MODAL);
      root.classList.remove(CLASS_HIDDEN);
    },
  },
});
