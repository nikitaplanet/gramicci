<template>
	<button :class="{'n-button__tool': buttonType === BUTTON_TYPE.TOOL}" @click="mainAction" type="button">
		<slot />
	</button>
</template>

<script lang="ts" setup>
import {BUTTON_TYPE} from '@/enum/ui/button';

defineProps({
	buttonType: {
		type: BUTTON_TYPE,
		default: BUTTON_TYPE.TOOL,
	},
});

const emit = defineEmits(['click']);

function mainAction() {
	emit('click');
}
</script>

<style lang="scss" scoped>
.n-button {
	&__tool {
		@apply px-4 font-medium transition ease-in text-sm hover:text-gray-700 hover:underline hover:underline-offset-2;
	}
}
</style>
