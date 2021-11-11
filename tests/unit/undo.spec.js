import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { undoPlugin, undoHistory } from '../../src/store/undo';

Vue.use(Vuex);
const store = new Store({
  state: {
    foo: 0,
  },
  mutations: {
    setFoo(state, amount) {
      state.foo = amount;
    },
  },
  plugins: [undoPlugin],
});

describe('Given UndoHistory', () => {
  describe('When undo the states', () => {
    const spyReplaceState = jest.spyOn(store, 'commit');
    it('should undo the state back to previous: 0', () => {
      store.commit('setFoo', 1);
      undoHistory.undo();
      expect(store.state.foo)
        .toEqual(0);
    });
    it('should call replaceState on store when mutating', () => {
      expect(spyReplaceState).toHaveBeenCalled();
    });
  });
  describe('When redo the states', () => {
    it('should redo the state forward again to: 1', () => {
      undoHistory.redo();
      expect(store.state.foo)
        .toEqual(1);
    });
  });
});
