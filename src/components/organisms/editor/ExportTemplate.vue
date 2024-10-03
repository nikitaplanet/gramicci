<template>
	<div id="export-template" class="w-full">
		<div class="rounded-lg p-5 bg-code-background sm:rounded-none">
			<div class="flex justify-end items-center">
				<transition>
					<div v-if="isCopied" class="text-sm mr-3 text-gray-200 font-bold">已複製！</div>
				</transition>
				<NLink @click="handleCopy" isLight>
					<IconCopy class="w-4 h-4" />
					複製
				</NLink>
			</div>

			<div class="mt-2 text-gray-800">
				<div v-highlight>
					<pre class="whitespace-pre-wrap break-words text-sm"><code class="html">{{
                            savedData
                        }}</code></pre>
				</div>
			</div>
		</div>
	</div>
	<NNotification :show="isCopied">已將程式碼複製到剪貼簿</NNotification>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import NLink from '@components/atoms/NLink.vue';
import {IconCopy} from '@tabler/icons-vue';
import NNotification from '@components/atoms/NNotification.vue';

const props = defineProps({
	savedData: {
		type: String,
		default: '',
	},
});

const isCopied = ref(false);

const handleCopy = () => {
	const el = document.createElement('textarea');

	el.value = props.savedData;
	document.getElementById('export-template').appendChild(el);
	el.select();
	document.execCommand('Copy');
	document.getElementById('export-template').removeChild(el);

	isCopied.value = true;
	setTimeout(() => {
		isCopied.value = false;
	}, 1000);
};
</script>
<script lang="ts">
import {useHighlightDirective} from '@assets/js/utils/v-Highlight';

const highlight = useHighlightDirective();
export default {
	directives: {
		highlight,
	},
};
</script>

<style lang="scss" scoped>
.export-template__toggles {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	grid-gap: 1rem;
}
</style>
