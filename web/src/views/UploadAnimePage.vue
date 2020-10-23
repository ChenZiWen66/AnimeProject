<template>
    <div class="contain-fluid">
        <div class="row">
            <div class="col-md-1" style="background-color: coral;height: 100vh"></div>
            <!--左半侧-->
            <div class="col-md-5" style="background-color: lightgoldenrodyellow;height: 100vh">
                <div class="form-group">
                    <label for="animeName" class="col-md-3 control-label">动漫名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeName" placeholder="请输入动漫名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="alias" class="col-md-3 control-label">别名</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="alias" placeholder="请输入别名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="describe" class="col-md-3 control-label">描述</label>
                    <div class="col-md-9">
                        <textarea class="form-control" id="describe" placeholder="描述" rows="6"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeYear" class="col-md-3 control-label">年代</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeYear" placeholder="年代">
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeIndex" class="col-md-3 control-label">索引</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeIndex" placeholder="索引">
                    </div>
                </div>
                <div class="form-group">
                    <label for="animeUpdateInfo" class="col-md-3 control-label">更新信息</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="animeUpdateInfo" placeholder="更新信息">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputFile" class="col-md-3 control-label">封面路径</label>
                    <div class="col-md-9">
                        <input type="file" id="exampleInputFile">
                        <p class="help-block">点击按钮上传图片</p>
                    </div>
                </div>
            </div>
            <!--右半侧-->
            <div class="col-md-5" style="background-color: lightgoldenrodyellow;height: 100vh">
                <div class="form-group ">
                    <label class="col-md-3 control-label">类型</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" value="option1"> 类型1
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox2" value="option2"> 类型2
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox3" value="option3"> 类型3
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox4" value="option4"> 类型4
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox5" value="option5"> 类型5
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox6" value="option1"> 类型6
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox7" value="option2"> 类型7
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox8" value="option3"> 类型8
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox9" value="option4"> 类型9
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox10" value="option5"> 类型10
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">地区</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox11" value="option1"> 地区1
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox12" value="option2"> 地区2
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox13" value="option3"> 地区3
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox14" value="option4"> 地区4
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox15" value="option5"> 地区5
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox16" value="option1"> 地区6
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox17" value="option2"> 地区7
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox18" value="option3"> 地区8
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox19" value="option4"> 地区9
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox20" value="option5"> 地区10
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">标签</label>
                    <div class="col-md-9 checkboxBorder">
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox21" value="option1"> 标签1
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox22" value="option2"> 标签2
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox23" value="option3"> 标签3
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox24" value="option4"> 标签4
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox25" value="option5"> 标签5
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox26" value="option1"> 标签6
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox27" value="option2"> 标签7
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox28" value="option3"> 标签8
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox29" value="option4"> 标签9
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox30" value="option5"> 标签10
                        </label>
                    </div>
                </div>
                <div class="col-md-12">
                    <img src="../assets/xiaolan.jpg" alt="选择的图片" class="img-thumbnail coverImg">
                </div>
                <div class="col-md-12">
                    <button class="btn btn-default btn-block" type="button">上传动漫</button>
                </div>
            </div>
            <div class="col-md-1" style="background-color: coral;height: 100vh"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UploadAnimePage"
    }
</script>

<style scoped>
    label {
        margin-top: 11px;
    }

    input {
        margin-top: 5px;
    }

    textarea {
        margin-top: 5px;
    }

    .checkboxBorder {
        border: 0 solid gray;
        border-bottom-width: 1px;
    }
    .coverImg{
        height: 200px;
    }
</style>