//立即执行函数可以使用同一个变量名-myChart
(function () {
    var myColor = ['blue','skyblue','yellow','pink','black','red','green']
    // 3/5 初始化echarts
    var myChart = echarts.init(document.querySelector('#main'))
    // 4/5 配置图表信息
    var option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                // 在柱子内显示数字
                label: {
                    // 打开显示
                    show: true,
                    // 在柱子内显示
                    position: 'inside',
                    // {c}代表data中的值
                    formatter: "{c}%"
                },
                // 配置各个柱子的属性
                itemStyle: {
                    // params是柱子的对象
                    color: function(params) {
                        // console.log(params)
                        // dataIndex是柱子的索引号
                        return myColor[params.dataIndex]
                    }
                }
            }
        ]
    }
    // 5/5 把配置和echarts绑定
    myChart.setOption(option)
    // 图表适应窗口没有完成
    window.addEventListener("resize", function() {
        myChart.resize()
    })
})()