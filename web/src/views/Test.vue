<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="form-group">
                <label for="chapterCover" class="col-md-3 control-label">封面路径</label>
                <div class="col-md-12">
                    <input type="file" id="chapterCover">
                </div>
                <div class="col-md-12">
                    <button type="button" class="btn btn-primary" @click="uploadChapter()">上传剧集</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Test",
        methods:{
            uploadChapter(){
                let _this = this;
                let file=document.querySelector("#chapterCover").files[0];
                console.log("开始分片上传");
                let formData =new FormData();
                formData.append("file",file);
                formData.append("src","abc/aaa/lgy.mp4");
                try {
                    console.log(file);
                    _this.$http.post("http://localhost:9002/uploadFile2OSS",formData).then(function (response) {
                        console.log("上传成功");
                    })
                }catch (e) {
                    console.log("上传失败")
                }
            }
        }
    }
</script>

<style scoped>

</style>