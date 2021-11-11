import { cloneDeep } from 'lodash-es';

class UndoHistory {
  store;

  history = [];

  currentIndex = -1;

  init(store) {
    this.store = store;
  }

  addState(state) {
    this.history.push(state);
    this.currentIndex += 1;
  }

  undo() {
    const prevState = this.history[this.currentIndex - 1];
    if (prevState) {
      this.store.replaceState(cloneDeep(prevState));
      this.currentIndex -= 1;
    }
  }

  redo() {
    const nextState = this.history[this.currentIndex + 1];
    if (nextState) {
      this.store.replaceState(cloneDeep(nextState));
      this.currentIndex += 1;
    }
  }
}

export const undoHistory = new UndoHistory();

export const undoPlugin = (store) => {
  undoHistory.init(store);
  const firstState = cloneDeep(store.state);
  undoHistory.addState(firstState);
  store.subscribe((mutation, state) => {
    undoHistory.addState(cloneDeep(state));
  });
};
