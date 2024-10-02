<template>
	<TransitionRoot :show="show" appear as="template">
		<Dialog :open="show" @close="closeDialog" class="relative z-10" as="div">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0">
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center p-6 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95">
						<DialogPanel
							:class="[maxWidth ?? 'max-w-md']"
							class="flex w-full transform flex-col space-y-6 overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<DialogTitle class="text-2xl font-medium leading-6 text-gray-900" as="h3">{{ title }} </DialogTitle>
							<slot />
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script lang="ts" setup>
import {Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild} from '@headlessui/vue';

defineProps<{
	show: boolean;
	title: string;
	maxWidth?: string;
}>();

const emit = defineEmits(['close']);

function closeDialog() {
	emit('close');
}
</script>
