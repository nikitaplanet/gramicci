<template>
	<div class="h-24 w-full fixed z-10 p-8 border-b border-b-gray-100 bg-white">
		<div class="h-full w-full m-auto flex flex-row justify-start items-center">
			<Logo />
			<div class="ml-8">
				<Menu />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Logo from '@components/organisms/nav/components/Logo.vue';
import Menu from '@components/organisms/nav/components/Menu.vue';
</script>

<style lang="scss" scoped></style>