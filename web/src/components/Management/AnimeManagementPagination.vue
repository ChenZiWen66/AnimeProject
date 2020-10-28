<template>
    <!--这是管理界面的分页组件-->
    <div class="row">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li @click="prePage">
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="Page in pageList" v-bind:class="{'active':currentPage===Page}" @click="alterPage(Page)">
                    <a href="#">{{Page}}</a>
                </li>
                <li @click="nextPage">
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import {globalBus} from "../GlobalBus";

    export default {
        name: "AnimeManagementPagination",
        data() {
            return {
                currentPage: 1,//当前页面数
                maxPage: 1,//最大页面数
                pageList: [1, 2, 3, 4, 5, 6, 7],//页面栏
                pageSize: 4//页面大小
            }
        },
        mounted() {
            let _this = this;
            globalBus.$on("PaginationMaxPage", function (callback) {
                _this.maxPage = callback;
                _this.alterPageList();
            })
        },
        watch: {
            currentPage() {
                let _this = this;
                this.alterPageList(_this.currentPage);
            }
        },
        methods: {
            /**
             * 修改分页栏内容
             * 1.如果最大页面数小于等于5则分页栏数值为[1,2,3..最大页面数]
             * 2.如果最大页面数大于5，则只显示5个
             * 2.1如果当前页面数<=3，则数值为[1,2,3,4,5]
             * 2.2如果当前页面数>=最大页面数-2，则数值为[max-4,max-3,max-2,max-1,max]
             * 2.3其他情况，数值为[current-2,current-1,current,current+1,current+2]
             * */
            alterPageList: function (currentPage) {
                let _this = this;
                if (_this.maxPage <= 5) {
                    let list = [];
                    let i = 1;
                    while (i <= _this.maxPage) {
                        list.push(i);
                        i++;
                    }
                    _this.pageList = list;
                } else if (currentPage <= 3) {
                    _this.pageList = [1, 2, 3, 4, 5];
                } else if (currentPage >= _this.maxPage - 2) {
                    _this.pageList = [_this.maxPage - 4, _this.maxPage - 3, _this.maxPage - 2, _this.maxPage - 1, _this.maxPage];
                } else {
                    _this.pageList = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
                }
            },
            /**
             * 点击分页栏数字修改当前页面数
             * @param pageNumber
             */
            alterPage: function (pageNumber) {
                this.currentPage = pageNumber;
                globalBus.$emit('videoInfoCurrentPage', pageNumber);
            },
            /**
             * 上一页
             */
            prePage: function () {
                if (this.currentPage > 1) {
                    this.currentPage = this.currentPage - 1
                }
                globalBus.$emit('videoInfoCurrentPage', this.currentPage)
            },
            /**
             * 下一页
             */
            nextPage: function () {
                let _this = this;
                if (this.currentPage < _this.maxPage) {
                    this.currentPage = this.currentPage + 1
                }
                globalBus.$emit('videoInfoCurrentPage', this.currentPage);
            }
        }
    }
</script>

<style scoped>

</style>