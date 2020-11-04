<template>
    <div class="container-fluid">
        <button @click="click_btn"/>
    </div>
</template>

<script>
import OSSFileUtils from "../components/utils/OSSFileUtils";
    export default {
        name: "Test",
        methods: {
            click_btn() {
                OSSFileUtils.sayHello("陈子文");
            }
        }
    }
</script>

<style scoped>

</style>