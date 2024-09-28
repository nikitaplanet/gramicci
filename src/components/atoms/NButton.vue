<template>
	<button
		:class="{'n-button__toggle': buttonType === BUTTON_TYPE.TOGGLE, 'n-button__toggle--unactive': !isActive}"
		@click="mainAction"
		class="n-button"
		type="button">
		<slot />
	</button>
</template>

<script lang="ts" setup>
import {BUTTON_TYPE} from '@components/atoms/index';

defineProps({
	buttonType: {
		type: Number,
		default: BUTTON_TYPE.DEFAULT,
	},
	isActive: {
		type: Boolean,
		default: true,
	},
});

const emit = defineEmits(['click']);

function mainAction() {
	emit('click');
}
</script>

<style lang="scss" scoped>
.n-button {
	font-size: 14px;
	line-height: 1.5;
	font-weight: bold;
	padding: 10px 15px;
	letter-spacing: 1px;
	background-color: black;
	color: white;
	border-radius: 0.6rem;

	&__toggle {
		padding: 0;
		background-color: transparent;
		color: black;
		text-decoration: underline;
		transition: 0.2s ease;

		&--unactive {
			opacity: 0.5;
			text-decoration: none;

			&:hover {
				opacity: 1;
			}
		}
	}
}
</style>
