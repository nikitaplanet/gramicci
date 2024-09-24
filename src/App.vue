<template>
    <NavBar/>
    <!--ToolBar-->
    <ToolBar @saveData="saveData"/>
    <div class="w-full py-36">
        <div>
            <div class="pt-8">
                <h1 class="w-full font-bold text-xl text-center pb-4">-內容-</h1>
                <EditorBlock ref="editorRef"/>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import NavBar from "@components/nav/NavBar.vue";
import ToolBar from "@components/toolbar/ToolBar.vue";
import EditorBlock from "@components/editor/EditorBlock.vue";

const editorRef = ref(null);

const saveData = () => {
    if (editorRef.value) {
        editorRef.value.saveEditor();
    }
};

</script>

<style lang="scss">
</style>
