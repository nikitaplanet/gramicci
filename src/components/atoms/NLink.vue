<template>
	<component
		v-bind="linkProps"
		:class="{'n-link--disabled': disabled, 'n-link--block': isBlock}"
		:href="isAnchorLink ? href : null"
		:is="tag"
		:to="isRouterLink ? to : null"
		@click="handleClick"
		class="n-link">
		<slot />
	</component>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
	to: {
		type: [String, Object],
		default: null,
	},
	href: {
		type: String,
		default: null,
	},
	target: {
		type: String,
		default: '_self',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	isBlock: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['click']);

const isRouterLink = computed(() => props.to);
const isAnchorLink = computed(() => props.href);
const isButton = computed(() => !props.to && !props.href);
const tag = computed(() => {
	if (isButton.value) {
		return 'button';
	} else if (isRouterLink.value) {
		return 'router-link';
	} else {
		return 'a';
	}
});

const linkProps = computed(() => {
	if (isButton.value) {
		return {type: 'button', disabled: props.disabled};
	} else if (isRouterLink.value) {
		return {to: props.to, target: props.target};
	} else {
		return {href: props.href, target: props.target};
	}
});

const handleClick = (event) => {
	if (props.disabled) {
		event.preventDefault();
		return;
	}
	emit('click', event);
};
</script>

<style lang="scss" scoped>
.n-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	grid-gap: 8px;
	color: black;
	border: none;
	font-size: 14px;
	line-height: 19.6px;
	cursor: hover;
	font-weight: bold;
	padding: 0;
	transition: 0.3s ease;

	&--block {
		width: 100%;
		display: block;
		text-align: left;
	}

	&--disabled {
		color: #9e9e9e;
		cursor: default;
	}

	&:not(.n-link--disabled):hover {
		opacity: 0.7;
	}
}
</style>
