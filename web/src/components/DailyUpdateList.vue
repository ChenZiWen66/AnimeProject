<template>
    <!--每日更新列表组件-->
    <div class="row">
        <!--    标题    -->
        <div class="col-md-12 title">
            <h2>每日更新列表</h2>
        </div>
        <!--    日期标签    -->
        <div class="col-md-12">
            <div class="btn-group-xs" role="group">
                <button type="button" class="btn btn-default">周一</button>
                <button type="button" class="btn btn-default">周二</button>
                <button type="button" class="btn btn-default">周三</button>
                <button type="button" class="btn btn-default">周四</button>
                <button type="button" class="btn btn-default">周五</button>
                <button type="button" class="btn btn-default">周六</button>
                <button type="button" class="btn btn-default">周日</button>
            </div>
        </div>
        <!--    列表内容    -->
        <div class="col-md-12">
            <ul>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
                <li>
                    陈子文的一天
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DailyUpdateList"
    }
</script>

<style scoped>
    .title h2 {
        font-size: 18px;
        font-family: "Microsoft YaHei", 微软雅黑, serif;
        color: rgb(252, 139, 187);
        font-weight: 700;
        float: left;
        overflow: hidden;
    }
</style>