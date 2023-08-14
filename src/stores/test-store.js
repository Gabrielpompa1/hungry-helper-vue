import { defineStore } from 'pinia';

export const useTestStore = defineStore('test', {
	state: () => ({ piniaActive: true }),
	getters: {},
	actions: {},
});
