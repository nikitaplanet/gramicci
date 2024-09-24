<template>
    <div class="h-12 w-full fixed top-24 z-10 px-8 border-b border-gray-100 bg-tool-background flex justify-start items-center">
        <div class="w-full max-w-8xl m-auto flex justify-start items-center">
            <NButton @click="saveData">保存</NButton>
            <NButton @click="importData">匯入</NButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NButton from "@components/atoms/NButton.vue";

const emit = defineEmits(['saveData', 'importData']);

function saveData() {
    emit("saveData");
}

function importData() {
    emit("importData");
}
</script>

<style scoped lang="scss">

</style>