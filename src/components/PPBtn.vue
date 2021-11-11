<template>
  <button class="pp-btn" @click="$emit('click', $event)"><slot /></button>
</template>
<script>
export default {
  name: 'PPBtn',
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
.pp-btn {
  outline: none;
  background: #fff;
  padding: 8px;
  margin: 0 8px;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 7px;
  border-radius: 4px;
  &:active {
    transform: scale(0.95);
  }
}
</style>
