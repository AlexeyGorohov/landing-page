<template>
  <div class="form__control-wrap" v-click-outside="hide">
    <input
      readonly
      type="text"
      class="form__control form__control_not-empty"
      :value="value"
      @click="show = true"
    />
    <div class="form__control-label">{{ label }}</div>
    <div v-if="show" class="form__dropdown-list">
      <div
        v-for="(option, index) in options"
        :key="`option_${index}`"
        class="form__dropdown-list-item"
        @click="$emit('update:value', option), (show = false)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Dropdown',
  props: {
    value: null,
    label: null,
    options: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    hide() {
      this.show && (this.show = false);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
