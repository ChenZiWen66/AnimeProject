<template>
    <div class="container-fluid">
        <div class="col-md-6 statisticsContent" id="container1" style="height: 50vh"></div>
        <div class="col-md-6 statisticsContent" id="container2" style="height: 50vh"></div>
        <div class="col-md-6 statisticsContent" id="container3" style="height: 50vh"></div>
        <div class="col-md-6 statisticsContent" id="container4" style="background-color: lightgreen;height: 50vh">
            <h3>一共有{{animeCount}}个动漫</h3>
            <h3>总共有{{chapterCount}}集</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticView",
        data() {
            return {
                chart: [{
                    plotBackgroundColor: null,//扇形背景色
                    plotBorderWidth: null,//扇形的边距
                    plotShadow: false,//扇形阴影
                    backgroundColor: '#FFF8DC'
                }, {
                    plotBackgroundColor: null,//扇形背景色
                    plotBorderWidth: null,//扇形的边距
                    plotShadow: false,//扇形阴影
                    backgroundColor: '#FF7F50'
                }, {
                    plotBackgroundColor: null,//扇形背景色
                    plotBorderWidth: null,//扇形的边距
                    plotShadow: false,//扇形阴影
                    backgroundColor: '#7FFFD4'
                }],
                title: [
                    {
                        text: '地区占有比例'
                    },
                    {
                        text: '分类占有比例'
                    }
                    , {
                        text: '标签占有比例'
                    }],
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [[{
                    type: 'pie',
                    name: 'Zone share',
                    data: [
                        ['地区1', 45.0],
                        ['地区2', 26.8],
                        {
                            name: '地区3',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['地区4', 8.5],
                        ['地区5', 6.2],
                        ['地区6', 0.7]
                    ]
                }],
                    [{
                        type: 'pie',
                        name: 'type share',
                        data: [
                            ['分类1', 45.0],
                            ['分类2', 26.8],
                            {
                                name: '分类3',
                                y: 12.8,
                                sliced: true,
                                selected: true
                            },
                            ['分类4', 8.5],
                            ['分类5', 6.2],
                            ['分类6', 0.7]
                        ]
                    }], [{
                        type: 'pie',
                        name: 'tag share',
                        data: [
                            ['标签1', 45.0],
                            ['标签2', 26.8],
                            {
                                name: '标签3',
                                y: 12.8,
                                sliced: true,
                                selected: true
                            },
                            ['标签4', 8.5],
                            ['标签5', 6.2],
                            ['标签6', 0.7]
                        ]
                    }]],
                animeCount:0,//动漫数量
                chapterCount:0,//剧集数量
            }
        },
        mounted() {
            let json1 = {};
            json1.chart = this.chart[0];
            json1.title = this.title[0];
            json1.tooltip = this.tooltip;
            json1.series = this.series[0];
            json1.plotOptions = this.plotOptions;
            $('#container1').highcharts(json1);
            let json2 = {};
            json2.chart = this.chart[1];
            json2.title = this.title[1];
            json2.tooltip = this.tooltip;
            json2.series = this.series[1];
            json2.plotOptions = this.plotOptions;
            $('#container2').highcharts(json2);
            let json3 = {};
            json3.chart = this.chart[2];
            json3.title = this.title[2];
            json3.tooltip = this.tooltip;
            json3.series = this.series[2];
            json3.plotOptions = this.plotOptions;
            $('#container3').highcharts(json3);
            this.initCountInfo();
        },
        methods:{
            initCountInfo(){
                let _this = this;
                let formData = new window.FormData();
                formData.append("anime_type","");
                formData.append("anime_zone","");
                formData.append("anime_tag","");
                this.$http.post("http://localhost:9001/getAnimeInfoCountByAttribute",formData).then(function (response) {
                    _this.animeCount = response.data.animeInfoCount;
                });
                this.$http.get("http://localhost:9001/getChapterInfoCount").then(function (response) {
                    _this.chapterCount = response.data.chapterInfoCount;
                });
            }
        }
    }
</script>

<style scoped>
    .statisticsContent {
        padding: 0;
    }
</style>