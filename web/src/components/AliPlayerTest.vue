<template>
    <div>
        <div class="prism-player" id="J_prismPlayer"></div>
    </div>
</template>

<script>
    export default {
        name: "AliPlayerTest",
        mounted() {
            let player = new Aliplayer({
                id: 'J_prismPlayer',
                width: '100%',
                autoplay: false,
                //支持播放地址播放,此播放优先级最高
                source: "https://czwhub.oss-cn-shanghai.aliyuncs.com/%E5%85%89%E8%80%80%E5%96%9D%E9%85%92.mp4",
            })
        }
    }
</script>

<style scoped>

</style>