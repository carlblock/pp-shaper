<template>
  <div class="header">
    <div class="header-items flex items-center justify-between">
      <div class="flex items-center">
        <PPInput label="Number of sides:" type="number" v-model="numberSides"/>
        <PPInput label="Color:" type="color" v-model="shapeColor"/>
      </div>
      <div>
        <PPBtn @click="undo">
          <PPIcon :icon="mdiUndo"/>
        </PPBtn>
        <PPBtn @click="redo">
          <PPIcon :icon="mdiRedo"/>
        </PPBtn>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
import mdiRedo from '@mdi/svg/svg/redo.svg';
import mdiUndo from '@mdi/svg/svg/undo.svg';
import PPBtn from './PPBtn.vue';
import PPInput from './PPInput.vue';
import PPIcon from './PPIcon.vue';

export default {
  name: 'Header',
  components: {
    PPIcon,
    PPBtn,
    PPInput,
  },
  data() {
    return {
      mdiRedo,
      mdiUndo,
    };
  },
  computed: {
    numberSides: {
      get() {
        return this.$store.state.shapeSides;
      },
      set(amount) {
        this.SET_SHAPE_SIDES(amount);
      },
    },
    shapeColor: {
      get() {
        return this.$store.state.shapeColor;
      },
      set(color) {
        this.SET_SHAPE_COLOR(color);
      },
    },
  },
  methods: {
    ...mapMutations(['SET_SHAPE_SIDES', 'SET_SHAPE_COLOR']),
    ...mapActions(['undo', 'redo']),
  },
};
</script>
<style lang="scss">
@import '../scss/variables';

.header {
  background: $color-bg;

  &-items {
    margin: 0 16px;
    height: 100%;
  }
}
</style>
