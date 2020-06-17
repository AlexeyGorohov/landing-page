<template>
  <div class="form__control-wrap">
    <input
      :value="value"
      :type="type"
      :maxlength="maxlength"
      :class="[
        'form__control',
        { 'form__control_not-empty': value },
        { form__control_error: value && !isValid },
      ]"
      @input="$emit('update:value', $event.target.value)"
    />
    <div class="form__control-label">{{ label }}</div>
    <div
      v-if="value"
      :class="['form__control-status icon', isValid ? 'ok' : 'close']"
    ></div>
    <div
      :class="[
        'form__control-msg',
        { 'form__control-msg_error': value && !isValid },
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'FormControlInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: String,
      default: 'Неккоректно введены данные',
    },
    isValid: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: 255,
    },
  },
};
</script>
