<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input :type="type"
           :value="value"
           @input="$emit('input', $event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'PPInput',
  props: {
    value: [String, Number],
    label: {
      type: String,
      default: '',
    },
    type: {
      default: 'text',
      type: String,
    },
  },
};
</script>
<style lang="scss">
.input-container {
  margin: 0 8px;

  label {
    color: #fff;
    font-size: 18px;
    margin-right: 8px;
  }

  input {
    color: #fff;
    background: #ababab;
    border: 2px solid #000;
    border-radius: 3px;
    font-size: 18px;
    text-align: center;
    width: 40px;
  }
}
</style>
