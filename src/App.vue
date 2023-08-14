<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<div class="bg-blue-50">
		<p>If background is blue, Tailwind works</p>
		<p>Pinia is active: {{ piniaActive }}</p>
	</div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { useTestStore } from './stores/test-store';
import { computed } from 'vue';

const testStore = useTestStore();

const piniaActive = computed(() => testStore.piniaActive);
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
