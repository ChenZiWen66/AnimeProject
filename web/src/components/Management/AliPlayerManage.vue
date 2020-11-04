<template>
    <div class="aliPlayer" ref="ali">
    </div>
</template>

<script>
    export default {
        name: "AliPlayer",
        data() {
            return {
                player: {}
            }
        },
        methods: {
            addPlayer(videotitle, coverurl, videourl) {
                //    0.接收来自Browser传递过来的信息[title,url,coverUrl]
                //    1.在template中加上<div class="prism-player" id="J_prismPlayer"/>
                //    2.新建一个Aliplayer
                //    第一步:
                let _this = this;
                if (_this.player) {
                    _this.Player = null;
                    // $(".aliPlayer").html('');
                    _this.$refs.ali.innerHTML='';
                }

                let txt3 = document.createElement("div");
                txt3.setAttribute('class', 'prism-player');
                txt3.setAttribute('id', videotitle + '-player');
                // document.querySelector(".aliPlayer").append(txt3);
                _this.$refs.ali.append(txt3);
                _this.player = new Aliplayer({
                    id: videotitle + '-player',
                    width: '100%',
                    autoplay: false,
                    //支持播放地址播放,此播放优先级最高
                    source: videourl,
                    cover: coverurl
                });
            },
            deletePlayer() {
                let _this = this;
                console.log("删除播放器");
                // $(".aliPlayer").html('');
                _this.$refs.ali.innerHTML='';
                _this.player = null;
            }
        }
    }
</script>

<style scoped>

</style>