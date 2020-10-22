<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
            <div class="col-md-5" style="background-color: aqua;height: 100vh">
                左边是部分是一个纵向表，里面有已经存放到数据库的地区信息
            </div>
            <div class="col-md-3" style="background-color: wheat;height: 100vh">
                右边是一些操作，添加操作（一个值的框和一个按钮，向数据库插入一个标签）,
                修改操作（一个值的框和一个按钮，点击纵向表里面的信息，在框里输入值，点击按钮修改）,
                删除操作（点击纵向表中的值，点击按钮删除）
            </div>
            <div class="col-md-2" style="background-color: coral;height: 100vh"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ZoneManagePage"
    }
</script>

<style scoped>

</style>