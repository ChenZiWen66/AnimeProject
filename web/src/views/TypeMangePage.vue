<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
            <div class="col-md-5" style="background-color: aqua;height: 100vh">
                <label>
                    左边的部分是一个纵向表，里面有已经存放到数据库的分类信息
                    <select multiple class="form-control typeList">
                        <option>分类1</option>
                        <option>分类2</option>
                        <option>分类3</option>
                        <option>分类4</option>
                        <option>分类5</option>
                        <option>分类6</option>
                        <option>分类7</option>
                        <option>分类8</option>
                        <option>分类9</option>
                        <option>分类10</option>
                        <option>分类11</option>
                        <option>分类12</option>
                        <option>分类13</option>
                        <option>分类14</option>
                        <option>分类15</option>
                    </select>
                </label>
            </div>
            <div class="col-md-3" style="background-color: wheat;height: 100vh">
                右边是一些操作，添加操作（一个值的框和一个按钮，向数据库插入一个标签）,
                修改操作（一个值的框和一个按钮，点击纵向表里面的信息，在框里输入值，点击按钮修改）,
                删除操作（点击纵向表中的值，点击按钮删除）
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="添加分类">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">添加</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 blockRow"></div>
                    <div class="col-md-12">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="修改分类">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">修改</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-12 blockRow"></div>
                    <div class="col-md-12">
                        <button class="btn btn-default btn-block" type="button">删除</button>
                    </div>
                </div>
            </div>
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TypeMangePage"
    }
</script>

<style scoped>
    .typeList {
        height: 530px;
        padding: 0;
    }

    option {
        height: 40px;
        font-size: 20px;
        padding: 10px;
    }

    option:hover {
        background-color: cornsilk;
    }

    .blockRow{
        height: 30px;
    }
</style>