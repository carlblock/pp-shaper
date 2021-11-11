<template>
  <img class="pp-icon" :src="icon" alt="icon" aria-hidden="true"/>
</template>
<script>
export default {
  name: 'PPIcon',
  props: {
    icon: {
      type: String,
      default: '',
      mandatory: true,
    },
  },
};
</script>
<style lang="scss">
.pp-icon {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-position: center;
  background-size: 100% auto;

  svg {
    path {
      fill: #fff;
    }
  }
}
</style>
