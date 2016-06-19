
$(function () {
    // Set up the chart

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 45,

            }
        },

        color : '#ce2029',

        title: {
            text: 'Arsenic (AS) Contamination in Water in Bangladesh'
        },

        subtitle: {
            text: 'Drag the sliders to improve your perception'
        },

        plotOptions: {
            column: {
                depth: 25
            }
        },


        xAxis: {
            title: {
                text: 'TubeWell Depth in meters'
            },
            categories: ['0-16', '17-33', '33-50', '51-67', '>67']
        },

        yAxis: {
            title: {
                text: 'Percentage of AS Contamination'
            }
        },

        series: [{
            name : 'Clean Water',
            data: [15,5,10,80,98]

        },
        {
            name : 'Polluted Water',
            data: [85, 95, 90, 20, 2]
        }]


    });


    function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
    }

    // Activate the sliders
    $('#sliders input').on('input change', function () {
        chart.options.chart.options3d[this.id] = this.value;
        showValues();
        chart.redraw(false);
    });

    showValues();
});
