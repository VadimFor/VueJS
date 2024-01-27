import { defineStore } from 'pinia';

export const testeostore = defineStore({
  id: 'testeos',
  state: () => ({
    tesvar: 0
  }),
  actions: {
    testmethod() {
        this.tesvar = 100;
    }
  }
});