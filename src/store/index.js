import Vue from 'vue';
import Vuex from 'vuex';
import { undoHistory, undoPlugin } from './undo';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [undoPlugin],
  state: {
    shapeSides: 3,
    shapeColor: '#ffffff',
  },
  mutations: {
    SET_SHAPE_SIDES(state, amount) {
      state.shapeSides = parseInt(amount, 10);
    },
    SET_SHAPE_COLOR(state, color) {
      state.shapeColor = color;
    },
  },
  actions: {
    undo() {
      undoHistory.undo();
    },
    redo() {
      undoHistory.redo();
    },
  },
  modules: {
  },
});
